// @ts-check
'use strict';

const { merge, pipe } = require('./configs/-utils');

module.exports = {
  merge,
  pipe,
  configs: {
    /**
     * @returns {import('eslint').Linter.Config}
     */
    ember() {
      return require('./configs/ember')();
    },

    /**
     * @returns {import('eslint').Linter.Config}
     */
    crossPlatform() {
      return require('./configs/cross-platform')();
    },

    /**
     * @returns {import('eslint').Linter.Config}
     */
    node() {
      return require('./configs/node').node();
    },

    /**
     * @returns {import('eslint').Linter.Config}
     */
    nodeCJS() {
      return require('./configs/node').nodeCJS();
    },

    /**
     * @returns {import('eslint').Linter.Config}
     */
    nodeESM() {
      return require('./configs/node').nodeESM();
    }
  }
};
