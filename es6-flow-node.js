
module.exports = {
  extends: [
    './lib/best-practices',
    './lib/errors',
    './lib/es6',
    './lib/flow',
    './lib/imports',
    './lib/node',
    './lib/strict',
    './lib/stylistic',
    './lib/variables',
  ].map(require.resolve),
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
};
