import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  addons: ['@storybook/addon-a11y', '@storybook/addon-essentials', '@storybook/addon-links', '@storybook/addon-storysource', '@storybook/addon-styling'],
  features: {
    storyStoreV7: true,
  },
  framework: '@storybook/react-vite',
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  core: {
    disableTelemetry: true,
  },
};

export default config;
