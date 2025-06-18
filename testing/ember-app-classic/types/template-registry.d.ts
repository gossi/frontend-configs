import '@glint/environment-ember-loose';
import '@glint/environment-ember-template-imports';

import type GreetingComponent from '../app/components/greeting';
import type WelcomeComponent from '../app/components/welcome';
import type { HelperLike } from '@glint/template';
import type WelcomePage from 'ember-welcome-page/components/welcome-page';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry /* other addon registries */ {
    // local entries
    WelcomePage: typeof WelcomePage;
    'page-title': HelperLike<{
      Args: { Positional: [title: string] };
      Return: void;
    }>;
    Greeting: typeof GreetingComponent;
    Welcome: typeof WelcomeComponent;
  }
}
