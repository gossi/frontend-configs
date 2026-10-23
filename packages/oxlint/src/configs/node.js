import { defineConfig } from 'oxlint';

import { hasTypescript } from '../utils.js';
import base from './base.js';
import ts from './rules/typescript.js';
import tsTyped from './rules/typescript-typed.js';

/**
 * The oxlint port of `@gossi/config-eslint` node.
 *
 * NOTE: when the project has a `tsconfig.json`, the type-aware linting is enabled.
 * This requires the `oxlint-tsgolint` package to be installed by the consumer.
 *
 * @param {string} root the directory of the Oxlint config file. can be import.meta.dirname
 */
export default function config(root) {
  let hasTS = hasTypescript(root);

  return defineConfig({
    ...base,

    /**
     * `node` is off by default, everything else stays as in the base config.
     */
    plugins: [...base.plugins, 'node'],

    /**
     * Node.js globals, the equivalent of `globals.node` in the ESLint config.
     */
    env: {
      node: true
    },

    /**
     * Enables the type-aware (`typescript/*💭`) rules, the port of the
     * `typescript-typed` ruleset.
     */
    options: {
      ...base.options,
      typeAware: hasTS
    },

    rules: {
      ...base.rules,

      /**
       * The port of `eslint-plugin-n` recommended (script and module presets both
       * port to this single rule, the rest has no oxlint equivalent).
       */
      'node/no-exports-assign': 'error'
    },

    /**
     * TypeScript rules only apply when the consumer uses TypeScript, mirroring the
     * conditional `hasTS` block of the ESLint node config.
     */
    overrides: hasTS
      ? [
          {
            files: ['**/*.ts'],
            rules: {
              ...ts,
              ...tsTyped
            }
          }
        ]
      : []
  });
}
