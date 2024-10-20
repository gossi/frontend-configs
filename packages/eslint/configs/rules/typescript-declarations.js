'use strict';

const rule = {
  rules: {
    // '@typescript-eslint/no-empty-interface': 'off'
    '@typescript-eslint/no-empty-object-type': [
      'error',
      {
        allowInterfaces: 'always'
      }
    ]
  }
};

module.exports = { rule };
