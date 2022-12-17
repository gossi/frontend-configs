import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Greeting'
};

export const Default = (args: { hello: string; to: string }) => ({
  template: hbs`
    <Greeting @hello={{this.hello}} @to={{this.to}}/>
  `,
  context: args
});
