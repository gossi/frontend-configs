# `@gossi/config-stylelint`

Adds stylelint to your packages.

## Installation

1) Install these packages:

    ```sh
    pnpm add -D @gossi/config-stylelint stylelint
    ```

2) Create `stylelint.config.(m)js` config file with these contents:

    ```js
    export { default } from '@gossi/config-stylelint';
    ```

    Note: The `.mjs` extension is for CJS packages, the `.js` extension for
    packages with `"type": "module"`.

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
browsers), change your `stylelint.config.(m)js` to use this:

```js
import { browsers } from 'path/to/your/browsers/config';
import { configure } from '@gossi/config-stylelint';

export default configure({ browsers });
```

## Extension

To extend your configuration with more rules, here is how to do that in your
`stylelint.config.(m)js`:

```js
import config from '@gossi/config-stylelint';

export default {
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
import { browsers } from 'path/to/your/browsers/config';
import { configure } from '@gossi/config-stylelint';

const config = configure({ browsers });

export default {
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

If the extension can't find `stylelint.config.(m)js` on its own,
configure it per repo, create or edit `.vscode/settings.json` (if this is a
monorepo, then in the root is fine enough for all packages):

```json
{
  "stylelint.configFile": "path/to/stylelint.config.(m)js",
  "stylelint.configBasedir": "path/to/",
  "stylelint.packageManager": "pnpm"
}
```
