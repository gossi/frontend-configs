import Component from '@glimmer/component';

export interface GreetingSignature {
  Element: HTMLDivElement;
  Args: {
    hello: string;
    to: string;
  };
}

export default class GreetingComponent extends Component<GreetingSignature> {
  get to() {
    return `${this.args.to[0].toUpperCase()}${this.args.to.slice(1).toLowerCase()}`;
  }
}
