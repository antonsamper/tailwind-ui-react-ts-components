import { forwardRef, InputHTMLAttributes } from 'react';

export type InputWithLabelProperties = InputHTMLAttributes<HTMLInputElement> & { defaultValue?: string; name: string; label: string };

export const InputWithLabel = forwardRef<HTMLInputElement, InputWithLabelProperties>((properties, reference) => {
    const { className, name, label, type, ...attributes } = properties;

    return (
        <div data-testid="component-input-with-label">
            <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div className="mt-1">
                <input
                    id={name}
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${className}`}
                    type={type || 'text'}
                    ref={reference}
                    {...attributes}
                />
            </div>
        </div>
    );
});

InputWithLabel.displayName = 'InputWithLabel';
