/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', '.storybook/*.{js,jsx,ts,tsx}'],
    darkMode: ['class', '[data-mode="dark"]'],
    plugins: [require('@tailwindcss/forms')],
    theme: {
        extend: {},
    },
};
