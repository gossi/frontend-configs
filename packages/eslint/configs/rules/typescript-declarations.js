'use strict';

const baseNamingConventions = require('../naming-conventions/base');

const rule = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/no-empty-interface': 'off',

    /**
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md#enforce-the-codebase-follows-eslints-camelcase-conventions
     */
    // camelcase: 'off',
    '@typescript-eslint/naming-convention': ['error', ...baseNamingConventions]
  }
};

module.exports = { rule };
