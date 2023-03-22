import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { InputWithLabelController } from '.';

const meta: Meta<typeof InputWithLabelController> = {
    component: InputWithLabelController,
    title: 'Application UI/Forms/Input Groups',
};

export default meta;

type Story = StoryObj;

export const InputWithLabelControllerStory: Story = {
    name: 'Input with label controller',
    render: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { control, handleSubmit } = useForm<{ email: string; name: string }>({
            defaultValues: { email: 'jim.halpert@theoffice.com', name: 'Jim Halpert' },
        });

        return (
            <form className="space-y-4" role="form" onSubmit={handleSubmit(action('onSubmit'))}>
                <InputWithLabelController control={control} name="name" label="Name" placeholder="John Doe" />
                <InputWithLabelController control={control} name="email" label="Email" placeholder="you@example.com" type="email" />
                <button className="rounded-md bg-indigo-50 py-2 px-3 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100" type="submit">
                    Submit
                </button>
            </form>
        );
    },
};
