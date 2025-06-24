import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default [
  eslintPluginUnicorn.configs.recommended,
  {
    name: 'gossi/rules/base',
    rules: {
      // const has misleading safety implications
      // look in to "liberal let"
      'prefer-const': 'off',

      // people should know that no return is undefined in JS
      'getter-return': ['error', { allowImplicit: true }],

      'unicorn/import-style': [
        'error',
        {
          styles: {
            'node:path': {
              named: true
            }
          }
        }
      ],

      'unicorn/prevent-abbreviations': 'off',

      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
          ignore: ['^-*']
        }
      ]
    }
  }
];
