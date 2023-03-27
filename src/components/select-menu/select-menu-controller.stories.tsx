import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { SelectMenuController } from '.';

const meta: Meta<typeof SelectMenuController> = {
    component: SelectMenuController,
    title: 'Application UI/Forms/Select Menu',
};

export default meta;

type Story = StoryObj;

export const SelectMenuControllerStory: Story = {
    name: 'Select menu controller',
    render: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { control, handleSubmit } = useForm<{ assignee: string; reviewer: string }>({
            defaultValues: { assignee: 'Pam', reviewer: 'Jim' },
        });

        return (
            <form className="space-y-4" role="form" onSubmit={handleSubmit(action('onSubmit'))}>
                <SelectMenuController control={control} name="assignee" label="Assigned to" options={['Jim', 'Dwight', 'Pam', 'Michael']} />
                <SelectMenuController control={control} name="reviewer" label="Reviewed by" options={['Jim', 'Dwight', 'Pam', 'Michael']} />
                <button className="rounded-md bg-indigo-50 py-2 px-3 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100" type="submit">
                    Submit
                </button>
            </form>
        );
    },
};
