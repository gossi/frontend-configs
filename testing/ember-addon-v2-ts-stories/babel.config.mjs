export default {
  plugins: [
    '@embroider/addon-dev/template-colocation-plugin',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-class-properties'
  ]
};
