'use strict';

const { merge, hasDep, pipe, configFor, forFiles } = require('./-utils');
const { applyNamingConventions } = require('./naming-conventions/-utils');
const componentsConventions = require('./naming-conventions/components');
const templateRegistryConventions = require('./naming-conventions/template-registry');
const emberConventions = require('./naming-conventions/ember');
const { typescriptParserOptions } = require('./parsers/typescript');

/**
 * @returns {import('eslint').Linter.Config}
 */
module.exports = () => {
  let config = configBuilder();

  return configFor([
    // ----------------------
    // Project Files
    forFiles('**/*.gts', applyNamingConventions(config.modules.browser.gts, componentsConventions)),
    forFiles('**/*.gjs', applyNamingConventions(config.modules.browser.gjs, componentsConventions)),

    forFiles(
      [
        '{src,app,addon,addon-test-support,tests}/**/*.js',
        'tests/dummy/config/deprecation-workflow.js'
      ],
      config.modules.browser.js
    ),
    forFiles(
      'config/deprecation-workflow.js',
      merge(config.modules.browser.js, {
        globals: { self: 'readonly' }
      })
    ),
    forFiles(
      '{src,app,addon,addon-test-support,tests,types}/**/*.ts',
      applyNamingConventions(
        config.modules.browser.ts,
        componentsConventions,
        templateRegistryConventions
      )
    ),

    forFiles(
      '**/*.d.ts',
      applyNamingConventions(
        config.modules.browser.declarations,
        componentsConventions,
        templateRegistryConventions
      )
    ),

    forFiles(['./**/stories.js', './**/*.stories.js,'], config.modules.stories.js),
    forFiles(['./**/stories.ts', './**/*.stories.ts,'], config.modules.stories.ts),

    // ----------------------
    // Tests

    forFiles('tests/**/*-test.js', config.modules.tests.js),
    forFiles('tests/**/*-test.ts', config.modules.tests.ts),
    forFiles('tests/**/*-test.gjs', config.modules.tests.gjs),
    forFiles('tests/**/*-test.gts', config.modules.tests.gts),

    // ----------------------
    // Config files, usually
    forFiles(
      [
        './*.{js,cjs}',
        './config/**/*.js',
        './lib/*/index.js',
        './server/**/*.js',
        './blueprints/*/index.js'
      ],
      config.commonjs.node.js
    ),

    // next gen config files
    forFiles(['./*.mjs'], config.modules.node.js)
  ]);
};

/**
 *
 */
