'use strict';

// this is a cyclic dependency, so let's gonna hardcode the import to the
// sibling directory and evict the dependency
// module.exports = require('@gossi/config-prettier');

module.exports = require('../prettier');
