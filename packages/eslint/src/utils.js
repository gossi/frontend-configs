import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

function loadPkgJson(root) {
  let manifestPath = path.join(root, 'package.json');
  let buffer = readFileSync(manifestPath);

  return JSON.parse(buffer.toString());
}

export function hasBabelConfig(root) {
  return existsSync(path.join(root, 'babel.config.cjs'));
}

export function hasTypescript(root) {
  return existsSync(path.join(root, 'tsconfig.json'));
}

export function hasTypeModule(root) {
  const manifest = loadPkgJson(root);

  return manifest.type === 'module';
}

export function hasDep(root, dependency) {
  const manifest = loadPkgJson(root);

  const deps = [
    ...Object.keys(manifest.dependencies ?? {}),
    Object.keys(manifest.devDependencies ?? {})
  ];

  return deps.includes(dependency);
}
