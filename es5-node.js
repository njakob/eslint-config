
module.exports = {
  extends: [
    './lib/best-practices',
    './lib/errors',
    './lib/node',
    './lib/stylistic',
    './lib/variables',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'module',
  },
};
