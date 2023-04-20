import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { ButtonHTMLAttributes, Fragment, useState } from 'react';
import { ControllerRenderProps, FieldValues, useController, UseControllerProps } from 'react-hook-form';

type SelectMenuOption = { label: string; value?: string };

type SelectMenuFieldProperties<T extends FieldValues = FieldValues> = Omit<
    ButtonHTMLAttributes<HTMLButtonElement> & UseControllerProps<T>,
    Exclude<keyof ControllerRenderProps, 'name'> | 'className' | 'defaultChecked' | 'defaultValue' | 'id'
> & {
    label: string;
    options: SelectMenuOption[];
};

const initialOption: SelectMenuOption = { label: 'Select an option', value: '' };

export const SelectMenuField = <T extends FieldValues>(properties: SelectMenuFieldProperties<T>) => {
    const { control, label, name, options, ...attributes } = properties;

    const { field } = useController({ control, name });
    const [selected, setSelected] = useState(
        options.find((option) => {
            return option.value === field.value;
        }) || initialOption,
    );

    const onOptionChange = (option: SelectMenuOption) => {
        setSelected(option);

        field.onChange(option === initialOption ? undefined : option.value);
    };

    return (
        <div data-testid="component-select-menu-field">
            <Listbox onChange={onOptionChange} value={selected} {...attributes}>
                {({ open }) => {
                    return (
                        <div>
                            <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">{label}</Listbox.Label>
                            <div className="relative mt-1">
                                <Listbox.Button
                                    ref={field.ref}
                                    className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                >
                                    <span className="block truncate">{selected.label}</span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </span>
                                </Listbox.Button>

                                <Transition show={open} as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {[initialOption, ...options].map((option, index) => {
                                            return (
                                                <Listbox.Option
                                                    key={index}
                                                    className={({ active }) => {
                                                        return clsx('relative cursor-default select-none py-2 pl-8 pr-4', {
                                                            'bg-indigo-600 text-white': active,
                                                            'text-gray-900': !active,
                                                        });
                                                    }}
                                                    value={option}
                                                >
                                                    {({ selected, active }) => {
                                                        return (
                                                            <>
                                                                <span
                                                                    className={clsx('block cursor-pointer truncate', {
                                                                        'font-normal': !selected,
                                                                        'font-semibold': selected,
                                                                    })}
                                                                >
                                                                    {option.label}
                                                                </span>

                                                                {selected ? (
                                                                    <span
                                                                        className={clsx(
                                                                            active ? 'text-white' : 'text-indigo-600',
                                                                            'absolute inset-y-0 left-0 flex items-center pl-1.5',
                                                                        )}
                                                                    >
                                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                    </span>
                                                                ) : undefined}
                                                            </>
                                                        );
                                                    }}
                                                </Listbox.Option>
                                            );
                                        })}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </div>
                    );
                }}
            </Listbox>
        </div>
    );
};
