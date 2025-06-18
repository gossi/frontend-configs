import simpleImportSort from 'eslint-plugin-simple-import-sort';

const config = {
  // This notation is bonkers
  groups: [
    // Side effect imports.
    ['^\\u0000'],

    // framework imports
    [
      '^ember$',
      '^@glimmer',
      '^@ember',
      '^ember-cli-htmlbars',
      '^qunit',
      '^ember-qunit',
      '^@embroider',
      '^node:'
    ],

    // Packages.
    // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
    ['^@?\\w'],

    // Absolute imports and other imports such as Vue-style `@/foo`.
    // Anything not matched in another group.
    ['^'],

    // monorepo packages
    ['^@gossi', '@hokulea', '@theemo'],

    // paths with test-support in the name
    ['/test-support'],

    // Relative imports.
    // Anything that starts with a dot.
    ['^\\.'],

    // Type imports
    ['^.+\\u0000$']
  ]
};

export default {
  plugins: {
    'simple-import-sort': simpleImportSort
  },
  rules: {
    'simple-import-sort/imports': ['error', config],
    'simple-import-sort/exports': 'error'
  }
};
