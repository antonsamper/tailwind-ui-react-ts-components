import { expect } from '@storybook/jest';
import { Meta, Story } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import { InputWithLabel, InputWithLabelProps } from '.';

export default {
    component: InputWithLabel,
    title: 'Application UI/Forms/Input Groups',
} as Meta;

const DefaultTemplate: Story<InputWithLabelProps> = (args) => {
    return <InputWithLabel {...args} />;
};

const InputWithLabelArgs: InputWithLabelProps = {
    id: 'email',
    label: 'Email',
    placeholder: 'you@example.com',
    type: 'email',
};

export const InputWithLabelStory = DefaultTemplate.bind({});

InputWithLabelStory.args = InputWithLabelArgs;
InputWithLabelStory.storyName = 'Input with label';
InputWithLabelStory.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByLabelText(InputWithLabelArgs.label);
    const value = 'dwight.schrute@theoffice.com';

    await userEvent.type(field, value);

    await expect(field).toHaveValue(value);
};
