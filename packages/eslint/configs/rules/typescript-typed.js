'use strict';

/**
 * @type {import('../types').PartialConfig}
 */
const rule = {
  extends: ['plugin:@typescript-eslint/strict-type-checked'],
  rules: {
    // much concise
    '@typescript-eslint/prefer-optional-chain': 'error'
  }
};

module.exports = { rule };
