'use strict';

const plugin = 'eslint-plugin-import-x';

/**
 *
 * @type {import('../types').PartialConfig}
 */
const rule = {
  plugins: [plugin],
  extends: ['plugin:eslint-plugin-import-x/recommended'],
  rules: {
    // ----------------------------
    // Broken Rules
    // ----------------------------

    // Does not respect package.json#exports
    'import-x/no-unresolved': 'off',

    // Anti-foot-gun
    'import-x/no-cycle': ['error'],

    // Not useful, only stylistic
    'import-x/exports-last': 'off',

    // Anti-noise
    'import-x/no-unassigned-import': ['error'],

    // Style
    'import-x/no-duplicates': ['error'],
    'import-x/newline-after-import': ['error']
  }
};

module.exports = { rule, plugin };
