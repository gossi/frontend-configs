// NOTE: relative import instead of the `@gossi/config-oxlint` package to avoid a workspace
// dependency cycle; the published package exposes the same config via subpath exports.
import node from '../oxlint/src/configs/node.js';

export default node(import.meta.dirname);
