'use strict';

module.exports = {
  singleQuote: true,
  trailingComma: 'none',
  printWidth: 100,
  overrides: [
    {
      files: ['*.md', '*.hbs'],
      options: {
        singleQuote: false
      }
    }
  ]
};
