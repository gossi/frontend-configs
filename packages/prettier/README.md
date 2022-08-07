# `@gossi/config-prettier`

Add prettier to your packages.

## Installation

1) Install these packages:

```sh
pnpm add -D prettier
```

Plus this config:

```json
{
  "devDependencies": {
    "@gossi/config-prettiier": "*"
  }
}
```

2) Create a `.prettierrc.js` file with these contents:

```js
'use strict';

module.exports = require('@gossi/config-prettier');
```
