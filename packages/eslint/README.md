# `@gossi/config-eslint`

Add eslint to your packages. Based on [NullVoxPopuli/eslint-config](https://github.com/NullVoxPopuli/eslint-configs).

## Installation

1) Install these packages:

    ```sh
    pnpm add -D @gossi/config-eslint eslint
    ```

2) Create a `.eslintrc.js` file with your desired config (see below)

3) Add scripts to execute linting

    ```json
    {
      "scripts": {
        "lint:js": "eslint . --cache",
        "lint:js:fix": "eslint . --fix"
      }
    }
    ```

## Configs

### Ember

```js
// .eslintrc.js
'use strict';
const { configs } = require('@gossi/eslint-configs');
// accommodates: JS, TS, App, and Addon
module.exports = configs.ember();
```

### Node

This config is native ES Modules, and cjs is allowed via files with the `*.cjs`
extension.

```js
// .eslintrc.js
'use strict';
const { configs } = require('@gossi/eslint-configs');
// accommodates: JS
module.exports = configs.node();
```

### Node (CJS as defaultl)

This config is for when `*.js` is cjs, and ES Modules are used via the `*.mjs`
extension.

```js
// .eslintrc.js
'use strict';
const { configs } = require('@gossi/eslint-configs');
// accommodates: JS
module.exports = configs.nodeCJS();
```

### Node (ES Modules in TypeScript)

```js
// .eslintrc.js
'use strict';
const { configs } = require('@gossi/eslint-configs');
// accommodates: JS, TS
module.exports = configs.nodeTS();
```

## Overriding

Every of the above config is overridable. Here are two examples of _how_ you can
override the provided configs:

_overriding_:

```js
// .eslintrc.js
'use strict';
const { configs } = require('@gossi/eslint-configs');
const config = configs.ember();
module.exports = {
  ...config,
  overrides: [
    ...config.overrides,
    // your modifications here
    // see: https://eslint.org/docs/user-guide/configuring/configuration-files#how-do-overrides-work
  ]
}
```

_overriding prettier configuration example_:

```js
// .eslintrc.js
'use strict';
const { configs } = require('@gossi/eslint-configs');
const config = configs.ember();
module.exports = {
  ...config,
  overrides: [
    ...config.overrides,
    {
      files: ['**/*.js', '**/*.ts'],
      rules: {
        'prettier/prettier': ['error', { singleQuote: true, printWidth: 120, trailingComma: 'none' }],
      },
    },
  ]
}
```
