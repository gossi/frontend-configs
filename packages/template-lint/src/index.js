import prettierPlugin from 'ember-template-lint-plugin-prettier';

export default {
  plugins: [prettierPlugin],
  extends: ['recommended', 'ember-template-lint-plugin-prettier:recommended'],
  overrides: [
    {
      files: ['tests/**/*-test.{js,ts}', '**/*.stories.{js,ts}', '**/stories.{js,ts}'],
      rules: {
        prettier: 'off'
      }
    },
    {
      files: ['**/*.{gjs,gts}'],
      rules: {
        prettier: 'off'
      }
    }
  ]
};
