import { existsSync } from 'node:fs';
import path from 'node:path';

export function hasTypescript(root) {
  return existsSync(path.join(root, 'tsconfig.json'));
}