function configBuilder() {
  let hasTypeScript = hasDep('typescript');

  let personalPreferences = pipe(
    {},
    (config) => merge(config, require('./base').base),
    (config) => merge(config, require('./rules/decorator-position')),
    (config) => merge(config, require('./rules/prettier').resolveRule())
  );

  const babelParser = {
    parser: '@babel/eslint-parser',
    parserOptions: {
      requireConfigFile: false,
      babelOptions: {
        plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]]
      }
    }
  };

  const configBuilder = {
    modules: {
      browser: {
        get js() {
          return pipe(
            {
              ...babelParser,
              env: {
                browser: true
              }
            },
            (config) => merge(config, personalPreferences),
            (config) => merge(config, require('./rules/ember'))
          );
        },
        get ts() {
          if (!hasTypeScript) return;

          return pipe(
            {
              env: {
                browser: true
              },
              parserOptions: typescriptParserOptions
            },
            (config) => merge(config, personalPreferences),
            (config) => merge(config, require('./rules/ember')),
            (config) => merge(config, require('./rules/typescript')),
            (config) => applyNamingConventions(config, emberConventions)
          );
        },
        get gjs() {
          return pipe(
            {
              parser: 'ember-eslint-parser',
              env: {
                browser: true
              }
            },
            (config) => merge(config, personalPreferences),
            (config) => merge(config, require('./rules/ember')),
            (config) => merge(config, require('./rules/ember-gjs'))
          );
        },
        get gts() {
          if (!hasTypeScript) return;

          return pipe(
            {
              parser: 'ember-eslint-parser',
              env: {
                browser: true
              }
            },
            (config) => merge(config, personalPreferences),
            (config) => merge(config, require('./rules/ember')),
            (config) => merge(config, require('./rules/ember-gts')),
            (config) => applyNamingConventions(config, emberConventions)
          );
        },
        get declarations() {
          if (!hasTypeScript) return;

          return pipe(
            {
              env: {
                browser: true
              },
              parserOptions: typescriptParserOptions
            },
            (config) => merge(config, personalPreferences),
            (config) => merge(config, require('./rules/typescript-declarations')),
            (config) => applyNamingConventions(config, emberConventions)
          );
        }
      },
      node: {
        get js() {
          return pipe(
            {
              parserOptions: {
                sourceType: 'module',
                ecmaVersion: 'latest'
              },
              env: {
                browser: false,
                node: true,
                es6: true
              },
              plugins: ['n'],
              extends: []
            },
            (config) => merge(config, personalPreferences),
            (config) => merge(config, require('./rules/imports'))
          );
        },
        get ts() {
          if (!hasTypeScript) return;

          return pipe(
            {
              parserOptions: typescriptParserOptions,
              env: {
                browser: false,
                node: true,
                es6: true
              },
              plugins: ['n']
            },
            (config) => merge(config, personalPreferences),
            (config) => merge(config, require('./rules/imports')),
            (config) => merge(config, require('./rules/typescript')),
            (config) => merge(config, require('./rules/typescript-imports'))
          );
        }
      },
      stories: {
        get js() {
          return pipe(
            {
              ...babelParser,
              env: {
                browser: true
              }
            },
            (config) => merge(config, personalPreferences),
            (config) => merge(config, require('./rules/ember')),
            (config) => merge(config, require('./rules/storybook'))
          );
        },
        get ts() {
          if (!hasTypeScript) return;

          return pipe(
            {
              env: {
                browser: true
              },
              parserOptions: typescriptParserOptions
            },
            (config) => merge(config, personalPreferences),
            (config) => merge(config, require('./rules/ember')),
            (config) => merge(config, require('./rules/typescript')),
            (config) => merge(config, require('./rules/storybook')),
            (config) => applyNamingConventions(config, emberConventions, componentsConventions)
          );
        }
      },
      tests: {
        get js() {
          let browserJS = configBuilder.modules.browser.js;

          return pipe(browserJS, (config) => merge(config, require('./rules/qunit')));
        },
        get ts() {
          if (!hasTypeScript) return;

          let browserTS = configBuilder.modules.browser.ts;

          return pipe(browserTS, (config) => merge(config, require('./rules/qunit')));
        },
        get gjs() {
          let browserJS = configBuilder.modules.browser.gjs;

          return pipe(browserJS, (config) => merge(config, require('./rules/qunit')));
        },
        get gts() {
          if (!hasTypeScript) return;

          let browserTS = configBuilder.modules.browser.gts;

          return pipe(browserTS, (config) => merge(config, require('./rules/qunit')));
        }
      }
    },
    commonjs: {
      node: {
        get js() {
          const EXPECTED_NODE_VERSION = '16.0.0'; // or greater

          return pipe(
            {
              parserOptions: {
                sourceType: 'script',
                ecmaVersion: 'latest'
              },
              env: {
                browser: false,
                node: true,
                es6: true
              },
              plugins: ['n'],
              extends: ['plugin:n/recommended'],
              rules: {
                'n/no-unsupported-features/es-syntax': [
                  'error',
                  {
                    version: EXPECTED_NODE_VERSION
                  }
                ],
                'n/no-unsupported-features': [
                  'error',
                  {
                    version: EXPECTED_NODE_VERSION,
                    ignores: []
                  }
                ]
              }
            },
            (config) => merge(config, personalPreferences)
          );
        }
      }
    }
  };

  return configBuilder;
}
