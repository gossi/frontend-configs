# `@gossi/config-stylelint`

Adds stylelint to your packages.

## Installation

1) Install these packages:

```sh
pnpm add -D @gossi/config-stylelint stylelint
```

2) Create a `.stylelintrc.js` file with these contents:

```js
'use strict';

module.exports = require('@gossi/config-stylelint');
```

3) Add scripts to execute linting

```json
{
  "scripts": {
    "lint:css": "stylelint \"path/to/css/**/*.css\" --allow-empty-input --cache",
    "lint:css:fix": "stylelint \"path/to/css/**/*.css\" --allow-empty-input --fix",
  }
}
```

## Usage in vscode

Recommend the [official stylelint
extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
(refer for more options). The extension can't find `.stylelintrc.js` on its own,
configure it per repo, create or edit `.vscode/settings.json` (if this is a
monorepo, then in the root is fine enough for all packages):

```json
{
  "stylelint.configFile": "path/to/.stylelintrc.js",
  "stylelint.configBasedir": "path/to/",
  "stylelint.packageManager": "pnpm"
}
```
