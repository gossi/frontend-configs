# `@gossi/config-eslint`

Add eslint to your packages. Based on
[NullVoxPopuli/eslint-config](https://github.com/NullVoxPopuli/eslint-configs).

This lint config meta package is setup to lazily detect which plugins and
configurations you have installed and automatically add them to your lint
config.

This has the following benefits:

- No need to install dependencies you don't use (typescript, for example)
- Progressive enhancement as you decide you want more behaviors / lints
- Minimal impact to node_modules so that local dev and C.I. are not unnecessarily hit with extra dependencies

## Installation

### 1) Install these packages

```sh
pnpm add -D @gossi/config-eslint eslint
```

### 2) Create Config

Create a `.eslintrc.js` file with your desired config (see below)

### 3) Add scripts to execute linting

```json
{
  "scripts": {
    "lint:js": "eslint . --cache",
    "lint:js:fix": "eslint . --fix"
  }
}
```

### 4) Add packages to describe your project

Describe your project:

- Basic:
  - `@babel/core` (bring your version)
- Javascript:
  - `@babel/eslint-parser`
- Typescript:
  - `@typescript-eslint/eslint-plugin`
  - `@typescript-eslint/parser`

Zero config for these plugins, installing them is enough:

- Ember:
  - `eslint-plugin-ember`
  - `eslint-plugin-qunit`
- Storybook:
  - `eslint-plugin-storybook`

## Configs

### Ember

Accommodates: JS, TS, App, and Addon

```js
// .eslintrc.js
'use strict';
const { configs } = require('@gossi/config-eslint');

// accommodates: JS, TS, App, Addon, and V2 Addon
module.exports = configs.ember();
```

overriding:

```js
// .eslintrc.js
'use strict';
const { configs } = require('@gossi/config-eslint');

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

### Cross Platform

This config is ESM, as ESM is the most widely supported module format across different distributions (browser, node, etc).

```js
// .eslintrc.cjs
'use strict';

const { configs } = require('@gossi/config-eslint');

// accommodates: JS, TS, ESM, and CJS
module.exports = configs.crossPlatform();
```

### Node

This config looks at your package.json to determine if your project is CommonJS or ES Modules.

```js
// .eslintrc.js
'use strict';
const { configs } = require('@gossi/config-eslint');

// accommodates: JS, TS, ESM, and CJS
module.exports = configs.node();
```

overriding:

```js
// .eslintrc.js
'use strict';

const { configs } = require('@gossi/config-eslint');
const config = configs.node();

module.exports = {
  ...config,
  overrides: [
    ...config.overrides,
    // your modifications here
    // see: https://eslint.org/docs/user-guide/configuring/configuration-files#how-do-overrides-work
  ]
}
```

### Node (CJS)

This config is for when `*.js` is CommonJS, and ES Modules are used via the `*.mjs`
extension.

```js
// .eslintrc.js
'use strict';
const { configs } = require('@gossi/config-eslint');

// accommodates: JS, TS, and CJS
module.exports = configs.nodeCJS();
```

### Node (ESM)

This config is for when `*.js` is ES Modules, and CommonJS are used via the `*.cjs`
extension.

```js
// .eslintrc.js
'use strict';
const { configs } = require('@gossi/config-eslint');

// accommodates: JS, TS, and ESM
module.exports = configs.nodeESM();
```

## Debugging

To see what the resolved config looks like for a file

```sh
node_modules/.bin/eslint --print-config path/to/file
```
