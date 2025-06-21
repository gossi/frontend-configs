import emberTemplateTag from 'prettier-plugin-ember-template-tag';

export default {
  singleQuote: true,
  trailingComma: 'none',
  printWidth: 100,
  plugins: [emberTemplateTag],
  overrides: [
    {
      files: ['*.md', '*.hbs'],
      options: {
        singleQuote: false
      }
    },
    {
      files: ['*.gjs', '*.gts'],
      options: {
        parser: 'ember-template-tag',
        singleQuote: true,
        templateSingleQuote: false
      }
    }
  ]
};
