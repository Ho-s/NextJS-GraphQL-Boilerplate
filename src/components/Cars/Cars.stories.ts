import type { Meta, StoryObj } from '@storybook/nextjs';

import Cars from '.';

const meta = {
  title: 'Cars',

  loaders: [async ({ args }) => ({ Component: await Cars({ ...args }) })],
  render: (_, { loaded: { Component } }) => {
    return Component;
  },

  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Cars>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { latency: 1000 },
};
