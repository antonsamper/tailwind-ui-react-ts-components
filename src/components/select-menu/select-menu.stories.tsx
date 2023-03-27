import { Meta, StoryObj } from '@storybook/react';

import { SelectMenu } from '.';

const meta: Meta<typeof SelectMenu> = {
    component: SelectMenu,
    title: 'Application UI/Forms/Select Menu',
};

export default meta;

type Story = StoryObj<typeof SelectMenu>;

export const SelectMenuStory: Story = {
    args: { label: 'Assigned to', options: ['Jim', 'Dwight', 'Pam', 'Michael'] },
    name: 'Select menu',
    render: (props) => {
        return <SelectMenu {...props} />;
    },
};
