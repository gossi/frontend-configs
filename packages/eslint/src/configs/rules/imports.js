import { importX } from 'eslint-plugin-import-x';

export default [
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  {
    rules: {
      // ----------------------------
      // Broken Rules
      // ----------------------------

      // Does not respect package.json#exports
      'import-x/no-unresolved': 'off',

      // Anti-foot-gun
      'import-x/no-cycle': ['error'],

      // Style
      'import-x/no-duplicates': ['error'],
      'import-x/newline-after-import': ['error']
    }
  }
];
