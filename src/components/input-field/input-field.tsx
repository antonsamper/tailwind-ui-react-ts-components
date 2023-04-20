import React, { InputHTMLAttributes } from 'react';
import { FieldValues, useController, UseControllerProps } from 'react-hook-form';

type InputFieldProperties<T extends FieldValues = FieldValues> = Omit<
    InputHTMLAttributes<HTMLInputElement> & UseControllerProps<T>,
    'className' | 'defaultChecked' | 'defaultValue' | 'id' | 'value'
> & {
    label: string;
};

export const InputField = <T extends FieldValues>(properties: InputFieldProperties<T>) => {
    const { control, label, name, type = 'text', ...attributes } = properties;
    const { field } = useController({ control, name });

    return (
        <div data-testid="component-input">
            <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div className="mt-1">
                <input
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    id={name}
                    type={type}
                    {...field}
                    {...attributes}
                />
            </div>
        </div>
    );
};
