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
    render: (properties) => {
        return (
            <div className="space-y-6">
                <div className="border-b border-gray-200 pb-5">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">Uncontrolled Input With Label</h3>
                </div>
                <div>
                    <InputWithLabel {...properties} />
                </div>
            </div>
        );
    },
};
