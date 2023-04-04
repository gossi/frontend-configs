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
    forFiles('{src,app,addon,addon-test-support,tests,types}/**/*.ts', config.modules.browser.ts),
    forFiles(
      '{src,app,addon,addon-test-support,tests,types}/**/*.gts',
      applyNamingConventions(config.modules.browser.ts, componentsConventions)
    ),
    forFiles('**/*.d.ts', config.modules.browser.declarations),

    forFiles(
      'src/template-registry.{d.ts,ts}',
      applyNamingConventions(config.modules.browser.ts, templateRegistryConventions)
    ),

    forFiles(['./**/stories.{js,gjs}', './**/*.stories.{js,gjs}'], config.modules.stories.js),
    forFiles(['./**/stories.{ts,gts}', './**/*.stories.{ts,gts}'], config.modules.stories.ts),

    // ----------------------
    // Tests
    forFiles('tests/**/*-test.{gjs,js}', config.modules.tests.js),
    forFiles('tests/**/*-test.{gts,ts}', config.modules.tests.ts),

    // ----------------------
    // Config files, usually
    forFiles(
      [
        './*.{cjs,js}',
        './config/**/*.js',
        './lib/*/index.js',
        './server/**/*.js',
        './blueprints/*/index.js'
      ],
      config.commonjs.node.js
    )
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

          const config = pipe(
            {
              env: {
                browser: true
              }
            },
            (config) => merge(config, personalPreferences),
            (config) => merge(config, require('./rules/ember')),
            (config) => merge(config, require('./rules/typescript'))
          );

          return applyNamingConventions(config, emberConventions);
        },
        get declarations() {
          if (!hasTypeScript) return;

          const config = pipe(
            {
              env: {
                browser: true
              }
            },
            (config) => merge(config, personalPreferences),
            (config) => merge(config, require('./rules/typescript-declarations'))
          );

          return applyNamingConventions(config, emberConventions);
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

          const config = pipe(
            {
              env: {
                browser: true
              }
            },
            (config) => merge(config, personalPreferences),
            (config) => merge(config, require('./rules/ember')),
            (config) => merge(config, require('./rules/typescript')),
            (config) => merge(config, require('./rules/storybook'))
          );

          return applyNamingConventions(config, emberConventions, componentsConventions);
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
