import { setApplication } from '@ember/test-helpers';
import * as QUnit from 'qunit';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

import Application from 'ember-app-classic/app';
import config from 'ember-app-classic/config/environment';

setApplication(Application.create(config.APP));

// eslint-disable-next-line import-x/namespace
setup(QUnit.assert);

start();
