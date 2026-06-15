import Application from '@ember/application';

import config from 'ember-app-classic/config/environment';
import loadInitializers from 'ember-load-initializers';
import Resolver from 'ember-resolver';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

// eslint-disable-next-line unicorn/no-top-level-side-effects
loadInitializers(App, config.modulePrefix);
