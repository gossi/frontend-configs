import { hbs } from 'ember-cli-htmlbars';

import type { Meta, StoryObj } from '@storybook/ember';

export default {
  title: 'Greeting',
  component: 'Greeting'
} as Meta;

type Story = StoryObj<{ hello: string; to: string }>;

export const Default: Story = {
  render: (args) => ({
    template: hbs`
      {{!@glint-ignore}}
      <Greeting @hello={{this.hello}} @to={{this.to}} />
    `,
    context: args
  })
};
