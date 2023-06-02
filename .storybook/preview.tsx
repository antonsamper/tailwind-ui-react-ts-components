import '../src/tailwind.css';

import { withThemeByDataAttribute } from '@storybook/addon-styling';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  withThemeByDataAttribute({
    attributeName: 'data-mode',
    defaultTheme: 'light',
    themes: {
      dark: 'dark',
      light: 'light',
    },
  }),
];

// Set additional TailwindCSS theming classes
document.querySelector('html').classList.add('h-full');
document.body.classList.add('min-h-screen', 'bg-white', 'dark:bg-slate-800');
