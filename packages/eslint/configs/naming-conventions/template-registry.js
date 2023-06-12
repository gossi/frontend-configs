/**
 * @typedef { import('./types').Selector } Selector
 */

/**
 * @param {Selector[]} rules
 * @returns {Selector[]}
 */
module.exports = (rules) => [
  ...rules,
  {
    selector: 'property',
    format: ['camelCase', 'PascalCase'],
    custom: {
      match: true,
      regex: '[a-z\\-]'
    }
  }
];
