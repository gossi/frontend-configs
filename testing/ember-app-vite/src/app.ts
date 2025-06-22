import Application from '@ember/application';
import { importSync, isDevelopingApp, macroCondition } from '@embroider/macros';

import Resolver from 'ember-resolver';

import config from '#config';

import { registry } from './registry.ts';

if (macroCondition(isDevelopingApp())) {
  importSync('./deprecation-workflow');
}

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  Resolver = Resolver.withModules(registry);
}

// loadInitializers(App, config.modulePrefix, compatModules);
