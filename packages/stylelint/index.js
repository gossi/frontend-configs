'use strict';

const { browsers } = require('@gossi/config-targets');
const configure = require('./configure');

module.exports = configure({ browsers });
