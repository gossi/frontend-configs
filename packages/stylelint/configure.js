module.exports = function configure({ browsers }) {
  return {
    extends: ['stylelint-config-standard'],

    plugins: ['stylelint-no-unsupported-browser-features', 'stylelint-order'],

    rules: {
      /*
        Customize plugins
      */
      'order/properties-order': [
        [
          // Defined by ember-css-modules
          'composes'
        ],
        {
          unspecified: 'bottomAlphabetical'
        }
      ],

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
          ignoreAtRules: ['custom-selector', 'value']
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
};
