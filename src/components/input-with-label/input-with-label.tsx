import { forwardRef, InputHTMLAttributes } from 'react';

export type InputWithLabelProperties = InputHTMLAttributes<HTMLInputElement> & { defaultValue?: string; name: string; label: string };

export const InputWithLabel = forwardRef<HTMLInputElement, InputWithLabelProperties>((properties, reference) => {
    const { className, name, label, type, ...attributes } = properties;

    return (
        <div data-testid="component-input-with-label">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <div className="mt-1">
                <input
                    id={name}
                    className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${className}`}
                    type={type || 'text'}
                    ref={reference}
                    {...attributes}
                />
            </div>
        </div>
    );
});

InputWithLabel.displayName = 'InputWithLabel';
