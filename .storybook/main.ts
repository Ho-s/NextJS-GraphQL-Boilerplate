import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: ['@storybook/addon-links', '@chromatic-com/storybook', '@storybook/addon-docs'],

  framework: {
    name: '@storybook/nextjs',
    options: {},
  },

  features: {
    experimentalRSC: true,
  },
};

export default config;
