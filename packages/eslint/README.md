# `@gossi/config-eslint`

Add eslint to your packages.

## Installation

### 1) Install these packages

```sh
pnpm add -D @gossi/config-eslint eslint
```

### 2) Add scripts to execute linting

```json
{
  "scripts": {
    "lint:js": "eslint . --cache",
    "lint:js:fix": "eslint . --fix"
  }
}
```

### 3) Create Config

Create a `eslint.config.js` file with your desired config (see below)

## Configs

### Node

For all node projects.

```js
// eslint.config.js
import { configs } from '@gossi/config-eslint';

export default configs.node(import.meta.dirname);
```

### Ember

For all ember projects.

```js
// eslint.config.js
import { configs } from '@gossi/config-eslint';

export default configs.ember(import.meta.dirname);
```

overriding with storybook (install `eslint-plugin-storybook`):

```js
import storybook from 'eslint-plugin-storybook';

import { configs } from '@gossi/config-eslint';

export default [
  ...configs.ember(import.meta.dirname),
  ...storybook.configs['flat/recommended'],
  ...storybook.configs['flat/csf']
];
```

## Debugging

To see what the resolved config looks like for a file

```sh
ppx @eslint/config-inspector
```
