import Greeting from './greeting.gts';

import type { Meta, StoryObj } from 'ember-storybook';

export default {
  title: 'Greeting',
  component: Greeting
} satisfies Meta;

type Story = StoryObj<{ hello: string; to: string }>;

export const Default: Story = {
  args: {
    hello: 'Hello',
    to: 'World'
  }
};
