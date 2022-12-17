'use strict';

const { tsBase, jsBase, moduleBase, moduleImports, baseRulesAppliedLast } = require('./base');

const emberLintRules = {
  // this is a silly convention from back in the rails days
  // it has no place in JS where things are camelCase
  'ember/routes-segments-snake-case': 'off',
  // co-located test files are filtered out of production bundle
  'ember/no-test-support-import': 'off'
};

const appTS = {
  ...tsBase,
  files: ['./app/**/*.ts'],
  plugins: [tsBase.plugins, moduleImports.plugins, 'ember', '@typescript-eslint'].flat(),
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
    'plugin:decorator-position/ember',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  rules: {
    ...tsBase.rules,
    ...emberLintRules,
    ...moduleImports.rules,

    // not applicable due to how the runtime is
    '@typescript-eslint/no-use-before-define': 'off',
    // much concise
    '@typescript-eslint/prefer-optional-chain': 'error',

    '@typescript-eslint/naming-convention': [
      ...tsBase.rules['@typescript-eslint/naming-convention'],
      {
        selector: 'property',
        format: ['StrictPascalCase'],
        filter: {
          regex: 'Resolver|Router',
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
          regex: 'Element|Args|Blocks|Return|Positional|Named',
          match: true
        }
      }
    ],

    ...baseRulesAppliedLast
  }
};

const appJS = {
  ...jsBase,
  files: ['./app/**/*.js'],
  plugins: [moduleBase.plugins, moduleImports.plugins, 'ember', 'decorator-position'].flat(),
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
    'plugin:decorator-position/ember',
    'prettier'
  ],
  rules: {
    ...jsBase.rules,
    ...emberLintRules,
    ...moduleImports.rules,
    ...baseRulesAppliedLast
  }
};
const addonTS = {
  ...appTS,
  files: ['./addon/**/*.ts', './addon-test-support/**/*.ts']
};
const addonJS = {
  ...appJS,
  files: ['./addon/**/*.js', './addon-test-support/**/*.js']
};
const addonV2JS = {
  ...appJS,
  files: ['./src/**/*.js']
};
const addonV2TS = {
  ...appTS,
  files: ['./src/**/*.ts']
};

const storiesTS = {
  ...appTS,
  files: ['./**/stories.ts', './**/*.stories.ts'],
  plugins: [...appTS.plugins, 'storybook'].flat(),
  extends: [...appTS.extends, 'plugin:storybook/recommended', 'plugin:storybook/csf'],
  rules: {
    ...appTS.rules,

    '@typescript-eslint/naming-convention': [
      ...tsBase.rules['@typescript-eslint/naming-convention'].filter(
        // let's filter out variable as we are overwriting it below
        // and anyway both options would be present but the first one would take precedence
        (option) => option.selector !== 'variable'
      ),
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase']
      }
    ]
  }
};
const storiesJS = {
  ...appJS,
  files: ['./**/stories.js', './**/*.stories.js'],
  plugins: [...appJS.plugins, 'storybook'].flat(),
  extends: [...appJS.extends, 'plugin:storybook/recommended', 'plugin:storybook/csf'],
  rules: {
    ...appJS.rules
  }
};

const testsTS = {
  ...appTS,
  files: ['./tests/**/*.ts'],
  excludedFiles: ['tests/dummy/declarations/**'],
  plugins: [...appTS.plugins, 'qunit'],
  extends: [...appTS.extends, 'plugin:qunit/recommended'],
  env: {
    ...appTS.env,
    embertest: true
  },
  rules: {
    ...appTS.rules,

    // doesn't support deep nesting
    'qunit/no-identical-names': 'warn',
    // this rule is incomplete
    'ember/no-test-import-export': 'off',

    // handy to do this sort of thing in tests
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-floating-promises': 'off'
  }
};
const testsJS = {
  ...appJS,
  files: ['./tests/**/*.js'],
  plugins: [...appJS.plugins, 'qunit'],
  extends: [...appJS.extends, 'plugin:qunit/recommended'],
  env: {
    ...appJS.env,
    embertest: true
  },
  rules: {
    ...appJS.rules,

    // doesn't support deep nesting
    'qunit/no-identical-names': 'warn',
    // this rule is incomplete
    'ember/no-test-import-export': 'off'
  }
};
const typeDeclarations = {
  ...tsBase,
  files: ['./types/**', '*.d.ts'],
  rules: {
    ...tsBase.rules,
    // custom type declarations get wonky
    '@typescript-eslint/no-explicit-any': 'off',

    '@typescript-eslint/naming-convention': [
      ...tsBase.rules['@typescript-eslint/naming-convention'],
      // component signatures: https://rfcs.emberjs.com/id/0748-glimmer-component-signature
      {
        selector: 'property',
        format: ['StrictPascalCase'],
        filter: {
          regex: 'Args|Element|Blocks',
          match: true
        }
      },

      // for `test-app/app/config/environment.d.ts`
      {
        selector: 'property',
        format: ['UPPER_CASE'],
        filter: {
          regex: 'APP',
          match: true
        }
      }
    ]
  }
};

const { baseConfig, baseModulesConfig } = require('./node');

const packagePath = require.resolve(process.cwd() + '/package.json');
const packageJson = require(packagePath);
const isModules = packageJson.type === 'module' || packageJson['ember-addon']?.version === 2;
const nodeFiles = [
  './*.js',
  './blueprints/*/index.js',
  './config/**/*.js',
  './lib/**/*.js',
  './tests/dummy/config/**/*.js',
  './scripts/**/*.js'
];

const nodeConfigs = isModules
  ? [
      {
        ...baseConfig,
        files: nodeFiles.map((filePath) => filePath.replace('.js', '.cjs'))
      },
      {
        ...baseModulesConfig,
        files: [...nodeFiles, ...nodeFiles.map((filePath) => filePath.replace('.js', '.mjs'))]
      }
    ]
  : [
      {
        ...baseConfig,
        files: [...nodeFiles, ...nodeFiles.map((filePath) => filePath.replace('.js', '.cjs'))]
      },
      {
        ...baseModulesConfig,
        files: nodeFiles.map((filePath) => filePath.replace('.js', '.mjs'))
      }
    ];

const deprecationWorkflow = {
  ...jsBase,
  parserOptions: {
    ...jsBase.parserOptions,
    sourceType: 'script'
  },
  files: ['tests/dummy/config/deprecation-workflow.js', 'config/deprecation-workflow.js'],
  plugins: [moduleBase.plugins].flat(),
  extends: ['eslint:recommended', 'prettier'],
  rules: {
    ...jsBase.rules,
    ...baseRulesAppliedLast
  }
};

module.exports = {
  parts: {
    appTS,
    appJS,
    addonTS,
    addonJS,
    addonV2JS,
    addonV2TS,
    storiesTS,
    storiesJS,
    testsTS,
    testsJS,
    typeDeclarations,
    nodeConfigs,
    deprecationWorkflow
  },
  ember: [
    appTS,
    appJS,
    addonTS,
    addonJS,
    addonV2JS,
    addonV2TS,
    storiesTS,
    storiesJS,
    testsTS,
    testsJS,
    typeDeclarations,
    ...nodeConfigs,
    deprecationWorkflow
  ]
};
