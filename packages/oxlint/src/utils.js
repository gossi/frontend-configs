import { existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';

export function hasTypescript(root) {
  return existsSync(path.join(root, 'tsconfig.json'));
}

/**
 * Whether `oxlint-tsgolint` — the optional peer dependency that provides type-aware
 * linting — is installed for the project.
 *
 * Uses Node's official module resolution anchored at the project root, so it follows
 * regular dependency lookup (direct installs and hoisted layouts alike).
 *
 * NOTE: `oxlint-tsgolint` is a bin wrapper without a JS entry point, so the documented
 * package-presence probe is its `package.json` subpath.
 *
 * @param {string} root the project root (the directory of the consumer's config file)
 */
export function hasTsgolint(root) {
  try {
    createRequire(path.resolve(root, 'package.json')).resolve('oxlint-tsgolint/package.json');

    return true;
  } catch {
    return false;
  }
}
