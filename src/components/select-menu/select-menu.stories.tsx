import { Meta, StoryObj } from '@storybook/react';

import { SelectMenu } from '.';

const meta: Meta<typeof SelectMenu> = {
    component: SelectMenu,
    title: 'Application UI/Forms/Select Menu',
};

export default meta;

type Story = StoryObj<typeof SelectMenu>;

export const SelectMenuStory: Story = {
    args: {
        defaultValue: 'jim',
        label: 'Assigned to',
        name: 'assignee',
        onChange: undefined,
        options: [
            { label: 'Jim', value: 'jim' },
            { label: 'Dwight', value: 'dwight' },
            { label: 'Pam', value: 'pam' },
            { label: 'Michael', value: 'michael' },
        ],
    },
    name: 'Select menu',
    render: (properties) => {
        return (
            <div className="space-y-6">
                <div className="border-b border-gray-200 pb-5">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">Uncontrolled Select Menu</h3>
                </div>
                <div>
                    <SelectMenu {...properties} />
                </div>
            </div>
        );
    },
};
