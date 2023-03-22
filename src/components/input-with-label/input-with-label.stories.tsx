import { Meta, StoryObj } from '@storybook/react';

import { InputWithLabel } from '.';

const meta: Meta<typeof InputWithLabel> = {
    component: InputWithLabel,
    title: 'Application UI/Forms/Input Groups',
};

export default meta;

type Story = StoryObj<typeof InputWithLabel>;

export const InputWithLabelStory: Story = {
    args: {
        defaultValue: 'jim.halpert@theoffice.com',
        label: 'Email',
        name: 'email',
        placeholder: 'you@example.com',
        type: 'email',
    },
    name: 'Input with label',
    render: (props) => {
        return <InputWithLabel {...props} />;
    },
};
