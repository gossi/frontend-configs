const { pipe } = require('../-utils');

/**
 * @typedef { import('../naming-conventions/types').Selector } Selector
 */

/**
 * @param {Partial<import('eslint').Linter.Config>} config
 * @param {((rules?: Selector[]) => Selector[])[]} fns
 * @returns {Partial<import('eslint').Linter.Config>}
 */
function applyNamingConventions(config, ...fns) {
  if (config.rules && config.rules['@typescript-eslint/naming-convention'] !== undefined) {
    // @ts-ignore
    config.rules['@typescript-eslint/naming-convention'] = pipe(
      // @ts-ignore
      config.rules['@typescript-eslint/naming-convention'],
      ...fns
    );
  }

  return config;
}

module.exports = {
  applyNamingConventions
};
