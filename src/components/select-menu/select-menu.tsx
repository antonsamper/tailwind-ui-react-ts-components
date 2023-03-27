import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { Fragment, useState } from 'react';

export type SelectMenuProps = { label: string; onChange?: (value: string) => void; options: string[]; value?: string };

export const SelectMenu = (props: SelectMenuProps) => {
    const { label, onChange, options, value = 'Select an option' } = props;
    const [selected, setSelected] = useState(value);

    const onOptionChange = (value: string) => {
        setSelected(value);
        onChange?.(value);
    };

    return (
        <Listbox value={selected} onChange={onOptionChange}>
            {({ open }) => (
                <div>
                    <Listbox.Label className="block text-sm font-medium text-gray-700">{label}</Listbox.Label>
                    <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            <span className="block truncate">{selected}</span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </Listbox.Button>

                        <Transition show={open} as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {['Select an option', ...options].map((option, index) => (
                                    <Listbox.Option
                                        key={index}
                                        className={({ active }) =>
                                            clsx(active ? 'bg-indigo-600 text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-8 pr-4')
                                        }
                                        value={option}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span className={clsx(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>{option}</span>

                                                {selected ? (
                                                    <span
                                                        className={clsx(
                                                            active ? 'text-white' : 'text-indigo-600',
                                                            'absolute inset-y-0 left-0 flex items-center pl-1.5',
                                                        )}
                                                    >
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </div>
            )}
        </Listbox>
    );
};

SelectMenu.displayName = 'SelectMenu';
