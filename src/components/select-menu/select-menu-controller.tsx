import React from 'react';
import { FieldValues, useController, UseControllerProps } from 'react-hook-form';

import { SelectMenu, SelectMenuProps } from '.';

export type SelectMenuControllerProps<T extends FieldValues = FieldValues> = SelectMenuProps & UseControllerProps<T>;

export const SelectMenuController = <T extends FieldValues>(props: SelectMenuControllerProps<T>) => {
    const { control, defaultValue, name, ...attrs } = props;
    const { field } = useController({ control, defaultValue, name });
    const { onChange, ref, value } = field;

    return <SelectMenu {...attrs} onChange={onChange} ref={ref} value={value} />;
};

SelectMenuController.displayName = 'SelectMenuController';
