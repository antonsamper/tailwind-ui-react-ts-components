import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

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
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { control, handleSubmit } = useForm<{ email: string; job: string; name: string }>({
            defaultValues: { email: 'jim.halpert@theoffice.com', name: 'Jim Halpert' },
        });

        return (
            <div className="space-y-6">
                <div className="border-b border-gray-200 pb-5">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">InputField integration with React Hook Form</h3>
                </div>
                <div>
                    <form className="space-y-4" role="form" onSubmit={handleSubmit(action('onSubmit'))}>
                        <InputField control={control} name="name" label="Name" placeholder="John Doe" />
                        <InputField control={control} name="email" label="Email" placeholder="you@example.com" type="email" />
                        <InputField control={control} name="job" label="Job" placeholder="Administrator" />
                        <button className="rounded-md bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    },
};
