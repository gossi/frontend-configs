'use strict';

const plugin = 'ember';

/**
 * @type {import('../types').PartialConfig}
 */
const rule = {
  plugins: [plugin],
  extends: ['plugin:ember/recommended'],
  rules: {
    // this is a silly convention from back in the rails days
    // it has no place in JS where things are camelCase
    'ember/routes-segments-snake-case': 'off'
  }
};

module.exports = { rule, plugin };
