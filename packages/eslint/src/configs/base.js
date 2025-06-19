import js from '@eslint/js';

import base from './rules/base.js';
import importSorting from './rules/import-sorting.js';
import imports from './rules/imports.js';
import noConsole from './rules/no-console.js';
import paddingLineBetweenStatements from './rules/padding-line-between-statements.js';
import { resolvePrettier } from './rules/prettier.js';

export function config(root) {
  return [
    /**
     * Ignores must be in their own object
     * https://eslint.org/docs/latest/use/configure/ignore
     */
    {
      name: 'gossi/base/ignores',
      ignores: ['dist/', 'tmp/', 'declarations/', 'coverage/', '!**/.*']
    },
    /**
     * https://eslint.org/docs/latest/use/configure/configuration-files#configuring-linter-options
     */
    {
      name: 'gossi/base/linter-options',
      linterOptions: {
        reportUnusedDisableDirectives: 'error'
      }
    },
    /**
     * Configs
     */
    ...resolvePrettier(root),
    js.configs.recommended,
    noConsole,
    paddingLineBetweenStatements,
    importSorting,
    base,
    ...imports
    // {
    //   // name: 'gossi/base/imports',
    //   files: ['**/*.js', '**/*.mjs', '**/*.cjs', '**/*.ts'],
    //   extends: []
    // }
  ];
}
