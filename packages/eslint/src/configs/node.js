import n from 'eslint-plugin-n';
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
       * ESM node files
       */
      {
        name: 'gossi/node/esm',
        files: ['**/*.mjs', ...(isTypeModule ? ['**/*.js'] : [])],
        extends: [n.configs['flat/recommended-module']],
        languageOptions: {
          parserOptions: esm.js
        }
      },

      /**
       * CJS node files
       */
      {
        name: 'gossi/node/cjs',
        files: ['**/*.cjs', ...(isTypeModule ? [] : ['**/*.js'])],
        extends: [n.configs['flat/recommended-script']]
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
