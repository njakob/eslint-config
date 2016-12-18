
module.exports = {
  extends: [
    './lib/best-practices',
    './lib/errors',
    './lib/es6',
    './lib/flow',
    './lib/imports',
    './lib/node',
    './lib/react',
    './lib/strict',
    './lib/stylistic',
    './lib/variables',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
};
