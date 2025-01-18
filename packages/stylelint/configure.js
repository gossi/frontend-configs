export function configure({ browsers }) {
  return {
    extends: ['stylelint-config-standard', 'stylelint-config-clean-order'],

    plugins: ['stylelint-no-unsupported-browser-features'],

    rules: {
      /*
        Customize plugins
      */
      'plugin/no-unsupported-browser-features': [
        true,
        {
          browsers,
          ignore: [
            // grid-template-columns falsely identified as multicolumn
            'multicolumn'
          ]
        }
      ],

      /*
        Customize rules
      */
      'import-notation': 'string',

      'at-rule-empty-line-before': [
        'always',
        {
          except: ['first-nested'],
          ignore: ['after-comment']
        }
      ],

      'at-rule-no-unknown': [
        true,
        {
          ignoreAtRules: ['custom-selector', 'value', 'text-wrap']
        }
      ],

      'declaration-block-no-redundant-longhand-properties': [
        true,
        {
          ignoreShorthands: ['grid-gap', 'grid-template']
        }
      ],

      'font-family-no-missing-generic-family-keyword': [
        true,
        {
          ignoreFontFamilies: ['/font-family-/']
        }
      ],

      'function-calc-no-unspaced-operator': null,

      'no-empty-source': null,

      'property-no-unknown': [
        true,
        {
          ignoreProperties: [
            // Defined by ember-css-modules
            'composes'
          ]
        }
      ],

      'selector-pseudo-class-no-unknown': [
        true,
        {
          ignorePseudoClasses: [
            // Defined by ember-css-modules
            'global'
          ]
        }
      ]
    }
  };
}
