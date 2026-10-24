// NOTE: relative import instead of the `@gossi/config-oxlint` package to avoid a workspace
// dependency cycle; the published package exposes the same config via subpath exports.
import node from '../oxlint/src/configs/node.js';

// The source of this package carries `eslint-disable` suppressions for the ESLint stack
// that it ships. Some of them are unused under oxlint (different rule implementations),
// so reporting of unused disable directives is relaxed here.
const config = node(import.meta.dirname);

export default {
  ...config,
  options: {
    ...config.options,
    reportUnusedDisableDirectives: 'off'
  }
};
