// eslint-disable-next-line import-x/default
import babelParser from '@babel/eslint-parser';
import js from '@eslint/js';

import importSorting from './rules/import-sorting.js';
import imports from './rules/imports.js';
import noConsole from './rules/no-console.js';
import paddingLineBetweenStatements from './rules/padding-line-between-statements.js';
import { resolvePrettier } from './rules/prettier.js';

export default [
  /**
   * Ignores must be in their own object
   * https://eslint.org/docs/latest/use/configure/ignore
   */
  {
    ignores: ['dist/', 'tmp/', 'declarations/', 'node_modules/', 'coverage/', '!**/.*']
  },
  /**
   * https://eslint.org/docs/latest/use/configure/configuration-files#configuring-linter-options
   */
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error'
    }
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      parser: babelParser
    }
  },
  /**
   * Configs
   */
  ...resolvePrettier(),
  js.configs.recommended,
  noConsole,
  paddingLineBetweenStatements,
  importSorting,
  {
    rules: {
      // const has misleading safety implications
      // look in to "liberal let"
      'prefer-const': 'off',

      // people should know that no return is undefined in JS
      'getter-return': ['error', { allowImplicit: true }]
    }
  },
  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs', '**/*.ts'],
    extends: [...imports]
  }
];
