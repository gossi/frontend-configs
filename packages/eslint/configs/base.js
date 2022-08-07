'use strict';

const base = {
  // plugin order doesn't matter
  plugins: ['prettier', 'decorator-position'],
  rules: {
    // no unnecessary comma
    'comma-dangle': 'off',

    // --
    'no-console': [
      'error',
      {
        allow: ['debug', 'warn', 'error', 'info', 'group', 'groupEnd', 'groupCollapsed']
      }
    ],

    // people should know that no return is undefined in JS
    'getter-return': ['error', { allowImplicit: true }],

    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'break' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: ['const', 'let'], next: '*' },
      { blankLine: 'always', prev: '*', next: ['const', 'let'] },
      { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
      { blankLine: 'any', prev: ['*'], next: ['case'] }
    ]
  }
};

// Node doesn't yet support modules import/export
const scriptBase = {
  plugins: [...base.plugins, 'import'],
  rules: {
    ...base.rules,
    ...require('eslint-plugin-import/config/errors').rules,
    ...require('eslint-plugin-import/config/warnings').rules,
    'import/order': ['error'],
    'import/no-unassigned-import': ['error'],
    'import/exports-last': ['error'],
    'import/no-duplicates': ['error'],
    'import/newline-after-import': ['error']
  }
};

const moduleBase = {
  ...base
};

const moduleImports = {
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        // This notation is bonkers
        groups: [
          // Side effect imports.
          ['^\\u0000'],

          // framework imports
          ['^ember$', '^@glimmer', '^@ember', '^ember-cli-htmlbars', '^qunit', '^ember-qunit'],

          // Packages.
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ['^@?\\w'],

          // Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything not matched in another group.
          ['^'],

          // monorepo packages
          ['^@gossi'],

          // Relative imports.
          // Anything that starts with a dot.
          ['^\\.'],

          // Type imports
          ['^.+\\u0000$']
        ]
      }
    ],
    'simple-import-sort/exports': 'error'
  }
};

const baseRulesAppliedLast = {
  // prettier
  'prettier/prettier': ['error']
};

const jsBase = {
  parser: '@babel/eslint-parser',
  // parserOptions: {
  //   ecmaVersion: 2020,
  //   sourceType: 'module',
  //   ecmaFeatures: {
  //     legacyDecorators: true,
  //   },
  // },
  env: {
    browser: true
  }
};

const tsBase = {
  ...base,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true
  },
  rules: {
    ...base.rules,

    // no unnecessary comma
    '@typescript-eslint/comma-dangle': ['error'],

    // Prettier already takes care of indentation
    indent: 'off',
    '@typescript-eslint/indent': 'off',

    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow-as-parameter'
      }
    ],

    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-as-const': 'error',

    'dot-notation': 'warn',
    '@typescript-eslint/dot-notation': 'off',

    'init-declarations': 'off',
    '@typescript-eslint/init-declarations': 'warn',

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',

    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'error',

    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true }
    ],

    // type imports are removed in builds
    '@typescript-eslint/consistent-type-imports': 'error',
    // this isn't C#
    '@typescript-eslint/interface-name-prefix': 'off',
    // prefer inference
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // Eliminate worthless warnings
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

    // Use real types
    '@typescript-eslint/no-explicit-any': 'error',
    // Maximum strictness
    '@typescript-eslint/no-non-null-assertion': 'error',

    /**
     * This allows short-circuit idioms, like:
     *
     * ```js
     * this.super && this.super(...arguments);
     *
     * this.someAction ? this.someAction() : this.fallback();
     * ```
     *
     * It disabled the eslint version and instead enables the TS version, to
     * properly support optional chaining.
     */
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true }
    ],

    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'error',

    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',

    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': 'error',

    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error',

    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    /**
     * @note Requires parser services and is thus disabled.
     *
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
     */
    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': 'off',

    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',

    /**
     * Disallow throwing strings.
     *
     * @note Requires parser services and is thus disabled.
     *
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
     */
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': 'off',

    /**
     * Asynchronous functions that don’t use await might not need to be
     * asynchronous functions and could be the unintentional result of
     * refactoring.
     *
     * @note Requires parser services and is thus disabled.
     *
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
     */
    'require-await': 'off',
    '@typescript-eslint/require-await': 'off',

    /**
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md#enforce-the-codebase-follows-eslints-camelcase-conventions
     */
    camelcase: 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase']
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE']
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'forbid'
      },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'enumMember',
        format: ['PascalCase'],
        leadingUnderscore: 'forbid'
      },
      {
        selector: 'typeLike',
        format: ['PascalCase']
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false
        }
      }
    ],

    '@typescript-eslint/array-type': 'error',

    /**
     * Adds support for numeric separators to the base rule.
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loss-of-precision.md
     */
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'error'
  }
};

module.exports = {
  moduleImports,
  moduleBase,
  scriptBase,
  baseRulesAppliedLast,
  jsBase,
  tsBase
};
