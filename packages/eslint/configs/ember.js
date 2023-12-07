'use strict';

const { merge, hasDep, pipe, configFor, forFiles } = require('./-utils');
const { applyNamingConventions } = require('./naming-conventions/-utils');
const componentsConventions = require('./naming-conventions/components');
const templateRegistryConventions = require('./naming-conventions/template-registry');
const emberConventions = require('./naming-conventions/ember');

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
        '{src,app,addon,addon-test-support,tests}/**/*.js',
        'tests/dummy/config/deprecation-workflow.js'
      ],
      config.modules.browser.js
    ),
    forFiles(
      [
        '{src,app,addon,addon-test-support,tests}/**/*.gjs',
        'tests/dummy/config/deprecation-workflow.js'
      ],
      config.modules.browser.gjs
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
      applyNamingConventions(config.modules.browser.gts, componentsConventions)
    ),
    forFiles('**/*.d.ts', config.modules.browser.declarations),

    forFiles(
      '{types,src}/template-registry.{d.ts,ts}',
      applyNamingConventions(config.modules.browser.ts, templateRegistryConventions)
    ),

    forFiles(['./**/stories.{js,gjs}', './**/*.stories.{js,gjs}'], config.modules.stories.js),
    forFiles(['./**/stories.{ts,gts}', './**/*.stories.{ts,gts}'], config.modules.stories.ts),

    // ----------------------
    // Tests

    forFiles('tests/**/*-test.js', config.modules.tests.js),
    forFiles('tests/**/*-test.gjs', config.modules.tests.gjs),
    forFiles('tests/**/*-test.ts', config.modules.tests.ts),
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

  const gtsParser = {
    parser: 'eslint-plugin-ember/gjs-gts-parser',
    parserOptions: {
      project: true,
      extraFileExtensions: ['.gts']
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
        get gjs() {
          let browserJS = configBuilder.modules.browser.js;

          return pipe(
            browserJS,
            (config) => merge(config, gtsParser),
            (config) => merge(config, require('./rules/ember-gjs'))
          );
        },
        get gts() {
          if (!hasTypeScript) return;

          let browserTS = configBuilder.modules.browser.ts;

          return pipe(
            browserTS,
            (config) => merge(config, gtsParser),
            (config) => merge(config, require('./rules/ember-gts'))
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

          return pipe(browserJS, (config) => merge(config, require('./rules/qunit')));
        },
        get ts() {
          if (!hasTypeScript) return;

          let browserTS = configBuilder.modules.browser.ts;

          return pipe(browserTS, (config) => merge(config, require('./rules/qunit')));
        },
        get gjs() {
          let browserJS = configBuilder.modules.tests.js;

          return pipe(browserJS, (config) => merge(config, gtsParser));
        },
        get gts() {
          if (!hasTypeScript) return;

          let browserTS = configBuilder.modules.tests.ts;

          return pipe(browserTS, (config) => merge(config, gtsParser));
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
