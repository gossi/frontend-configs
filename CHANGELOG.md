# Changelog

## Release (2025-06-21)

* @gossi/config-eslint 1.1.0 (minor)
* @gossi/config-prettier 1.0.1 (patch)

#### :rocket: Enhancement
* `@gossi/config-eslint`
  * [#1286](https://github.com/gossi/frontend-configs/pull/1286) Update deps ([@gossi](https://github.com/gossi))

#### :bug: Bug Fix
* `@gossi/config-prettier`
  * [#1290](https://github.com/gossi/frontend-configs/pull/1290) Import Plugins for proper resolving ([@gossi](https://github.com/gossi))
* `@gossi/config-eslint`
  * [#1286](https://github.com/gossi/frontend-configs/pull/1286) Update deps ([@gossi](https://github.com/gossi))

#### Committers: 1
- Thomas Gossmann ([@gossi](https://github.com/gossi))

## Release (2025-06-19)

* @gossi/config-eslint 1.0.0 (major)
* @gossi/config-postcss 1.0.0 (major)
* @gossi/config-prettier 1.0.0 (major)
* @gossi/config-stylelint 1.0.1 (major)
* @gossi/config-targets 1.0.0 (major)
* @gossi/config-template-lint 1.0.0 (major)

#### :boom: Breaking Change
* `@gossi/config-eslint`, `@gossi/config-postcss`, `@gossi/config-prettier`, `@gossi/config-stylelint`, `@gossi/config-targets`, `@gossi/config-template-lint`
  * [#1272](https://github.com/gossi/frontend-configs/pull/1272) Convert configs to ESM ([@gossi](https://github.com/gossi))
  * [#1268](https://github.com/gossi/frontend-configs/pull/1268) Upgrade to eslint v9 ([@gossi](https://github.com/gossi))

#### :rocket: Enhancement
* `@gossi/config-eslint`, `@gossi/config-postcss`, `@gossi/config-prettier`, `@gossi/config-stylelint`, `@gossi/config-targets`, `@gossi/config-template-lint`
  * [#1281](https://github.com/gossi/frontend-configs/pull/1281) Recommended configs from `eslint-plugin-n` and `eslint-plugin-qunit` ([@gossi](https://github.com/gossi))
  * [#1275](https://github.com/gossi/frontend-configs/pull/1275) Remove unused peer deps ([@gossi](https://github.com/gossi))
  * [#1271](https://github.com/gossi/frontend-configs/pull/1271) Extend and export base config ([@gossi](https://github.com/gossi))
  * [#1268](https://github.com/gossi/frontend-configs/pull/1268) Upgrade to eslint v9 ([@gossi](https://github.com/gossi))
* `@gossi/config-postcss`
  * [#1278](https://github.com/gossi/frontend-configs/pull/1278) Remove `@parcel/css` ([@gossi](https://github.com/gossi))
  * [#1273](https://github.com/gossi/frontend-configs/pull/1273) Remove unused postcss plugins ([@gossi](https://github.com/gossi))

#### :bug: Bug Fix
* `@gossi/config-eslint`
  * [#1270](https://github.com/gossi/frontend-configs/pull/1270) Switch to `lilconfig` ([@gossi](https://github.com/gossi))

#### :memo: Documentation
* `@gossi/config-eslint`
  * [#1269](https://github.com/gossi/frontend-configs/pull/1269) Eslint readme ([@gossi](https://github.com/gossi))

#### :house: Internal
* `@gossi/config-stylelint`
  * [#1280](https://github.com/gossi/frontend-configs/pull/1280) Update release-plan configs ([@gossi](https://github.com/gossi))
* Other
  * [#1279](https://github.com/gossi/frontend-configs/pull/1279) Add ember vite app as test ([@gossi](https://github.com/gossi))
  * [#1277](https://github.com/gossi/frontend-configs/pull/1277) Remove `concurrently` ([@gossi](https://github.com/gossi))
  * [#1276](https://github.com/gossi/frontend-configs/pull/1276) Update to `ember-qunit@9` ([@gossi](https://github.com/gossi))
  * [#1274](https://github.com/gossi/frontend-configs/pull/1274) Testing: Ember Addon with vite + tests ([@gossi](https://github.com/gossi))
* `@gossi/config-eslint`
  * [#1270](https://github.com/gossi/frontend-configs/pull/1270) Switch to `lilconfig` ([@gossi](https://github.com/gossi))

#### Committers: 1
- Thomas Gossmann ([@gossi](https://github.com/gossi))

## Release (2025-01-18)

@gossi/config-eslint 0.14.0 (minor)
@gossi/config-postcss 0.11.0 (minor)
@gossi/config-prettier 0.10.0 (minor)
@gossi/config-stylelint 1.0.0 (major)
@gossi/config-targets 0.10.0 (minor)
@gossi/config-template-lint 0.9.0 (minor)

#### :boom: Breaking Change
* `@gossi/config-stylelint`, `ember-addon-v2-gts-stories`, `ember-addon-v2-gts`, `ember-addon-v2-ts-stories`, `ember-addon-v2-ts`, `ember-app-gts`, `ember-app-ts`
  * [#1075](https://github.com/gossi/frontend-configs/pull/1075) Switch `stylelint` to ESM config ([@gossi](https://github.com/gossi))

#### :rocket: Enhancement
* `@gossi/config-eslint`, `@gossi/config-postcss`, `@gossi/config-prettier`, `@gossi/config-stylelint`, `@gossi/config-targets`, `@gossi/config-template-lint`, `@my-blog/core`, `ember-addon-v2-gts-stories`, `ember-addon-v2-gts`, `ember-addon-v2-ts-stories`, `ember-addon-v2-ts`, `ember-app-gts`, `ember-app-ts`
  * [#1074](https://github.com/gossi/frontend-configs/pull/1074) upgrade node to v20.* ([@gossi](https://github.com/gossi))
* `@gossi/config-eslint`
  * [#958](https://github.com/gossi/frontend-configs/pull/958) Migrate from `eslint-plugin-i` to `eslint-plugin-import-x` ([@gossi](https://github.com/gossi))

#### :house: Internal
* [#959](https://github.com/gossi/frontend-configs/pull/959) Enhance renovate config ([@gossi](https://github.com/gossi))

#### Committers: 1
- Thomas Gossmann ([@gossi](https://github.com/gossi))

## Release (2024-10-20)

@gossi/config-eslint 0.13.0 (minor)
@gossi/config-postcss 0.10.1 (patch)
@gossi/config-prettier 0.9.1 (patch)
@gossi/config-stylelint 0.9.1 (patch)
@gossi/config-targets 0.9.1 (patch)
@gossi/config-template-lint 0.8.1 (patch)

#### :rocket: Enhancement
* `@gossi/config-eslint`, `@my-blog/core`, `ember-addon-v2-gts-stories`, `ember-addon-v2-gts`, `ember-addon-v2-ts-stories`, `ember-addon-v2-ts`, `ember-app-gts`, `ember-app-ts`
  * [#956](https://github.com/gossi/frontend-configs/pull/956) Upgrade to `@typescript-eslint` v8 ([@gossi](https://github.com/gossi))
* Other
  * [#848](https://github.com/gossi/frontend-configs/pull/848) Shared renovate configs ([@gossi](https://github.com/gossi))

#### :house: Internal
* `@gossi/config-eslint`, `@gossi/config-postcss`, `@gossi/config-prettier`, `@gossi/config-stylelint`, `@gossi/config-targets`, `@gossi/config-template-lint`, `@my-blog/core`, `ember-addon-v2-gts-stories`, `ember-addon-v2-gts`, `ember-addon-v2-ts-stories`, `ember-addon-v2-ts`, `ember-app-gts`, `ember-app-ts`
  * [#846](https://github.com/gossi/frontend-configs/pull/846) From volta to corepack ([@gossi](https://github.com/gossi))

#### Committers: 1
- Thomas Gossmann ([@gossi](https://github.com/gossi))

## Release (2024-07-10)

@gossi/config-prettier 0.9.0 (minor)

#### :rocket: Enhancement
* `@gossi/config-prettier`, `ember-addon-v2-gts`, `ember-app-gts`
  * [#807](https://github.com/gossi/frontend-configs/pull/807) Use double quotes in `<template>` for glimmer js/ts files ([@gossi](https://github.com/gossi))

#### Committers: 1
- Thomas Gossmann ([@gossi](https://github.com/gossi))

## Release (2024-05-31)

@gossi/config-eslint 0.12.0 (minor)

#### :rocket: Enhancement
* `@gossi/config-eslint`
  * [#753](https://github.com/gossi/frontend-configs/pull/753) Update `eslint-plugin-n` to `v17` ([@gossi](https://github.com/gossi))

#### Committers: 1
- Thomas Gossmann ([@gossi](https://github.com/gossi))

## Release (2024-05-31)

@gossi/config-eslint 0.11.0 (minor)

#### :rocket: Enhancement
* `@gossi/config-eslint`
  * [#752](https://github.com/gossi/frontend-configs/pull/752) Update peer dep to include `eslint-plugin-ember@12` ([@gossi](https://github.com/gossi))
* Other
  * [#746](https://github.com/gossi/frontend-configs/pull/746) Renovate preset ([@gossi](https://github.com/gossi))

#### Committers: 1
- Thomas Gossmann ([@gossi](https://github.com/gossi))

## Release (2024-04-12)

@gossi/config-eslint 0.10.0 (minor)
@gossi/config-postcss 0.10.0 (minor)

#### :rocket: Enhancement
* `@gossi/config-eslint`
  * [#682](https://github.com/gossi/frontend-configs/pull/682) Allow arrow shorthand functions ([@gossi](https://github.com/gossi))
* `@gossi/config-postcss`
  * [#680](https://github.com/gossi/frontend-configs/pull/680) Update dependency postcss-preset-env to ^9.5.5 ([@renovate[bot]](https://github.com/apps/renovate))

#### :house: Internal
* `ember-addon-v2-gts`, `ember-addon-v2-ts`
  * [#681](https://github.com/gossi/frontend-configs/pull/681) Update dependency rollup to ^4.14.2 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#678](https://github.com/gossi/frontend-configs/pull/678) Update dependency @embroider/addon-dev to ^4.3.1 ([@renovate[bot]](https://github.com/apps/renovate))
* `ember-addon-v2-gts`, `ember-app-gts`
  * [#679](https://github.com/gossi/frontend-configs/pull/679) Update dependency @storybook/types to ^8.0.8 ([@renovate[bot]](https://github.com/apps/renovate))
* `@my-blog/core`, `ember-addon-v2-gts`, `ember-addon-v2-ts`, `ember-app-gts`, `ember-app-ts`
  * [#676](https://github.com/gossi/frontend-configs/pull/676) Update Node.js to v20.12.2 ([@renovate[bot]](https://github.com/apps/renovate))
* `@gossi/config-eslint`, `@my-blog/core`, `ember-addon-v2-gts`, `ember-addon-v2-ts`, `ember-app-gts`, `ember-app-ts`
  * [#675](https://github.com/gossi/frontend-configs/pull/675) Update dependency typescript to ^5.4.5 ([@renovate[bot]](https://github.com/apps/renovate))

#### Committers: 1
- Thomas Gossmann ([@gossi](https://github.com/gossi))

## Release (2024-04-09)

@gossi/config-eslint 0.9.0 (minor)
@gossi/config-postcss 0.9.0 (minor)
@gossi/config-stylelint 0.9.0 (minor)
@gossi/config-targets 0.9.0 (minor)

#### :rocket: Enhancement
* `@gossi/config-stylelint`
  * [#674](https://github.com/gossi/frontend-configs/pull/674) Switch import notation to string ([@gossi](https://github.com/gossi))
  * [#673](https://github.com/gossi/frontend-configs/pull/673) Using `stylelint-config-clean-order` for ordering CSS properties ([@gossi](https://github.com/gossi))
* `@gossi/config-eslint`, `ember-addon-v2-gts`, `ember-addon-v2-ts`, `ember-app-gts`, `ember-app-ts`
  * [#672](https://github.com/gossi/frontend-configs/pull/672) Re-activate typescript rules ([@gossi](https://github.com/gossi))
* `@gossi/config-eslint`, `@gossi/config-postcss`, `@gossi/config-targets`, `ember-addon-v2-gts`, `ember-addon-v2-ts`, `ember-app-gts`, `ember-app-ts`
  * [#566](https://github.com/gossi/frontend-configs/pull/566) Update Lint Dependencies (major) ([@renovate[bot]](https://github.com/apps/renovate))

#### :house: Internal
* `@my-blog/core`
  * [#671](https://github.com/gossi/frontend-configs/pull/671) Update dependency @swc/core to ^1.4.13 ([@renovate[bot]](https://github.com/apps/renovate))
* `ember-app-gts`, `ember-app-ts`
  * [#670](https://github.com/gossi/frontend-configs/pull/670) Update dependency @glimmer/validator to ^0.92.0 ([@renovate[bot]](https://github.com/apps/renovate))
* `ember-addon-v2-gts`
  * [#660](https://github.com/gossi/frontend-configs/pull/660) Update dependency rollup to ^4.14.1 ([@renovate[bot]](https://github.com/apps/renovate))
* `ember-app-gts`
  * [#253](https://github.com/gossi/frontend-configs/pull/253) Update dependency ember-cli to v5 ([@renovate[bot]](https://github.com/apps/renovate))
* `@gossi/config-postcss`, `@gossi/config-stylelint`
  * [#669](https://github.com/gossi/frontend-configs/pull/669) Use `workspace:*` protocol ([@gossi](https://github.com/gossi))
* Other
  * [#667](https://github.com/gossi/frontend-configs/pull/667) Lock `eslint` ([@gossi](https://github.com/gossi))
* `@gossi/config-eslint`, `ember-app-gts`, `ember-app-ts`
  * [#666](https://github.com/gossi/frontend-configs/pull/666) Update Type Definitions ([@renovate[bot]](https://github.com/apps/renovate))

#### Committers: 1
- Thomas Gossmann ([@gossi](https://github.com/gossi))

## Release (2024-04-07)

@gossi/config-eslint 0.8.0 (minor)
@gossi/config-postcss 0.8.0 (minor)
@gossi/config-prettier 0.8.0 (minor)
@gossi/config-stylelint 0.8.0 (minor)
@gossi/config-targets 0.8.0 (minor)
@gossi/config-template-lint 0.8.0 (minor)

#### :rocket: Enhancement
* `@gossi/config-stylelint`
  * [#662](https://github.com/gossi/frontend-configs/pull/662) Update stylelint ([@gossi](https://github.com/gossi))
* `@gossi/config-template-lint`
  * [#661](https://github.com/gossi/frontend-configs/pull/661) Update `ember-template-lint` to v6 ([@gossi](https://github.com/gossi))
* `ember-app-gts`
  * [#441](https://github.com/gossi/frontend-configs/pull/441) Update dependency ember-template-imports to v4 ([@renovate[bot]](https://github.com/apps/renovate))
* `@gossi/config-eslint`, `@my-blog/core`, `ember-addon-v2-gts`, `ember-addon-v2-ts`, `ember-app-gts`, `ember-app-ts`
  * [#308](https://github.com/gossi/frontend-configs/pull/308) Find tsconfig for TS projects ([@gossi](https://github.com/gossi))
  * [#657](https://github.com/gossi/frontend-configs/pull/657) Update dependency typescript to ^5.4.4 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#630](https://github.com/gossi/frontend-configs/pull/630) Update dependency typescript to ^5.4.3 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#612](https://github.com/gossi/frontend-configs/pull/612) Update dependency typescript to ^5.4.2 ([@renovate[bot]](https://github.com/apps/renovate))
* `ember-addon-v2-gts`, `ember-addon-v2-ts`
  * [#659](https://github.com/gossi/frontend-configs/pull/659) Update dependency rollup to ^4.14.1 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#652](https://github.com/gossi/frontend-configs/pull/652) Update dependency rollup to ^4.14.0 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#646](https://github.com/gossi/frontend-configs/pull/646) Update dependency rollup to ^4.13.2 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#645](https://github.com/gossi/frontend-configs/pull/645) Update dependency rollup to ^4.13.1 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#617](https://github.com/gossi/frontend-configs/pull/617) Update dependency rollup to ^4.13.0 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#609](https://github.com/gossi/frontend-configs/pull/609) Update dependency rollup to ^4.12.1 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#591](https://github.com/gossi/frontend-configs/pull/591) Update dependency rollup to ^4.12.0 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#588](https://github.com/gossi/frontend-configs/pull/588) Update dependency rollup to ^4.11.0 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#582](https://github.com/gossi/frontend-configs/pull/582) Update dependency rollup to ^4.10.0 ([@renovate[bot]](https://github.com/apps/renovate))
* `ember-app-gts`, `ember-app-ts`
  * [#658](https://github.com/gossi/frontend-configs/pull/658) Update dependency @glimmer/validator to ^0.91.2 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#647](https://github.com/gossi/frontend-configs/pull/647) Update dependency @glimmer/validator to ^0.91.1 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#639](https://github.com/gossi/frontend-configs/pull/639) Update dependency @glimmer/validator to ^0.91.0 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#635](https://github.com/gossi/frontend-configs/pull/635) Update dependency @glimmer/validator to ^0.90.1 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#616](https://github.com/gossi/frontend-configs/pull/616) Update dependency ember-page-title to ^8.2.3 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#614](https://github.com/gossi/frontend-configs/pull/614) Update dependency @glimmer/validator to ^0.89.0 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#607](https://github.com/gossi/frontend-configs/pull/607) Update dependency ember-cli-typescript to ^5.3.0 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#597](https://github.com/gossi/frontend-configs/pull/597) Update dependency @ember/optional-features to ^2.1.0 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#593](https://github.com/gossi/frontend-configs/pull/593) Update dependency qunit to ^2.20.1 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#589](https://github.com/gossi/frontend-configs/pull/589) Update dependency ember-page-title to ^8.2.2 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#585](https://github.com/gossi/frontend-configs/pull/585) Update dependency @ember/test-helpers to ^3.3.0 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#584](https://github.com/gossi/frontend-configs/pull/584) Update Testing Dependencies (major) ([@renovate[bot]](https://github.com/apps/renovate))
* `@my-blog/core`
  * [#656](https://github.com/gossi/frontend-configs/pull/656) Update dependency @swc/core to ^1.4.12 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#650](https://github.com/gossi/frontend-configs/pull/650) Update dependency @swc/cli to ^0.3.12 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#640](https://github.com/gossi/frontend-configs/pull/640) Update dependency @swc/core to ^1.4.11 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#620](https://github.com/gossi/frontend-configs/pull/620) Update dependency @swc/core to ^1.4.8 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#618](https://github.com/gossi/frontend-configs/pull/618) Update dependency @swc/core to ^1.4.7 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#613](https://github.com/gossi/frontend-configs/pull/613) Update dependency @swc/core to ^1.4.6 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#610](https://github.com/gossi/frontend-configs/pull/610) Update dependency @swc/core to ^1.4.5 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#605](https://github.com/gossi/frontend-configs/pull/605) Update dependency @swc/core to ^1.4.4 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#601](https://github.com/gossi/frontend-configs/pull/601) Update dependency @swc/cli to ^0.3.10 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#594](https://github.com/gossi/frontend-configs/pull/594) Update dependency @swc/core to ^1.4.2 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#586](https://github.com/gossi/frontend-configs/pull/586) Update dependency @swc/core to ^1.4.1 ([@renovate[bot]](https://github.com/apps/renovate))
* `@gossi/config-prettier`
  * [#655](https://github.com/gossi/frontend-configs/pull/655) Update dependency prettier-plugin-ember-template-tag to ^2.0.2 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#621](https://github.com/gossi/frontend-configs/pull/621) Update dependency prettier-plugin-ember-template-tag to ^2.0.1 ([@renovate[bot]](https://github.com/apps/renovate))
* `@gossi/config-eslint`, `ember-addon-v2-gts`, `ember-addon-v2-ts`, `ember-app-gts`, `ember-app-ts`
  * [#654](https://github.com/gossi/frontend-configs/pull/654) Update babel monorepo to ^7.24.4 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#627](https://github.com/gossi/frontend-configs/pull/627) Update babel monorepo to ^7.24.3 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#625](https://github.com/gossi/frontend-configs/pull/625) Update babel monorepo to ^7.24.1 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#602](https://github.com/gossi/frontend-configs/pull/602) Update babel monorepo to ^7.24.0 ([@renovate[bot]](https://github.com/apps/renovate))
* `@my-blog/core`, `ember-addon-v2-gts`, `ember-addon-v2-ts`, `ember-app-gts`, `ember-app-ts`
  * [#653](https://github.com/gossi/frontend-configs/pull/653) Update Node.js to v20.12.1 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#641](https://github.com/gossi/frontend-configs/pull/641) Update Node.js to v20.12.0 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#587](https://github.com/gossi/frontend-configs/pull/587) Update Node.js to v20.11.1 ([@renovate[bot]](https://github.com/apps/renovate))
* `@gossi/config-postcss`
  * [#651](https://github.com/gossi/frontend-configs/pull/651) Update dependency postcss-preset-env to ^9.5.4 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#648](https://github.com/gossi/frontend-configs/pull/648) Update dependency postcss-preset-env to ^9.5.3 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#629](https://github.com/gossi/frontend-configs/pull/629) Update dependency postcss to ^8.4.38 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#626](https://github.com/gossi/frontend-configs/pull/626) Update dependency postcss to ^8.4.37 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#624](https://github.com/gossi/frontend-configs/pull/624) Update dependency postcss to ^8.4.36 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#622](https://github.com/gossi/frontend-configs/pull/622) Update dependency postcss-preset-env to ^9.5.2 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#619](https://github.com/gossi/frontend-configs/pull/619) Update dependency postcss-preset-env to ^9.5.1 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#611](https://github.com/gossi/frontend-configs/pull/611) Update dependency postcss-preset-env to ^9.5.0 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#596](https://github.com/gossi/frontend-configs/pull/596) Update dependency postcss-preset-env to ^9.4.0 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#580](https://github.com/gossi/frontend-configs/pull/580) Update dependency postcss to ^8.4.35 ([@renovate[bot]](https://github.com/apps/renovate))
* `@gossi/config-eslint`
  * [#649](https://github.com/gossi/frontend-configs/pull/649) Update dependency @types/node to ^20.12.2 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#644](https://github.com/gossi/frontend-configs/pull/644) Update dependency @tsconfig/strictest to ^2.0.5 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#643](https://github.com/gossi/frontend-configs/pull/643) Update dependency @tsconfig/node18 to ^18.2.4 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#637](https://github.com/gossi/frontend-configs/pull/637) Update dependency @tsconfig/strictest to ^2.0.4 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#636](https://github.com/gossi/frontend-configs/pull/636) Update dependency @tsconfig/node18 to ^18.2.3 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#623](https://github.com/gossi/frontend-configs/pull/623) Update dependency @types/node to ^20.11.28 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#615](https://github.com/gossi/frontend-configs/pull/615) Update dependency @types/node to ^20.11.25 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#592](https://github.com/gossi/frontend-configs/pull/592) Update dependency @types/node to ^20.11.19 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#583](https://github.com/gossi/frontend-configs/pull/583) Update dependency @types/node to ^20.11.17 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#581](https://github.com/gossi/frontend-configs/pull/581) Update dependency @tsconfig/strictest to ^2.0.3 ([@renovate[bot]](https://github.com/apps/renovate))
* `ember-addon-v2-gts`, `ember-addon-v2-ts`, `ember-app-gts`, `ember-app-ts`
  * [#642](https://github.com/gossi/frontend-configs/pull/642) Update dependency @tsconfig/ember to ^3.0.6 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#608](https://github.com/gossi/frontend-configs/pull/608) Update dependency @tsconfig/ember to ^3.0.5 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#604](https://github.com/gossi/frontend-configs/pull/604) Update dependency ember-source to v5.7.0 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#600](https://github.com/gossi/frontend-configs/pull/600) Update dependency @tsconfig/ember to ^3.0.4 ([@renovate[bot]](https://github.com/apps/renovate))
* `@gossi/config-eslint`, `ember-app-gts`, `ember-app-ts`
  * [#638](https://github.com/gossi/frontend-configs/pull/638) Update Type Definitions ([@renovate[bot]](https://github.com/apps/renovate))
  * [#603](https://github.com/gossi/frontend-configs/pull/603) Update Type Definitions ([@renovate[bot]](https://github.com/apps/renovate))
  * [#598](https://github.com/gossi/frontend-configs/pull/598) Update Type Definitions ([@renovate[bot]](https://github.com/apps/renovate))
* `ember-addon-v2-gts`, `ember-app-gts`
  * [#634](https://github.com/gossi/frontend-configs/pull/634) Update dependency @glint/template to ^1.4.0 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#633](https://github.com/gossi/frontend-configs/pull/633) Update dependency @glint/environment-ember-template-imports to ^1.4.0 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#632](https://github.com/gossi/frontend-configs/pull/632) Update dependency @glint/environment-ember-loose to ^1.4.0 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#631](https://github.com/gossi/frontend-configs/pull/631) Update dependency @glint/core to ^1.4.0 ([@renovate[bot]](https://github.com/apps/renovate))
* `ember-addon-v2-gts`, `ember-app-gts`, `ember-app-ts`
  * [#628](https://github.com/gossi/frontend-configs/pull/628) Update dependency webpack to ^5.91.0 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#595](https://github.com/gossi/frontend-configs/pull/595) Update dependency webpack to ^5.90.3 ([@renovate[bot]](https://github.com/apps/renovate))
  * [#590](https://github.com/gossi/frontend-configs/pull/590) Update dependency webpack to ^5.90.2 ([@renovate[bot]](https://github.com/apps/renovate))
* `ember-app-ts`
  * [#606](https://github.com/gossi/frontend-configs/pull/606) Update dependency ember-cli to ~5.7.0 ([@renovate[bot]](https://github.com/apps/renovate))
* `@gossi/config-eslint`, `@gossi/config-postcss`, `@gossi/config-prettier`, `@gossi/config-stylelint`, `@gossi/config-targets`, `@gossi/config-template-lint`, `@my-blog/core`, `ember-addon-v2-gts`, `ember-addon-v2-ts`, `ember-app-gts`, `ember-app-ts`
  * [#599](https://github.com/gossi/frontend-configs/pull/599) Update Lint Dependencies ([@renovate[bot]](https://github.com/apps/renovate))

#### :house: Internal
* `@gossi/config-postcss`, `@gossi/config-prettier`, `@gossi/config-stylelint`, `@gossi/config-targets`, `@gossi/config-template-lint`, `@my-blog/core`, `ember-addon-v2-gts`, `ember-addon-v2-ts`, `ember-app-gts`, `ember-app-ts`
  * [#663](https://github.com/gossi/frontend-configs/pull/663) Install `release-plan` ([@gossi](https://github.com/gossi))

#### Committers: 1
- Thomas Gossmann ([@gossi](https://github.com/gossi))







## v0.7.0 (2024-02-06)

#### :rocket: Enhancement
* `eslint`
  * [#579](https://github.com/gossi/frontend-configs/pull/579) Extend Naming Conventions ([@gossi](https://github.com/gossi))

#### Committers: 1
- Thomas Gossmann ([@gossi](https://github.com/gossi))

## v0.6.0 (2023-08-12)

#### :rocket: Enhancement
* `stylelint`
  * [#334](https://github.com/gossi/frontend-configs/pull/334) Remove deprecated `stylelint-config-prettier` dependency ([@gossi](https://github.com/gossi))

#### :bug: Bug Fix
* `eslint`
  * [#332](https://github.com/gossi/frontend-configs/pull/332) Fix n/no-missing-import for Typescript ([@gossi](https://github.com/gossi))

#### Committers: 1
- Thomas Gossmann ([@gossi](https://github.com/gossi))

## v0.5.1 (2023-08-09)

#### :rocket: Enhancement
* `prettier`, `template-lint`
  * [#331](https://github.com/gossi/frontend-configs/pull/331) Update `ember-template-lint-plugin-prettier@5` ([@gossi](https://github.com/gossi))

#### Committers: 1
- Thomas Gossmann ([@gossi](https://github.com/gossi))

## v0.5.0 (2023-07-26)

#### :boom: Breaking Change
* `eslint`, `prettier`
  * [#312](https://github.com/gossi/frontend-configs/pull/312) Update to prettier@v3 ([@gossi](https://github.com/gossi))

#### :house: Internal
* [#314](https://github.com/gossi/frontend-configs/pull/314) Run ember tests on CI ([@gossi](https://github.com/gossi))
* [#313](https://github.com/gossi/frontend-configs/pull/313) Update release-it to v16 ([@gossi](https://github.com/gossi))

#### Committers: 1
- Thomas Gossmann ([@gossi](https://github.com/gossi))

## v0.4.1 (2023-07-08)

#### :bug: Bug Fix
* `eslint`
  * [#285](https://github.com/gossi/frontend-configs/pull/285) Make plugin configs optional when not present ([@gossi](https://github.com/gossi))

#### :house: Internal
* [#288](https://github.com/gossi/frontend-configs/pull/288) lock release-it (until plugins are updated) ([@gossi](https://github.com/gossi))

#### Committers: 1
- Thomas Gossmann ([@gossi](https://github.com/gossi))

## v0.4.0 (2023-06-12)

#### :rocket: Enhancement
* `eslint`, `postcss`, `prettier`, `stylelint`, `targets`, `template-lint`
  * [#167](https://github.com/gossi/frontend-configs/pull/167) Next version of eslint config ([@gossi](https://github.com/gossi))

#### Committers: 1
- Thomas Gossmann ([@gossi](https://github.com/gossi))

## v0.3.1 (2023-02-06)

## Release v0.3.0 (2022-12-20)

#### :rocket: Enhancement
* `template-lint`
  * [#66](https://github.com/gossi/frontend-configs/pull/66) Add `ember-template-lint-plugin-prettier` + config ([@gossi](https://github.com/gossi))

#### :bug: Bug Fix
* `eslint`
  * [#67](https://github.com/gossi/frontend-configs/pull/67) Treat `rollup.config.js` as module ([@gossi](https://github.com/gossi))
* `template-lint`
  * [#65](https://github.com/gossi/frontend-configs/pull/65) Set proper version for `ember-template-lint` in `peerDependencies` ([@gossi](https://github.com/gossi))

#### Committers: 1
- Thomas Gossmann ([@gossi](https://github.com/gossi))

## Release v0.2.0 (2022-12-18)

#### :boom: Breaking Change
* `eslint`, `postcss`, `prettier`, `stylelint`, `targets`, `template-lint`
  * [#38](https://github.com/gossi/frontend-configs/pull/38) Drop Node@14 ([@gossi](https://github.com/gossi))

#### :rocket: Enhancement
* `stylelint`
  * [#41](https://github.com/gossi/frontend-configs/pull/41) Make Stylelint configurable ([@gossi](https://github.com/gossi))
* `eslint`
  * [#40](https://github.com/gossi/frontend-configs/pull/40) Property names for helper and modifier signatures ([@gossi](https://github.com/gossi))
  * [#39](https://github.com/gossi/frontend-configs/pull/39) Improve Peer Dependencies ([@gossi](https://github.com/gossi))
  * [#37](https://github.com/gossi/frontend-configs/pull/37) Better detect storybook ([@gossi](https://github.com/gossi))

#### :house: Internal
* [#43](https://github.com/gossi/frontend-configs/pull/43) Change renovate strategy ([@gossi](https://github.com/gossi))
* [#42](https://github.com/gossi/frontend-configs/pull/42) Start Changelog ([@gossi](https://github.com/gossi))

#### Committers: 1
- Thomas Gossmann ([@gossi](https://github.com/gossi))

## Release v0.1.4 (2022-09-18)

Elder release without changelog
