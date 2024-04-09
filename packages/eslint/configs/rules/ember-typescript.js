'use strict';

/**
 * @type {import('../types').PartialConfig}
 */
const rule = {
  rules: {
    // `void` is a valid type for `Return` signatures, yet TS doesn't recognize
    // that as proper return types.
    '@typescript-eslint/no-invalid-void-type': 'off'
  }
};

module.exports = { rule };
