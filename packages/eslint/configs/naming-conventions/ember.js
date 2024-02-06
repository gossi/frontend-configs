/**
 * @typedef { import('./types').Selector } Selector
 */

/**
 * @param {Selector[]} rules
 * @returns {Selector[]}
 */
module.exports = (rules) => [
  ...rules.filter(
    // let's filter out property as we are overwriting it below
    // and anyway both options would be present but the first one would take precedence
    (option) => option.selector !== 'property'
  ),
  {
    selector: 'property',
    format: ['camelCase', 'PascalCase']
  },

  {
    selector: 'property',
    format: ['StrictPascalCase'],
    filter: {
      regex: '^(Resolver|Router)$',
      match: true
    }
  },

  //
  // `APP` in config/environment
  {
    selector: 'property',
    format: ['UPPER_CASE'],
    filter: {
      regex: 'APP',
      match: true
    }
  },

  // Signatures:
  // https://rfcs.emberjs.com/id/0748-glimmer-component-signature
  // https://typed-ember.gitbook.io/glint/using-glint/ember/helper-and-modifier-signatures
  {
    selector: 'property',
    format: ['StrictPascalCase'],
    filter: {
      regex: '^(Element|Args|Blocks|Return|Positional|Named)$',
      match: true
    }
  }
];
