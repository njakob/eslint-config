
module.exports = {
  extends: [
    './lib/flow'
  ].map(require.resolve),
  parserOptions: {
    sourceType: 'module',
  },
};
