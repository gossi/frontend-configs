import node from '@gossi/config-oxlint/node';

const config = node(import.meta.dirname);

export default {
  ...config,
  options: {
    ...config.options,
    reportUnusedDisableDirectives: 'off'
  }
};
