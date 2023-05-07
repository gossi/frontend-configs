'use strict';

const { merge, hasDep, pipe, configFor, forFiles } = require('./-utils');
const { applyNamingConventions } = require('./naming-conventions/-utils');
const componentsConventions = require('./naming-conventions/components');
const templateRegistryConventions = require('./naming-conventions/template-registry');
const emberConventions = require('./naming-conventions/ember');

/**
 * Until this one is solved:
 *
 * https://github.com/gitKrystan/prettier-plugin-ember-template-tag/issues/20
 *
 * @param {Partial<import('eslint').Linter.Config>} config
 * @returns {Partial<import('eslint').Linter.Config>}
 */
function deactivatePrettier(config) {
  if (config.rules && config.rules['prettier/prettier'] !== undefined) {
    delete config.rules['prettier/prettier'];
  }

  return config;
}

/**
 * @returns {import('eslint').Linter.Config}
 */
module.exports = () => {
  let config = configBuilder();

  return configFor([
    // ----------------------
    // Project Files
    forFiles(
      [
        '{src,app,addon,addon-test-support,tests}/**/*.{gjs,js}',
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
      '{src,app,addon,addon-test-support,tests,types}/**/*.gts',
      pipe(
        config.modules.browser.ts,
        (config) => applyNamingConventions(config, componentsConventions),
        deactivatePrettier
      )
    ),
    forFiles('**/*.d.ts', config.modules.browser.declarations),

    forFiles(
      '{types,src}/template-registry.{d.ts,ts}',
      applyNamingConventions(config.modules.browser.ts, templateRegistryConventions)
    ),

    // ideally:
    // forFiles(['./**/stories.{js,gjs}', './**/*.stories.{js,gjs}'], config.modules.stories.js),
    // forFiles(['./**/stories.{ts,gts}', './**/*.stories.{ts,gts}'], config.modules.stories.ts),

    // but ...
    forFiles(['**/stories.js', '**/*.stories.js'], config.modules.stories.js),
    forFiles(['**/stories.ts', '**/*.stories.ts'], config.modules.stories.ts),

    forFiles(
      ['**/stories.gjs', '**/*.stories.gjs'],
      pipe(config.modules.stories.js, deactivatePrettier)
    ),
    forFiles(
      ['**/stories.gts', '**/*.stories.gts'],
      pipe(config.modules.stories.ts, deactivatePrettier)
    ),

    // ----------------------
    // Tests

    // ideally:
    // forFiles('tests/**/*-test.{gjs,js}', config.modules.tests.js),
    // forFiles('tests/**/*-test.{gts,ts}', config.modules.tests.ts),

    // but ...
    forFiles('tests/**/*-test.js', config.modules.tests.js),
    forFiles('tests/**/*-test.ts', config.modules.tests.ts),

    forFiles('tests/**/*-test.gjs', pipe(config.modules.tests.js, deactivatePrettier)),
    forFiles('tests/**/*-test.gts', pipe(config.modules.tests.ts, deactivatePrettier)),

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
              }
            },
            (config) => merge(config, personalPreferences),
            (config) => merge(config, require('./rules/ember')),
            (config) => merge(config, require('./rules/typescript')),
            (config) => applyNamingConventions(config, emberConventions)
          );
        },
        get declarations() {
          if (!hasTypeScript) return;

          return pipe(
            {
              env: {
                browser: true
              }
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
              extends: ['plugin:import/typescript']
            },
            (config) => merge(config, personalPreferences),
            (config) => merge(config, require('./rules/imports')),
            (config) => merge(config, require('./rules/typescript'))
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
              }
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

          return {
            ...browserJS,
            extends: [...browserJS.extends, 'plugin:qunit/recommended']
          };
        },
        get ts() {
          if (!hasTypeScript) return;

          let browserTS = configBuilder.modules.browser.ts;

          return {
            ...browserTS,
            extends: [...browserTS.extends, 'plugin:qunit/recommended']
          };
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
