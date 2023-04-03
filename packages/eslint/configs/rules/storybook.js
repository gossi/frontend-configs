const plugin = 'storybook';

/**
 * @type {import('../types').PartialConfig}
 */
const rule = {
  plugins: ['storybook'],
  extends: ['plugin:storybook/recommended', 'plugin:storybook/csf']
};

module.exports = { rule, plugin };
