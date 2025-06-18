const config = {
  allow: ['debug', 'warn', 'error', 'info', 'group', 'groupEnd', 'groupCollapsed']
};

export default {
  name: 'gossi/rules/no-console',
  rules: {
    'no-console': ['error', config]
  }
};
