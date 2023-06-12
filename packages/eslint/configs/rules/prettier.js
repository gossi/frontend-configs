module.exports = {
  /**
   *
   * @returns {import('../types').PartialConfig}
   */
  resolveRule() {
    let { cosmiconfigSync } = require('cosmiconfig');
    let prettier = cosmiconfigSync('prettier');

    let prettierResult = prettier.search();

    return {
      plugins: ['prettier'],
      rules: {
        'prettier/prettier': prettierResult?.config
          ? ['error', prettierResult.config]
          : ['error', { singleQuote: true, printWidth: 100, trailingComma: 'es5' }]
      }
    };
  }
};
