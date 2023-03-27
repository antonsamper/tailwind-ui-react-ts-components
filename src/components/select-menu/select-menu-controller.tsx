import React from 'react';
import { FieldValues, useController, UseControllerProps } from 'react-hook-form';

import { SelectMenu, SelectMenuProps } from '.';

export type SelectMenuControllerProps<T extends FieldValues = FieldValues> = SelectMenuProps & UseControllerProps<T>;

export const SelectMenuController = <T extends FieldValues>(props: SelectMenuControllerProps<T>) => {
    const { control, defaultValue, name, ...attrs } = props;
    const { field } = useController({ control, defaultValue, name });

    return <SelectMenu {...attrs} onChange={field.onChange} value={field.value} />;
};

SelectMenuController.displayName = 'SelectMenuController';
