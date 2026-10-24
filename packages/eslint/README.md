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

### Base

The shared common configs. It's good way to start your own config.

```js
// eslint.config.js
import base from '@gossi/config-eslint/base';

export default configs.base(import.meta.dirname);
```

### Node

For all node projects.

```js
// eslint.config.js
import node from '@gossi/config-eslint/node';

export default node(import.meta.dirname);
```

### Ember

For all ember projects.

```js
// eslint.config.js
import ember from '@gossi/config-eslint/ember';

export default ember(import.meta.dirname);
```

overriding with storybook (install `eslint-plugin-storybook`):

```js
import ember from '@gossi/config-eslint/ember';
import storybook from 'eslint-plugin-storybook';

export default [
  ...ember(import.meta.dirname),
  ...storybook.configs['flat/recommended'],
  ...storybook.configs['flat/csf']
];
```

#### Templates

`ember-template-lint` is deprecated. Its rules have been ported to
[`eslint-plugin-ember`](https://github.com/ember-cli/eslint-plugin-ember), and the Ember
config applies them for you, so `lint:js` lints the templates in your `*.gjs`/`*.gts`
files. `*.hbs` files are not supported.

This means `.template-lintrc.(m)js` and the `lint:hbs` scripts are no longer needed:

```json
{
  "scripts": {
    "lint:js": "eslint . --cache",
    "lint:js:fix": "eslint . --fix"
  }
}
```

Templates are formatted by Prettier through `eslint-plugin-prettier`, which is part of the
base config.

Inline `template-lint` directives have to become ESLint directives.
`ember/template-no-template-lint-directives` reports them and rewrites them for you when
you run `lint:js:fix`:

```gjs
{{! template-lint-disable no-inline-styles }}
{{! is rewritten into }}
{{! eslint-disable ember/template-no-inline-styles }}
```

### JSON

If you wish, use it for json.

```js
// eslint.config.js
import json from '@gossi/config-eslint/json';

export default json();
```

## Debugging

To see what the resolved config looks like for a file

```sh
ppx @eslint/config-inspector
```

## Utils

Some utilities to help you writing/customizing rules.

### `hasBabelConfig()`

Find out, if a babel config is used:

```js
import { utils } from '@gossi/config-eslint';

const usesBabelWithAConfig = utils.hasBabelConfig(import.meta.dirname);
```

### `hasTypescript()`

Find out, if typescript is being used.

```js
import { utils } from '@gossi/config-eslint';

const usesTypescript = utils.hasTypescript(import.meta.dirname);
```

### `hasTypeModule()`

Find out, if package is using [`"type": "module"`](https://nodejs.org/api/packages.html#type).

```js
import { utils } from '@gossi/config-eslint';

const usesESM = utils.hasTypeModule(import.meta.dirname);
```

### `hasDep()`

Figure, if a given dependency is present

```js
import { utils } from '@gossi/config-eslint';

const usesStorybook = utils.hasDep(import.meta.dirname, 'storybook');
```
