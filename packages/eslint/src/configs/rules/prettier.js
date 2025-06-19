import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export function resolvePrettier() {
  return [
    eslintPluginPrettierRecommended,
    {
      name: 'gossi/rules/prettier',
      rules: {
        'prettier/prettier': ['error', { usePrettierrc: true }]
      }
    }
  ];
}
