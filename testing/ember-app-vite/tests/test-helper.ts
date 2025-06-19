import { setApplication } from '@ember/test-helpers';
import * as QUnit from 'qunit';
import { setup } from 'qunit-dom';
import { setupEmberOnerrorValidation, start as qunitStart } from 'ember-qunit';

import Application from 'ember-app-vite/app';
import config from 'ember-app-vite/config/environment';

export function start() {
  setApplication(Application.create(config.APP));

  // eslint-disable-next-line import-x/namespace
  setup(QUnit.assert);
  setupEmberOnerrorValidation();

  qunitStart();
}
