import EmberRouter from '@ember/routing/router';

import config from 'ember-app-classic/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

// eslint-disable-next-line unicorn/no-top-level-side-effects
Router.map(function () {
  // define routes here
});
