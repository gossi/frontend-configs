import type { TOC } from '@ember/component/template-only';

export interface HelloSignature {
  Args: {
    name: string;
  };
}

const Hello: TOC<HelloSignature> = <template>Hello {{@name}}</template>;

export default Hello;
