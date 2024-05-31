/**
 * @typedef { import('./types').Selector } Selector
 */

/**
 * @type {Selector[]}
 */
module.exports = [
  {
    selector: 'default',
    format: ['camelCase']
  },
  {
    selector: 'variable',
    format: ['camelCase', 'UPPER_CASE']
  },
  {
    selector: 'parameter',
    format: ['camelCase'],
    leadingUnderscore: 'forbid'
  },
  {
    selector: 'memberLike',
    modifiers: ['private'],
    format: ['camelCase'],
    leadingUnderscore: 'allow'
  },
  {
    selector: 'enumMember',
    format: ['PascalCase'],
    leadingUnderscore: 'forbid'
  },
  {
    selector: 'typeLike',
    format: ['PascalCase']
  },
  {
    selector: 'import',
    format: ['camelCase', 'PascalCase']
  },
  {
    selector: 'typeAlias',
    format: ['PascalCase']
  },
  {
    selector: 'interface',
    format: ['PascalCase'],
    custom: {
      regex: '^I[A-Z]',
      match: false
    }
  },
  /**
   * allow underscore for unused parameters
   */
  {
    format: null,
    selector: 'parameter',
    modifiers: ['unused'],
    leadingUnderscore: 'allow'
  },
  /**
   * Java-like constants
   */
  {
    selector: 'classProperty',
    format: ['UPPER_CASE'],
    modifiers: ['static']
  }
];
