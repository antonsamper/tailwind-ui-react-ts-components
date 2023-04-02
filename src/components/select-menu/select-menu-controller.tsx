import React from 'react';
import { FieldValues, useController, UseControllerProps } from 'react-hook-form';

import type { SelectMenuProperties } from '.';
import { SelectMenu } from '.';

export type SelectMenuControllerProperties<T extends FieldValues = FieldValues> = SelectMenuProperties & UseControllerProps<T>;

export const SelectMenuController = <T extends FieldValues>(properties: SelectMenuControllerProperties<T>) => {
    const { control, defaultValue, name, ...attributes } = properties;
    const { field } = useController({ control, defaultValue, name });
    const { onChange, ref, value } = field;

    return <SelectMenu {...attributes} onChange={onChange} ref={ref} value={value} />;
};

SelectMenuController.displayName = 'SelectMenuController';
