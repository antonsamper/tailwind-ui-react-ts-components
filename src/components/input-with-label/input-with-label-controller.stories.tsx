import { action } from '@storybook/addon-actions';
import { expect } from '@storybook/jest';
import { Meta, Story } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { useForm } from 'react-hook-form';

import { InputWithLabel, InputWithLabelController, InputWithLabelControllerProps } from '.';

export default {
    component: InputWithLabel,
    title: 'Application UI/Forms/Input Groups',
} as Meta;

const DefaultTemplate: Story<InputWithLabelControllerProps> = ({ name, required, ...rest }) => {
    const { control, handleSubmit } = useForm();

    return (
        <form role="form" onSubmit={handleSubmit(action('onSubmit'))}>
            <InputWithLabelController control={control} name={name} rules={{ required }} {...rest} />
            <input type="submit" />
        </form>
    );
};

const InputWithLabelControllerArgs: InputWithLabelControllerProps = {
    defaultValue: '',
    id: 'email',
    label: 'Email',
    name: 'email',
    placeholder: 'you@example.com',
    type: 'email',
};

export const InputWithLabelControllerStory = DefaultTemplate.bind({});

InputWithLabelControllerStory.args = InputWithLabelControllerArgs;
InputWithLabelControllerStory.storyName = 'Input with label controller';
InputWithLabelControllerStory.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByLabelText(InputWithLabelControllerArgs.label);
    const form = canvas.getByRole('form') as HTMLFormElement;
    const value = 'dwight.schrute@theoffice.com';

    await userEvent.type(field, value);
    await userEvent.click(canvas.getByRole('button'));

    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData);

    await waitFor(() => {
        expect(field).toHaveValue(value);
        expect(formValues[InputWithLabelControllerArgs.name]).toBe(value);
    });
};
