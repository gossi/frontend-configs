import templateLintMigration from 'eslint-plugin-ember/configs/template-lint-migration';
import { plugin as emberPlugin } from 'eslint-plugin-ember/recommended';

/**
 * ember-template-lint's `recommended` preset, ported to ESLint rules by
 * `eslint-plugin-ember`.
 *
 * The set is read from the installed plugin instead of being written out here, so it
 * follows the consumer's `eslint-plugin-ember` version, and every rule it references
 * is guaranteed to ship with that same version.
 */
const migrationRules = Object.fromEntries(
  templateLintMigration
    .flatMap((config) => Object.entries(config.rules ?? {}))
    .filter(([ruleName]) => ruleName.startsWith('ember/template-'))
);

export default {
  name: 'gossi/rules/ember/templates',
  // rules must be declared alongside the plugin that provides them
  plugins: { ember: emberPlugin },
  rules: {
    ...migrationRules,

    /**
     * ported from `@gossi/config-template-lint`
     */
    'ember/template-no-negated-condition': 'off',
    'ember/template-no-passed-in-event-handlers': [
      'error',
      {
        ignore: {
          Form: ['submit'],
          Pagination: ['change']
        }
      }
    ],
    // given an array, the rule replaces its default (`meta`, `style`, `html`, `script`)
    // with this list, which is what the template-lint config did as well
    'ember/template-no-forbidden-elements': ['error', ['meta', 'html', 'script']],

    /**
     * ember-template-lint's `recommended` preset turns these off for `*.gjs`/`*.gts`,
     * and `template-lint-migration` only mirrors the top-level rules, so they are
     * re-declared here.
     *
     * `{{foo}}` is only ambiguous in loose-mode templates: in `*.gjs`/`*.gts`, `foo` can
     * be a JS binding, and since ESLint sees the surrounding scope, it is the one
     * reporting when `foo` is undefined.
     */
    'ember/template-no-curly-component-invocation': 'off',
    'ember/template-no-implicit-this': 'off',
    // these assume global components, which co-located templates don't have
    'ember/template-builtin-component-arguments': 'off',
    'ember/template-no-builtin-form-components': 'off',
    'ember/template-no-unknown-arguments-for-builtin-components': 'off'
  }
};
