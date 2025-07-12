import storybook from 'eslint-plugin-storybook';

import ember from '@gossi/config-eslint/ember';

export default [
  ...ember(import.meta.dirname),
  ...storybook.configs['flat/recommended'],
  ...storybook.configs['flat/csf']
];
