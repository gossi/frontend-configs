import n from 'eslint-plugin-n';
import globals from 'globals';
import ts from 'typescript-eslint';

import * as parserOptions from '../parser-options.js';
import { hasTypeModule, hasTypescript } from '../utils.js';
import { config as base } from './base.js';
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
      /**
       * Global configuration for node
       */
      {
        name: 'gossi/node',
        plugins: {
          n
        }
      },

      /**
       * ESM node files
       */
      {
        name: 'gossi/node/esm',
        files: ['**/*.mjs', ...(isTypeModule ? ['**/*.js'] : [])],
        languageOptions: {
          sourceType: 'module',
          ecmaVersion: 'latest',
          parserOptions: esm.js,
          globals: {
            ...globals.node
          }
        }
      },

      /**
       * CJS node files
       */
      {
        name: 'gossi/node/cjs',
        files: ['**/*.cjs', ...(isTypeModule ? [] : ['**/*.js'])],
        languageOptions: {
          sourceType: 'script',
          ecmaVersion: 'latest',
          globals: {
            ...globals.node
          }
        }
      },

      /**
       * TS node files
       */
      hasTS
        ? {
            name: 'gossi/node/typescript',
            files: ['**/*.ts'],
            languageOptions: {
              parserOptions: esm.ts
            },
            extends: [...typescript, ...typescriptTyped]
          }
        : undefined

      /**
       * Since this config is dynamically created, we create null entries when a situation doesn't apply.
       * For example, we use `null` in the place where the TypeScript configs would go if a consumer isn't using TypeScript.
       */
    ].filter(Boolean)
  );
}
