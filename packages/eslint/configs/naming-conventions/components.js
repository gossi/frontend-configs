/**
 * @typedef { import('./types').Selector } Selector
 */

/**
 * @param {Selector[]} rules
 * @returns {Selector[]}
 */
module.exports = (rules) => [
  ...rules.filter(
    // let's filter out variable as we are overwriting it below
    // and anyway both options would be present but the first one would take precedence
    (option) => option.selector !== 'variable'
  ),
  {
    selector: 'variable',
    format: ['camelCase', 'UPPER_CASE', 'PascalCase']
  }
];
