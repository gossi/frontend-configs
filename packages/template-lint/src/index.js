import prettierPlugin from 'ember-template-lint-plugin-prettier';

export default {
  plugins: [prettierPlugin],
  extends: ['recommended', 'ember-template-lint-plugin-prettier:recommended'],
  rules: {
    'no-negated-condition': false,
    'no-passed-in-event-handlers': {
      ignore: {
        Form: ['submit'],
        Pagination: ['change']
      }
    },
    'no-forbidden-elements': ['meta', 'html', 'script']
  },
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
