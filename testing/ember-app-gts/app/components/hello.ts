import templateOnlyComponent from '@ember/component/template-only';

export interface HelloSignature {
  Args: {
    name: string;
  };
}

const Hello = templateOnlyComponent<HelloSignature>();

export default Hello;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Hello: typeof Hello;
  }
}
