import { FunctionComponent } from 'react';
import { Controller } from 'react-hook-form';
import { UseControllerProps } from 'react-hook-form/dist/types/controller';

import { InputWithLabel, InputWithLabelProps } from '.';

export type InputWithLabelControllerProps = InputWithLabelProps & UseControllerProps;

export const InputWithLabelController: FunctionComponent<InputWithLabelControllerProps> = (props) => {
    const { control, defaultValue, name, rules, ...rest } = props;

    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            defaultValue={defaultValue}
            render={({ field }) => {
                return <InputWithLabel {...field} {...rest} />;
            }}
        />
    );
};

InputWithLabelController.displayName = 'InputWithLabelController';
