import type AddonRegistry from '../src/template-registry';

declare module '@glint/environment-ember-loose/registry' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export default interface Registry extends AddonRegistry {}
}
