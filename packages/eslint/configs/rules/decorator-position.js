const plugin = 'decorator-position';

/**
 * @type {import('../types').PartialConfig}
 */
const rule = {
  plugins: [plugin],
  extends: ['plugin:decorator-position/ember']
};

module.exports = { rule, plugin };
