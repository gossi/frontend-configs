import { hasBabelConfig, hasDep } from './utils.js';

export function esm(root) {
  const isBabelConfigPresent = hasBabelConfig(root);
  const babelDecoratorsPluginPresent = hasDep(root, '@babel/plugin-proposal-decorators');

  return {
    js: isBabelConfigPresent
      ? {
          ecmaFeatures: { modules: true },
          ecmaVersion: 'latest'
        }
      : {
          ecmaFeatures: { modules: true },
          ecmaVersion: 'latest',
          requireConfigFile: false,
          babelOptions: babelDecoratorsPluginPresent
            ? {
                plugins: [['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }]]
              }
            : {}
        },
    ts: {
      projectService: true,
      tsconfigRootDir: root,
      extraExtensions: ['.gjs', '.gts', '.json']
    }
  };
}
