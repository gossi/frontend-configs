# `@gossi/config-template-lint`

Add template-lint to your packages.

## Installation

1) Install these packages:

    ```sh
    pnpm add -D @gossi/config-template-lint ember-template-lint
    ```

2) Create a `.template-lintrc.js` file with these contents:

    ```js
    'use strict';

    module.exports = require('@gossi/config-template-lint');
    ```

3) Add scripts to execute linting

    ```json
    {
      "scripts": {
        "lint:hbs": "ember-template-lint . --no-error-on-unmatched-pattern",
        "lint:hbs:fix": "ember-template-lint . --fix --no-error-on-unmatched-pattern"
      }
    }
    ```
