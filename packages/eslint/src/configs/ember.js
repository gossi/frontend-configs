import babelParser from '@babel/eslint-parser';
import ember from 'eslint-plugin-ember/recommended';
import n from 'eslint-plugin-n';
import qunit from 'eslint-plugin-qunit';
import globals from 'globals';
import ts from 'typescript-eslint';

import * as parserOptions from '../parser-options.js';
import { hasTypeModule, hasTypescript } from '../utils.js';
import { config as base } from './base.js';
import emberRules from './rules/ember.js';
import emberTypescript from './rules/ember-typescript.js';
import typescript from './rules/typescript.js';
import typescriptTyped from './rules/typescript-typed.js';

/**
 * @param {string} root the directory of the eslint config file. can be import.meta.dirname
 */
export function config(root) {
  let hasTS = hasTypescript(root);
  let esm = parserOptions.esm(root);
  let isTypeModule = hasTypeModule(root);

  return ts.config(
    [
      ...base(root),
      ember.configs.base,
      ember.configs.gjs,
      ember.configs.gts,
      {
        name: 'gossi/ember/babel-parser',
        files: ['**/*.js'],
        languageOptions: {
          parser: babelParser
        }
      },
      {
        name: 'gossi/ember/javascript',
        files: ['**/*.{js,gjs}'],
        languageOptions: {
          parserOptions: esm.js,
          globals: {
            ...globals.browser
          }
        },
        extends: [emberRules]
      },
      hasTS
        ? {
            name: 'gossi/ember/typescript',
            files: ['**/*.{ts,gts}'],
            languageOptions: {
              // eslint-disable-next-line import-x/no-named-as-default-member
              parser: ember.parser,
              parserOptions: esm.ts
            },
            extends: [
              ...typescript,
              ...typescriptTyped,
              ember.configs.gts,
              emberRules,
              emberTypescript
            ]
          }
        : undefined,
      hasTS
        ? {
            name: 'gossi/ember/tests/typescript',
            files: ['tests/**/*-test.{js,gjs,ts,gts}'],
            plugins: {
              qunit
            }
          }
        : {
            name: 'gossi/ember/tests',
            files: ['tests/**/*-test.{js,gjs}'],
            plugins: {
              qunit
            }
          },
      /**
       * CJS node files
       */
      {
        name: 'gossi/ember/node/cjs',
        files: [
          '**/*.cjs',
          ...(isTypeModule
            ? [
                'config/**/*.cjs',
                'testem.cjs',
                'testem*.cjs',
                '.prettierrc.cjs',
                '.stylelintrc.cjs',
                '.template-lintrc.cjs',
                'ember-cli-build.cjs'
              ]
            : [
                'config/**/*.js',
                'tests/dummy/config/**/*.js',
                'testem.js',
                'testem*.js',
                '.prettierrc.js',
                '.stylelintrc.js',
                '.template-lintrc.js',
                'ember-cli-build.js'
              ])
        ],
        plugins: {
          n
        },

        languageOptions: {
          sourceType: 'script',
          ecmaVersion: 'latest',
          globals: {
            ...globals.node
          }
        }
      },
      /**
       * ESM node files
       * NOTE: the app/src directory is browser-land (typically)
       */
      {
        name: 'gossi/ember/node/esm',
        files: ['**/*.mjs', 'config/**/*', '.template-lintrc.js', '*.js'],
        plugins: {
          n
        },

        languageOptions: {
          sourceType: 'module',
          ecmaVersion: 'latest',
          parserOptions: esm.js,
          globals: {
            ...globals.node
          }
        }
      }
      /**
       * Since this config is dynamically created, we create null entries when a situation doesn't apply.
       * For example, we use `null` in the place where the TypeScript configs would go if a consumer isn't using TypeScript.
       */
    ].filter(Boolean)
  );
}
