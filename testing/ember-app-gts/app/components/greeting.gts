import Component from '@glimmer/component';

export interface GreetingSignature {
  Element: HTMLSpanElement;
  Args: {
    hello: string;
    to: string;
  };
}

export default class Greeting extends Component<GreetingSignature> {
  get to() {
    return `${this.args.to[0]?.toUpperCase()}${this.args.to.slice(1).toLowerCase()}`;
  }

  <template>
    <span ...attributes>{{@hello}} to {{this.to}}</span>
  </template>
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Greeting: typeof Greeting;
  }
}
