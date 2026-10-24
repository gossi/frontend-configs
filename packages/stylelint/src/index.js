import { browsers } from '@gossi/config-targets';

// oxlint-disable-next-line unicorn/prefer-export-from
import { configure } from './configure.js';

// eslint-disable-next-line unicorn/prefer-export-from
export { configure };

export default configure({ browsers });
