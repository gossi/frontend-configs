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
    // get nodeCJS() {
    //   const { nodeCJS } = require('./configs/node');
    //   const { json } = require('./configs/json');

    //   // @ts-ignore
    //   return configCreator(nodeCJS, json);
    // },
    // get node() {
    //   const { nodeESM } = require('./configs/node');
    //   const { json } = require('./configs/json');

    //   // @ts-ignore
    //   return configCreator(nodeESM, json);
    // },
    // get nodeTS() {
    //   const { nodeESM, nodeMTS } = require('./configs/node');
    //   const { json } = require('./configs/json');

    //   // @ts-ignore
    //   return configCreator(nodeESM, nodeMTS, json);
    // }
  }
};
