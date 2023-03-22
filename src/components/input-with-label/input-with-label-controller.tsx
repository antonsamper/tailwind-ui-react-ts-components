import React from 'react';
import { FieldValues, useController, UseControllerProps } from 'react-hook-form';

import { InputWithLabel, InputWithLabelProps } from '.';

export type InputWithLabelControllerProps<T extends FieldValues = FieldValues> = InputWithLabelProps & UseControllerProps<T>;

export const InputWithLabelController = <T extends FieldValues>(props: InputWithLabelControllerProps<T>) => {
    const { control, defaultValue, name, ...attrs } = props;
    const { field } = useController({ control, defaultValue, name });

    return <InputWithLabel {...attrs} {...field} />;
};

InputWithLabelController.displayName = 'InputWithLabelController';
