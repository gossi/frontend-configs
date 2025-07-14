import ts from 'typescript-eslint';

// eslint-disable-next-line import-x/no-named-as-default-member
export default ts.config(ts.configs.strictTypeChecked, ts.configs.stylisticTypeChecked, {
  name: 'gossi/rules/typescript/typed',
  rules: {
    '@typescript-eslint/consistent-type-definitions': 'off',

    '@typescript-eslint/non-nullable-type-assertion-style': 'off',

    '@typescript-eslint/no-empty-object-type': [
      'error',
      {
        allowInterfaces: 'always'
      }
    ],

    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allow: [{ name: ['Error', 'URL', 'URLSearchParams'], from: 'lib' }],
        allowAny: true,
        allowBoolean: true,
        allowNullish: true,
        allowNumber: true,
        allowRegExp: true
      }
    ],

    // much concise
    '@typescript-eslint/prefer-optional-chain': 'error',

    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      {
        ignoreArrowShorthand: true
      }
    ]
  }
});
