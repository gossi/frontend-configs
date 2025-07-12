import babelParser from '@babel/eslint-parser';
import ember from 'eslint-plugin-ember/recommended';
import n from 'eslint-plugin-n';
import qunit from 'eslint-plugin-qunit/configs/recommended';
import globals from 'globals';
import ts from 'typescript-eslint';

import * as parserOptions from '../parser-options.js';
import { hasTypeModule, hasTypescript } from '../utils.js';
import base from './base.js';
import emberRules from './rules/ember.js';
import emberTypescript from './rules/ember-typescript.js';
import typescript from './rules/typescript.js';
import typescriptTyped from './rules/typescript-typed.js';

/**
 * @param {string} root the directory of the eslint config file. can be import.meta.dirname
 */
export default function config(root) {
  let hasTS = hasTypescript(root);
  let esm = parserOptions.esm(root);
  let isTypeModule = hasTypeModule(root);

  return ts.config(
    [
      ...base(root),
      /**
       * Ember source files
       */
      {
        name: 'gossi/ember/javascript',
        files: ['{src/app/tests}/**/*.{js,gjs}'],
        languageOptions: {
          parser: babelParser,
          parserOptions: esm.js,
          globals: {
            ...globals.browser
          }
        },
        extends: [ember.configs.base, ember.configs.gjs, emberRules]
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
              ember.configs.base,
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
            ...qunit
          }
        : {
            name: 'gossi/ember/tests',
            files: ['tests/**/*-test.{js,gjs}'],
            ...qunit
          },
      /**
       * CJS node files
       */
      {
        name: 'gossi/ember/node/cjs',
        files: [
          '**/*.cjs',
          ...(isTypeModule
            ? ['config/**/*.js', 'tests/dummy/config/**/*.js', '*.cjs']
            : ['config/**/*.js', 'tests/dummy/config/**/*.js', '*.js'])
        ],
        extends: [n.configs['flat/recommended-script']]
      },
      /**
       * ESM node files
       * NOTE: the app/src directory is browser-land (typically)
       */
      {
        name: 'gossi/ember/node/esm',
        files: ['**/*.mjs', ...(isTypeModule ? ['*.js'] : [])],
        extends: [n.configs['flat/recommended-module']],
        languageOptions: {
          parserOptions: esm.js
        }
      }
      /**
       * Since this config is dynamically created, we create null entries when a situation doesn't apply.
       * For example, we use `null` in the place where the TypeScript configs would go if a consumer isn't using TypeScript.
       */
    ].filter(Boolean)
  );
}
