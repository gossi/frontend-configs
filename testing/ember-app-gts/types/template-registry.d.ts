import '@glint/environment-ember-loose';

import type { HelperLike } from '@glint/template';
import type WelcomePage from 'ember-welcome-page/components/welcome-page';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry /* other addon registries */ {
    // local entries
    WelcomePage: typeof WelcomePage;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'page-title': HelperLike<{
      Args: { Positional: [title: string] };
      Return: void;
    }>;
  }
}
