
module.exports = {
  extends: [
    './lib/best-practices',
    './lib/errors',
    './lib/es6',
    './lib/imports',
    './lib/strict',
    './lib/stylistic',
    './lib/variables',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
};
