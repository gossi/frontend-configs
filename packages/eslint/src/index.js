import { config as base } from './configs/base.js';
import { config as ember } from './configs/ember.js';
import { config as json } from './configs/json.js';
import { config as node } from './configs/node.js';
import { hasBabelConfig, hasDep, hasTypeModule, hasTypescript } from './utils.js';

export const configs = {
  ember,
  node,
  json,
  base
};

export const utils = {
  hasBabelConfig,
  hasTypescript,
  hasTypeModule,
  hasDep
};
