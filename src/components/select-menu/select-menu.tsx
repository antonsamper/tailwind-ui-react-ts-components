import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { forwardRef, Fragment, useState } from 'react';

type SelectMenuOption = { label: string; value?: string };
export type SelectMenuProperties = {
    defaultValue?: string;
    label: string;
    name: string;
    onChange?: (value?: string) => void;
    options: SelectMenuOption[];
    value?: string;
};

const initialOption: SelectMenuOption = { label: 'Select an option', value: '' };

export const SelectMenu = forwardRef<HTMLButtonElement, Omit<SelectMenuProperties, 'value' | 'onChange'> | Omit<SelectMenuProperties, 'defaultValue'>>(
    (properties, reference) => {
        const { defaultValue, label, onChange, options, value, ...attributes } = properties;
        const [selected, setSelected] = useState(
            options.find((option) => {
                return option.value === defaultValue || option.value === value;
            }) || initialOption,
        );
        console.log(selected);
        const onOptionChange = (option: SelectMenuOption) => {
            setSelected(option);
            onChange?.(option === initialOption ? undefined : option.value);
        };

        return (
            <Listbox
                data-testid="component-select-menu"
                defaultValue={'defaultValue' in properties ? selected : undefined}
                onChange={onChange ? onOptionChange : undefined}
                value={'value' in properties ? selected : undefined}
                {...attributes}
            >
                {({ open }) => {
                    return (
                        <div>
                            <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">{label}</Listbox.Label>
                            <div className="relative mt-1">
                                <Listbox.Button
                                    ref={reference}
                                    className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                >
                                    {({ value }) => {
                                        return (
                                            <>
                                                <span className="block truncate">{onChange ? selected.label : value.label}</span>
                                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                </span>
                                            </>
                                        );
                                    }}
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
        );
    },
);

SelectMenu.displayName = 'SelectMenu';
