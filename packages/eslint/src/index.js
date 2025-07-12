import base from './configs/base.js';
import ember from './configs/ember.js';
import json from './configs/json.js';
import node from './configs/node.js';
import { hasBabelConfig, hasDep, hasTypeModule, hasTypescript } from './utils.js';

/**
 * @deprecated import from `@gossi/config-eslint/*` directly
 */
export const configs = {
  /** @deprecated import from `@gossi/config-eslint/ember` directly */
  ember,
  /** @deprecated import from `@gossi/config-eslint/node` directly */
  node,
  /** @deprecated import from `@gossi/config-eslint/json` directly */
  json,
  /** @deprecated import from `@gossi/config-eslint/base` directly */
  base
};

export const utils = {
  hasBabelConfig,
  hasTypescript,
  hasTypeModule,
  hasDep
};
