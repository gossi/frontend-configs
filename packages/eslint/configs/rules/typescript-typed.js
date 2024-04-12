'use strict';

/**
 * @type {import('../types').PartialConfig}
 */
const rule = {
  extends: ['plugin:@typescript-eslint/strict-type-checked'],
  rules: {
    // much concise
    '@typescript-eslint/prefer-optional-chain': 'error',

    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      {
        ignoreArrowShorthand: true
      }
    ]
  }
};

module.exports = { rule };
