'use strict';

// this is a cyclic dependency, so let's gonna hardcode the import to the
// sibling directory and evict the dependency
// const { configs } = require('@gossi/config-eslint');
// eslint-disable-next-line n/no-unpublished-require
const { configs } = require('../eslint');

module.exports = configs.node();
