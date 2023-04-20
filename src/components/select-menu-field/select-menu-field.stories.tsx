import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { SelectMenuField } from '.';

const meta: Meta<typeof SelectMenuField> = {
    component: SelectMenuField,
    title: 'Application UI/Forms/Select Menu Field',
};

export default meta;

type Story = StoryObj<typeof SelectMenuField>;

export const SelectMenuControllerStory: Story = {
    name: 'Default',
    render: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { control, handleSubmit } = useForm<{ assignee: string; reviewer: string; manager: string }>({
            defaultValues: { assignee: 'pam', reviewer: 'jim' },
        });

        const options = [
            { label: 'Jim', value: 'jim' },
            { label: 'Dwight', value: 'dwight' },
            { label: 'Pam', value: 'pam' },
            { label: 'Michael', value: 'michael' },
        ];

        return (
            <div className="space-y-6">
                <div className="border-b border-gray-200 pb-5">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">SelectMenuField integration with React Hook Form</h3>
                </div>
                <div>
                    <form className="space-y-4" role="form" onSubmit={handleSubmit(action('onSubmit'))}>
                        <SelectMenuField control={control} name="assignee" label="Assigned to" options={options} />
                        <SelectMenuField control={control} name="reviewer" label="Reviewed by" options={options} />
                        <SelectMenuField control={control} name="manager" label="Manager" options={options} />
                        <button className="rounded-md bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    },
};
