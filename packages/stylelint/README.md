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

## Configuration

`@gossi/config-stylelint` provides a little configuration option (for target
browsers), change your `.stylelintrc.js` to use this:

```js
'use strict';

const { browsers } = require('path/to/your/browsers/config');
const configure = require('@gossi/config-stylelint/configure');

module.exports = configure({ browsers });
```

## Extension

To extend your configuration with more rules, here is how to do that in your
`.stylelintrc.js`:

```js
'use strict';

const config = require('@gossi/config-stylelint');

module.exports = {
  ...config,
  rules: {
    ...config.rules,
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['$']
      }
    ]
  }
};
```

this also works with configuring `@gossi/config-stylelint`:

```js
'use strict';

const { browsers } = require('path/to/your/browsers/config');
const configure = require('@gossi/config-stylelint/configure');
const config = configure({ browsers });

module.exports = {
  ...config,
  rules: {
    ...config.rules,
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['$']
      }
    ]
  }
};
```

## Usage in vscode

Recommend the [official stylelint
extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
(refer for more options).

If the extension can't find `.stylelintrc.js` on its own,
configure it per repo, create or edit `.vscode/settings.json` (if this is a
monorepo, then in the root is fine enough for all packages):

```json
{
  "stylelint.configFile": "path/to/.stylelintrc.js",
  "stylelint.configBasedir": "path/to/",
  "stylelint.packageManager": "pnpm"
}
```
