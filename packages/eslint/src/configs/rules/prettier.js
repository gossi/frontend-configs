import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { lilconfigSync } from 'lilconfig';

export function resolvePrettier(root) {
  const prettierConfigFinder = lilconfigSync('prettier');
  const prettierResult = prettierConfigFinder.search(root);

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
