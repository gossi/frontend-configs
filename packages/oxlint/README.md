# `@gossi/config-oxlint`

Oxlint configuration, ported from `@gossi/config-eslint`.

## Installation

```sh
pnpm add -D @gossi/config-oxlint oxlint
```

## Usage

Create an `oxlint.config.ts` (auto-discovered) or any `.js` config passed via `--config`:

```js
// oxlint.config.ts
import base from '@gossi/config-oxlint/base';
import { defineConfig } from 'oxlint';

export default defineConfig({
  ...base,
  // your own overrides
  rules: { ...base.rules }
});
```

For Node.js projects (the port of `@gossi/config-eslint/node`):

```js
// oxlint.config.ts
import node from '@gossi/config-oxlint/node';
import { defineConfig } from 'oxlint';

export default defineConfig(node(import.meta.dirname));
```

The `node` config inspects the project root and conditionally enables the
`typescript-eslint` port when a `tsconfig.json` exists.

> [!TIP]
> The presets ship `.d.ts` files (`OxlintConfig` / `OxfmtConfig`), so editors and `tsc` get
> full types. For type-aware linting of the config file itself, bring it into your tsconfig
> program (`"include": ["*.config.ts"]` + `"types": ["node"]`, so `import.meta.dirname` is
> typed — see [`testing/blog-core`](../../testing/blog-core/tsconfig.json)). If the file
> must stay outside the program, tsgolint checks it without `@types/node` and
> `typescript/no-unsafe-argument` may report; suppress it inline then:
>
> ```ts
> // oxlint-disable-next-line typescript/no-unsafe-argument
> export default node(import.meta.dirname);
> ```

> [!NOTE]
> Spread the config instead of using `extends`. Oxlint's `extends` merges `rules`,
> `plugins`, `options` and `overrides` from imported config objects, but **not** `env` and
> `ignorePatterns`.

> [!NOTE]
> Type-aware linting requires the
> `oxlint-tsgolint` package to be installed in the consuming project:
>
> ```sh
> pnpm add -D oxlint-tsgolint
> ```

## Known gaps (no oxlint equivalent, rules dropped)

- **Ember**: `configs/ember.js`, `eslint-plugin-ember`, template rules and `eslint-plugin-qunit`
  are intentionally not ported (oxlint does not understand `gjs`/`gts`). Ember projects keep
  using `@gossi/config-eslint`.
- **`json` config**: `eslint-plugin-json` has no oxlint counterpart. JSON syntax validation
  and formatting are covered by oxfmt (which formats `json`/`jsonc`/`json5`).
- `no-invalid-this`, `padding-line-between-statements`, `lines-between-class-members` and
  `simple-import-sort/exports` are not implemented by oxlint/oxfmt.
- `unicorn/prevent-abbreviations` is not implemented by oxlint (it was disabled in the
  ESLint config anyway).
- Of the `typescript-eslint` presets, only the rules oxlint v1.89 implements natively are
  ported; exotic typed rules (e.g. `no-deprecated`, `prefer-readonly` tweaks) map where an
  equivalent exists.
- Of `eslint-plugin-n` recommended, only `no-exports-assign` has an oxlint equivalent;
  rules like `no-deprecated-api`, `no-missing-import`, `hashbang`, `no-unpublished-import`
  and the `no-unsupported-features/*` family are not implemented.
- oxlint's defaults differ from ESLint in some places (e.g. the oxc plugin and many
  `correctness` rules are always on; `no-unused-expressions` reports in JS files where the
  ESLint config only enabled it for TypeScript).
