import { defineConfig } from 'oxfmt';

/**
 * Formatting configuration for oxfmt.
 *
 * This is the port of `@gossi/config-prettier` plus the `@stylistic/eslint-plugin`
 * rules that a formatter subsumes (quotes, trailing commas, line width, …).
 */
export default defineConfig({
  singleQuote: true,
  trailingComma: 'none',
  printWidth: 100,

  /**
   * Port of `eslint-plugin-simple-import-sort/imports`.
   *
   * simple-import-sort works on regexes, oxfmt on selectors/globs, so this is a
   * best-effort translation of the group ordering, not an exact re-implementation.
   */
  sortImports: {
    // simple-import-sort re-orders side effect imports too, so we match it here.
    // Be aware this can technically change program behavior.
    sortSideEffects: true,
    // simple-import-sort does not sort imports across a comment line.
    partitionByComment: true,
    customGroups: [
      {
        groupName: 'framework',
        // things that start with a letter (or digit or underscore), or `@` followed by a letter.
        elementNamePattern: [
          'ember',
          '@ember/*',
          '@glimmer/*',
          '@embroider/*',
          'ember-cli-htmlbars',
          'qunit',
          'ember-qunit',
          'node:*'
        ]
      },
      {
        groupName: 'monorepo',
        elementNamePattern: ['@gossi/*', '@hokulea/*', '@theemo/*']
      },
      {
        groupName: 'test-support',
        elementNamePattern: ['**/test-support', '**/test-support/**']
      }
    ],
    groups: [
      // Side effect imports.
      'side_effect',
      // framework imports (incl. node:)
      'framework',
      // Packages.
      'external',
      // Absolute imports and other imports such as `@/foo`.
      // Anything not matched in another group.
      'unknown',
      // monorepo packages
      'monorepo',
      // paths with test-support in the name
      'test-support',
      // Relative imports.
      ['parent', 'sibling', 'index'],
      // Type imports
      'type'
    ]
  },

  overrides: [
    {
      // HTML-ish syntax wants double-quoted attributes. Markdown is deliberately
      // NOT here, so embedded ` ```js ` code fences keep the root singleQuote.
      files: ['*.hbs'],
      options: {
        singleQuote: false
      }
    }
  ]
});
