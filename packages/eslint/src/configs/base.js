import js from '@eslint/js';

import base from './rules/base.js';
import importSorting from './rules/import-sorting.js';
import imports from './rules/imports.js';
import { resolvePrettier } from './rules/prettier.js';
import stylistic from './rules/stylistic.js';

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
    js.configs.recommended,
    ...base,
    ...stylistic,
    ...importSorting,
    ...imports,
    ...resolvePrettier(root)
    // {
    //   // name: 'gossi/base/imports',
    //   files: ['**/*.js', '**/*.mjs', '**/*.cjs', '**/*.ts'],
    //   extends: []
    // }
  ];
}
