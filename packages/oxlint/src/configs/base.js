import { defineConfig } from 'oxlint';

import base from './rules/base.js';
import core from './rules/core.js';
import imports from './rules/imports.js';

/**
 * The oxlint port of `@gossi/config-eslint` base.
 *
 * - `js.configs.recommended` → the matching oxlint rules (`rules/core.js`)
 * - `eslint-plugin-unicorn` recommended → oxlint's native unicorn rules (`rules/base.js`)
 * - `import-x` recommended → oxlint's native import rules (`rules/imports.js`)
 * - `@stylistic/eslint-plugin` and `prettier` moved to `@gossi/config-oxfmt`
 *
 * NOTE: oxlint enables the `correctness` category by default; we state it explicitly
 * to pin the intent against future oxlint default changes.
 */
export default defineConfig({
  /**
   * Port of the `gossi/base/ignores` block.
   * Patterns are gitignore-style, relative to the directory of the consumer's config file.
   */
  ignorePatterns: ['dist/', 'dist-tests/', 'tmp/', 'declarations/', 'coverage/'],

  /**
   * Setting `plugins` overwrites the default set, so the full list must be named.
   * `node` is added by the `node` config.
   */
  plugins: ['eslint', 'unicorn', 'typescript', 'oxc', 'import'],

  categories: {
    correctness: 'error'
  },

  /**
   * Port of `linterOptions.reportUnusedDisableDirectives`.
   */
  options: {
    reportUnusedDisableDirectives: 'error'
  },

  rules: {
    ...core,
    ...base,
    ...imports
  }
});
