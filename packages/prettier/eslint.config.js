// this is a cyclic dependency, so let's gonna hardcode the import to the
// sibling directory and evict the dependency
// import { configs } from '@gossi/config-eslint';

import { configs } from '../eslint/src/index.js';

export default configs.node(import.meta.dirname);
