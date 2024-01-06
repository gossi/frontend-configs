'use strict';

const baseNamingConventions = require('../naming-conventions/base');

/**
 * @type {import('../types').PartialConfig}
 */
const rule = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended'],
  rules: {
    // this isn't C#
    '@typescript-eslint/interface-name-prefix': 'off',

    // Having an empty interface is plausable when iterating on types,
    // extending from an existing type and "planning" to update.
    '@typescript-eslint/no-empty-interface': 'off',

    // type imports are removed in builds
    '@typescript-eslint/consistent-type-imports': 'error',

    // prefer inference, but it is recommended to declare
    // return types around public API
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // much concise
    '@typescript-eslint/prefer-optional-chain': 'error',

    // Maximum strictness
    '@typescript-eslint/no-non-null-assertion': 'error',

    // Allows placeholder args to still be defined for
    // documentation or "for later" purposes
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

    // no unnecessary comma
    '@typescript-eslint/comma-dangle': ['error'],

    // Prettier already takes care of indentation
    // indent: 'off',
    '@typescript-eslint/indent': 'off',

    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow-as-parameter'
      }
    ],

    // 'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    '@typescript-eslint/prefer-for-of': 'error',

    // 'dot-notation': 'warn',
    '@typescript-eslint/dot-notation': 'off',

    // 'init-declarations': 'off',
    '@typescript-eslint/init-declarations': 'warn',

    // 'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',

    // 'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'error',

    // 'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true }
    ],

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
    // 'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true }
    ],

    // 'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'error',

    // 'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',

    // 'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error',

    // 'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',

    // 'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    /**
     * @note Requires parser services and is thus disabled.
     *
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
     */
    // 'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': 'off',

    // 'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',

    /**
     * Disallow throwing strings.
     *
     * @note Requires parser services and is thus disabled.
     *
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
     */
    // 'no-throw-literal': 'off',
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
    // 'require-await': 'off',
    '@typescript-eslint/require-await': 'off',

    '@typescript-eslint/array-type': 'error',

    /**
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md#enforce-the-codebase-follows-eslints-camelcase-conventions
     */
    // camelcase: 'off',
    '@typescript-eslint/naming-convention': ['error', ...baseNamingConventions]
  }
};

module.exports = { rule };
