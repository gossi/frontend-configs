import json from 'eslint-plugin-json';

export default function config() {
  return [
    {
      files: ['**/tsconfig.json', '**/tsconfig*.json', '**/*.json5', '**/*.jsonc'],
      ...json.configs['recommended-with-comments']
    },
    {
      files: ['**/*.json'],
      ...json.configs['recommended']
    }
  ];
}
