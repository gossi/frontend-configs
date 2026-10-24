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

Add your own overrides on top:

```js
// oxlint.config.ts
import node from '@gossi/config-oxlint/node';
import { defineConfig } from 'oxlint';

const config = node(import.meta.dirname);

export default defineConfig({
  ...config,
  rules: { ...config.rules, 'no-console': 'off' }
});
```

## Rule detection

The `node` config is a factory called with the project root (`import.meta.dirname`) because
certain rules can only apply when the project being linted actually supports them:

| Condition (`<root>/…`)           | Effect                                                                |
| -------------------------------- | --------------------------------------------------------------------- |
| no `tsconfig.json`               | `typescript` plugin disabled — **zero** `typescript/*` rules resolve  |
| `tsconfig.json` present          | `typescript` plugin + ported TS rulesets on `**/*.ts` (not `*.d.ts`)  |
| …and `oxlint-tsgolint` installed | `options.typeAware: true` — the type-aware rules run                  |
| …but `oxlint-tsgolint` missing   | type-aware rules stay dormant — instead of failing the whole lint run |

JS-only projects (like the `packages/*` in this repo, which ship hand-written `*.d.ts`
shims) never see a TypeScript rule — not even the syntax-level defaults. Installation
presence is probed with Node's official module resolution
(`createRequire(root/package.json).resolve('oxlint-tsgolint/package.json')`), so hoisted
layouts are followed. Under pnpm's virtual store the probe is evaluated in `oxlint`'s
module context and can see a `oxlint-tsgolint` provided by a sibling workspace package;
in that corner case type-aware rules are enabled while the `oxlint` runtime may still not
locate the executable — install `oxlint-tsgolint` per project that lints TypeScript.

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
> Type-aware linting requires the `oxlint-tsgolint` package to be installed in the
> consuming project — the preset probes it and keeps type-aware rules dormant when it is
> missing:
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
