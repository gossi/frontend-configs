import { createRequire } from 'node:module';
import path from 'node:path';

import babelParser from '@babel/eslint-parser';
import ember from 'eslint-plugin-ember/recommended';
import n from 'eslint-plugin-n';
import globals from 'globals';
import ts from 'typescript-eslint';

import * as parserOptions from '../parser-options.js';
import { hasDep, hasTypeModule, hasTypescript } from '../utils.js';
import base from './base.js';
import emberTemplates from './rules/ember-templates.js';
import emberTypescript from './rules/ember-typescript.js';
import emberRules from './rules/ember.js';
import typescriptTyped from './rules/typescript-typed.js';
import typescript from './rules/typescript.js';

/**
 * @param {string} root the directory of the ESLint config file. can be import.meta.dirname
 */
export default function config(root) {
  let hasTS = hasTypescript(root);
  let esm = parserOptions.esm(root);
  let isTypeModule = hasTypeModule(root);

  // Only apply qunit rules when the consumer lists eslint-plugin-qunit as a
  // direct dependency. Resolution-based checks find hoisted transitive copies,
  // which wrongly enables qunit/* rules on non-qunit (e.g. vitest) projects.
  let hasQunit = hasDep(root, 'eslint-plugin-qunit');
  let qunit = hasQunit
    ? createRequire(path.resolve(root, 'package.json'))('eslint-plugin-qunit/configs/recommended')
    : undefined;

  let qunitTests;
  if (qunit) {
    qunitTests = hasTS
      ? {
          name: 'gossi/ember/tests/typescript',
          files: ['tests/**/*-test.{js,gjs,ts,gts}'],
          ...qunit
        }
      : {
          name: 'gossi/ember/tests',
          files: ['tests/**/*-test.{js,gjs}'],
          ...qunit
        };
  }

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
      /**
       * Templates
       *
       * Linting templates is handled by `eslint-plugin-ember` (see
       * `./rules/ember-templates.js`), which needs its own parser for the `<template>`
       * tag. Placing this after the JavaScript block above means `ember-eslint-parser`
       * takes `.gjs` away from `@babel/eslint-parser`, which cannot parse it.
       */
      {
        name: 'gossi/ember/templates',
        files: ['**/*.{gjs,gts}'],
        languageOptions: {
          // eslint-disable-next-line import-x/no-named-as-default-member
          parser: ember.parser
        },
        extends: [emberTemplates]
      },
      qunitTests,
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
