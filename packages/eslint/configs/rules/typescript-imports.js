'use strict';

/**
 *
 * @type {import('../types').PartialConfig}
 */
const rule = {
  extends: ['plugin:i/typescript'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.gts', '.tsx']
    }
  },
  rules: {
    // importing
    'n/no-missing-import': 'off'
  }
};

module.exports = { rule };
