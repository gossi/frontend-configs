// NOTE: relative import instead of the `@gossi/config-oxfmt` package to avoid a workspace
// dependency cycle; the published package exposes the same config via subpath exports.
export { default } from '../oxfmt/src/index.js';
