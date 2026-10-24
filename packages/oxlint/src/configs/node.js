import { defineConfig } from 'oxlint';

import { hasTsgolint, hasTypescript } from '../utils.js';
import base from './base.js';
import tsTyped from './rules/typescript-typed.js';
import ts from './rules/typescript.js';

/**
 * The oxlint port of `@gossi/config-eslint` node.
 *
 * NOTE: the ESLint config differentiated `eslint-plugin-n` recommended-script vs
 * recommended-module per file-extension. In oxlint both presets port to the same
 * single rule, so that split is not needed.
 *
 * Detection — the project root (`tsconfig.json`, installed dependencies) decides which
 * rules can apply:
 *
 * - no `tsconfig.json`: the `typescript` plugin is removed from the base plugin list,
 *   which also drops its category-default rules; a JS-only project resolves zero
 *   TypeScript rules, not even the syntax-level ones.
 * - `tsconfig.json` present: the ported TypeScript rulesets apply to TypeScript files,
 *   excluding declaration files — the typescript-eslint configs ignore `d.ts` by default.
 * - type-aware rules additionally require `oxlint-tsgolint`; if it is not installed,
 *   `options.typeAware` stays `false` and those rules stay dormant instead of failing
 *   the whole lint run.
 *
 * @param {string} root the directory of the Oxlint config file. can be import.meta.dirname
 */
export default function config(root) {
  let hasTS = hasTypescript(root);

  /**
   * `node` is off by default and added here; `typescript` is part of the base list but
   * only stays enabled for projects that actually use TypeScript.
   */
  let plugins = base.plugins.filter((plugin) => hasTS || plugin !== 'typescript');

  plugins.push('node');

  return defineConfig({
    ...base,

    plugins,

    /**
     * Node.js globals, the equivalent of `globals.node` in the ESLint config.
     */
    env: {
      node: true
    },

    /**
     * Enables the type-aware rules, the port of the `typescript-typed` ruleset.
     */
    options: {
      ...base.options,
      typeAware: hasTS && hasTsgolint(root)
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
            excludeFiles: ['**/*.d.ts'],
            rules: {
              ...ts,
              ...tsTyped
            }
          }
        ]
      : []
  });
}
