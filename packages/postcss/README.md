# `@gossi/config-postcss`

Add postcss to your packages.

## Installation

```sh
pnpm add -D @gossi/config-postcss postcss @parcel/css
```

## Usage

### `plugins(options: Options)`

Configure postcss plugins (for example in bundlers or `ember-css-modules`).

```js
import { plugins } from '@gossi/config-postcss';

plugins(options);
```

```ts
interface Options {
  minify: boolean;
}
```
