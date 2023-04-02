import React from 'react';
import { FieldValues, useController, UseControllerProps } from 'react-hook-form';

import type { InputWithLabelProperties } from '.';
import { InputWithLabel } from '.';

export type InputWithLabelControllerProperties<T extends FieldValues = FieldValues> = InputWithLabelProperties & UseControllerProps<T>;

export const InputWithLabelController = <T extends FieldValues>(properties: InputWithLabelControllerProperties<T>) => {
    const { control, defaultValue, name, ...attributes } = properties;
    const { field } = useController({ control, defaultValue, name });

    return <InputWithLabel {...attributes} {...field} />;
};

InputWithLabelController.displayName = 'InputWithLabelController';
