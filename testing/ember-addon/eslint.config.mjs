import { configs as storybook } from 'eslint-plugin-storybook';

import ember from '@gossi/config-eslint/ember';

export default [
  ...ember(import.meta.dirname),
  ...storybook['flat/recommended'],
  ...storybook['flat/csf']
];
