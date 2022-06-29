import { expect } from '@storybook/jest';
import { Meta, Story } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import { InputWithLabelAndHelpText, InputWithLabelAndHelpTextProps } from '.';

export default {
    component: InputWithLabelAndHelpText,
    title: 'Application UI/Forms/Input Groups',
} as Meta;

const DefaultTemplate: Story<InputWithLabelAndHelpTextProps> = (args) => {
    return <InputWithLabelAndHelpText {...args} />;
};

const InputWithLabelAndHelpTextArgs: InputWithLabelAndHelpTextProps = {
    help: "We'll only use this for spam.",
    id: 'email',
    label: 'Email',
    placeholder: 'you@example.com',
    type: 'email',
};

export const InputWithLabelAndHelpTextStory = DefaultTemplate.bind({});

InputWithLabelAndHelpTextStory.args = InputWithLabelAndHelpTextArgs;
InputWithLabelAndHelpTextStory.storyName = 'Input with label and help text';
InputWithLabelAndHelpTextStory.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByLabelText(InputWithLabelAndHelpTextArgs.label);
    const value = 'dwight.schrute@theoffice.com';

    await userEvent.type(field, value);

    await expect(field).toHaveValue(value);
    await expect(canvas.getByText(InputWithLabelAndHelpTextArgs.help)).toBeInTheDocument();
};
