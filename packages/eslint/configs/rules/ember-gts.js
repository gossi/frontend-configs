'use strict';

const plugin = 'ember';

/**
 * @type {import('../types').PartialConfig}
 */
const rule = {
  plugins: [plugin],
  extends: ['plugin:ember/recommended-gts']
};

module.exports = { rule, plugin };
