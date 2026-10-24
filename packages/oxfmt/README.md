# `@gossi/config-oxfmt`

Oxfmt configuration, ported from `@gossi/config-prettier` and the `@stylistic/eslint-plugin`
rules that a formatter subsumes.

## Installation

```sh
pnpm add -D @gossi/config-oxfmt oxfmt
```

## Usage

Create an `oxfmt.config.ts` (auto-discovered) or any `.js` config passed via `--config`:

```js
// oxfmt.config.ts
import config from '@gossi/config-oxfmt';

export default config;
```

Or add your own overrides on top:

```js
// oxfmt.config.ts
import { defineConfig } from 'oxfmt';

import config from '@gossi/config-oxfmt';

export default defineConfig({ ...config });
```
