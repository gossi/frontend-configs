export default {
  name: 'gossi/rules/ember/typescript',
  rules: {
    // `void` is a valid type for `Return` signatures, yet TS doesn't recognize
    // that as proper return types.
    '@typescript-eslint/no-invalid-void-type': 'off'
  }
};
