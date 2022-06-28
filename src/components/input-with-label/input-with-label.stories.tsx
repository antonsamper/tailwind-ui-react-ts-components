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

const InputWithLabelArgs: InputWithLabelProps = { id: 'name', label: 'Name', placeholder: 'Jim Halpert' };
export const Default = DefaultTemplate.bind({});
Default.args = InputWithLabelArgs;
Default.storyName = 'InputWithLabel';
Default.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByLabelText(InputWithLabelArgs.label);
    const value = 'Dwight Schrute';

    await userEvent.type(field, value);
    await expect(field).toHaveValue(value);
};
