'use strict';

/**
 *
 * @type {import('../types').PartialConfig}
 */
const rule = {
  extends: ['plugin:eslint-plugin-import-x/typescript'],
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
