module.exports = {
  addons: ['@storybook/addon-a11y', '@storybook/addon-essentials', '@storybook/addon-links', '@storybook/addon-styling'],
  features: {
    storyStoreV7: true,
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
};
