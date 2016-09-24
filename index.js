
module.exports = {
  extends: [
    './lib/strict',
    './lib/best-practices',
    './lib/stylistic',
    './lib/errors',
    './lib/variables'
  ].map(require.resolve),
  parserOptions: {
    sourceType: 'module',
  },
};
