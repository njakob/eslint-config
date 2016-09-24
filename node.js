
module.exports = {
  extends: [
    './lib/node'
  ].map(require.resolve),
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    node: true,
  },
};
