import { forwardRef, InputHTMLAttributes } from 'react';

export type InputWithLabelProps = InputHTMLAttributes<HTMLInputElement> & { defaultValue?: string; name: string; label: string };

export const InputWithLabel = forwardRef<HTMLInputElement, InputWithLabelProps>((props, ref) => {
    const { className, name, label, type, ...attrs } = props;

    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <div className="mt-1">
                <input
                    id={name}
                    className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${className}`}
                    data-testid="input-with-label"
                    type={type || 'text'}
                    ref={ref}
                    {...attrs}
                />
            </div>
        </div>
    );
});

InputWithLabel.displayName = 'InputWithLabel';
