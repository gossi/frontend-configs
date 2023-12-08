'use strict';

const plugin = 'ember';

/**
 * @type {import('../types').PartialConfig}
 */
const rule = {
  plugins: [plugin],
  extends: ['plugin:ember/recommended-gjs']
};

module.exports = { rule, plugin };
