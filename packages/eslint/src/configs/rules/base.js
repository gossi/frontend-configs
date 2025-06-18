export default {
  name: 'gossi/rules/base',
  rules: {
    // const has misleading safety implications
    // look in to "liberal let"
    'prefer-const': 'off',

    // people should know that no return is undefined in JS
    'getter-return': ['error', { allowImplicit: true }]
  }
};
