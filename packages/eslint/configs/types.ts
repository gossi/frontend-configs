import type { Linter } from 'eslint';

export type ConfigOverride = Linter.ConfigOverride;

export type PartialConfig = Omit<ConfigOverride, 'files' | 'extends'> & {
  // files?: string | string[] | undefined;
  extends?: string[];
};

export interface Options {}
