import type { OxlintConfig } from 'oxlint';

/**
 * The oxlint port of `@gossi/config-eslint` node.
 *
 * Inspects the project root for a `tsconfig.json` to conditionally enable the
 * type-aware ruleset (which requires `oxlint-tsgolint` in the consumer).
 *
 * @param root the directory of the Oxlint config file. can be `import.meta.dirname`
 */
declare function node(root: string): OxlintConfig;

export default node;
