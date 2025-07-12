// this is a cyclic dependency, so let's gonna hardcode the import to the
// sibling directory and evict the dependency
// import { configs } from '@gossi/config-eslint';
import node from '../eslint/src/configs/node.js';

export default node(import.meta.dirname);
