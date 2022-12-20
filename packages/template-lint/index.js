'use strict';

module.exports = {
  plugins: ['ember-template-lint-plugin-prettier'],
  extends: ['recommended', 'ember-template-lint-plugin-prettier:recommended'],
  overrides: [
    {
      files: ['tests/**/*-test.{js,ts}', '**/*.stories.{js,ts}', '**/stories.{js,ts}'],
      rules: {
        prettier: 'off'
      }
    }
  ]
};
