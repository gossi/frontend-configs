import stylistic from '@stylistic/eslint-plugin';

const config = [
  { blankLine: 'always', prev: '*', next: 'return' },
  { blankLine: 'always', prev: '*', next: 'break' },
  { blankLine: 'always', prev: '*', next: 'block-like' },
  { blankLine: 'always', prev: 'block-like', next: '*' },
  { blankLine: 'always', prev: ['const', 'let'], next: '*' },
  { blankLine: 'always', prev: '*', next: ['const', 'let'] },
  { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
  { blankLine: 'any', prev: ['*'], next: ['case'] }
];

export default [
  stylistic.configs.recommended,
  {
    name: 'gossi/rules/stylistic',
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/padding-line-between-statements': ['error', ...config]
    }
  }
];
