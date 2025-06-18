import type AddonRegistry from '../src/template-registry';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry extends AddonRegistry {}
}
