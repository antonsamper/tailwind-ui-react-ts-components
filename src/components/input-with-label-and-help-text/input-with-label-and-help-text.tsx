import { forwardRef, InputHTMLAttributes } from 'react';

export type InputWithLabelAndHelpTextProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'children'> & { id: string; label: string; help: string };
export type InputWithLabelAndHelpTextRef = HTMLInputElement;

const InputWithLabelAndHelpText = forwardRef<InputWithLabelAndHelpTextRef, InputWithLabelAndHelpTextProps>(
    ({ className, help, id, label, type, ...props }, ref) => {
        return (
            <div>
                <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
                <div className="mt-1">
                    <input
                        id={id}
                        className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${className}`}
                        data-testid="input-with-label"
                        ref={ref}
                        type={type || 'text'}
                        {...props}
                    />
                </div>
                <p className="mt-2 text-sm text-gray-500">{help}</p>
            </div>
        );
    },
);

InputWithLabelAndHelpText.displayName = 'InputWithLabelAndHelpText';

export { InputWithLabelAndHelpText };
