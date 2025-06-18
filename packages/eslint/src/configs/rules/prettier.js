import { cosmiconfigSync } from 'cosmiconfig';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export function resolvePrettier() {
  const prettier = cosmiconfigSync('prettier');
  const prettierResult = prettier.search();

  return [
    eslintPluginPrettierRecommended,
    {
      name: 'gossi/rules/prettier',
      rules: {
        'prettier/prettier': prettierResult?.config
          ? ['error', prettierResult.config]
          : ['error', { singleQuote: true, printWidth: 100, trailingComma: 'es5' }]
      }
    }
  ];
}
