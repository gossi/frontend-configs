'use strict';

const baseNamingConventions = require('../naming-conventions/base');

/**
 * @type {import('../types').PartialConfig}
 */
const rule = {
  // plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended-type-checked']
};

module.exports = { rule };
