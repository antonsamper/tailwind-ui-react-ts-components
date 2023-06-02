import { zodResolver } from '@hookform/resolvers/zod';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { InputField } from '.';

const meta: Meta<typeof InputField> = {
    component: InputField,
    title: 'Application UI/Forms/Input Field',
};

export default meta;

type Story = StoryObj<typeof InputField>;

export const InputFieldStory: Story = {
    name: 'Default',
    render: () => {
        const schema = z.object({
            email: z.string().email(),
            firstname: z.string(),
            job: z.string().nonempty({ message: 'A job title is required.' }),
            middlename: z.string(),
        });

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { control, handleSubmit, watch } = useForm<z.infer<typeof schema>>({
            defaultValues: { email: 'jim.halpert@theoffice.com', firstname: 'Jim Halpert', job: '', middlename: '' },
            resolver: zodResolver(schema),
        });

        return (
            <div className="space-y-6">
                <div className="border-b border-gray-200 pb-5 dark:border-slate-200">
                    <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-slate-200">InputField integration with React Hook Form</h3>
                </div>
                <div>
                    <form className="space-y-4" onSubmit={handleSubmit(action('onSubmit'))}>
                        <InputField control={control} label="First Name" name="firstname" placeholder="John Doe" />
                        <InputField control={control} disabled={watch('firstname') === ''} label="Middle Name" name="middlename" placeholder="Patrick" />
                        <InputField control={control} label="Email" name="email" placeholder="you@example.com" type="email" />
                        <InputField control={control} label="Job Title" name="job" placeholder="Administrator" />
                        <button
                            className="dark:border-1 rounded-md bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100 dark:bg-gray-700 dark:text-slate-200 dark:hover:bg-gray-600/30"
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    },
};
