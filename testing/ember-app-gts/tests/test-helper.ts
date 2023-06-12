import { setApplication } from '@ember/test-helpers';
import * as QUnit from 'qunit';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

import Application from 'ember-app-gts/app';
import config from 'ember-app-gts/config/environment';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
