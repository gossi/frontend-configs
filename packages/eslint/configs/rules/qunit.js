'use strict';

const plugin = 'qunit';

/**
 * @type {import('../types').PartialConfig}
 */
const rule = {
  extends: ['plugin:qunit/recommended']
};

module.exports = { rule, plugin };
