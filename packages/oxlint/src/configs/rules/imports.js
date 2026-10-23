/**
 * Port of the recommended `eslint-plugin-import-x` rules, configured to the values of
 * `@gossi/config-eslint`.
 */
export default {
  'import/default': 'error',
  'import/export': 'error',
  'import/named': 'error',
  'import/namespace': 'error',
  'import/newline-after-import': 'error',
  // anti-foot-gun
  'import/no-cycle': 'error',
  // style
  'import/no-duplicates': 'error',
  'import/no-named-as-default': 'warn',
  'import/no-named-as-default-member': 'warn'
};
