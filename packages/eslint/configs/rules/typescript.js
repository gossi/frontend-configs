'use strict';

const baseNamingConventions = require('../naming-conventions/base');

/**
 * @type {import('../types').PartialConfig}
 */
const rule = {
  // parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/strict'],
  rules: {
    // Having an empty interface is plausable when iterating on types,
    // extending from an existing type and "planning" to update.
    '@typescript-eslint/no-empty-interface': 'off',

    // type imports are removed in builds
    '@typescript-eslint/consistent-type-imports': 'error',

    // prefer inference, but it is recommended to declare
    // return types around public API
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // Allows placeholder args to still be defined for
    // documentation or "for later" purposes
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

    //   '@typescript-eslint/consistent-type-assertions': [
    //     'error',
    //     {
    //       assertionStyle: 'as',
    //       objectLiteralTypeAssertions: 'allow-as-parameter'
    //     }
    //   ],

    // Enforce the use of for-of loop over the standard for loop where possible
    '@typescript-eslint/prefer-for-of': 'error',

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

    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error',

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': [
      'error',
      {
        ignoreTypeValueShadow: true,
        ignoreFunctionTypeParameterNameValueShadow: true
      }
    ],

    '@typescript-eslint/array-type': 'error',

    /**
     * @see https://typescript-eslint.io/rules/naming-convention/#enforce-the-codebase-follows-eslints-camelcase-conventions
     */
    camelcase: 'off',
    '@typescript-eslint/naming-convention': ['error', ...baseNamingConventions]
  }
};

module.exports = { rule };
