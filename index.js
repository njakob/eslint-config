
module.exports = {
  extends: [
    './rules/strict',
    './rules/best-practices',
    './rules/stylistic',
    './rules/errors',
    './rules/variables',
    './rules/node',
    './rules/es6',
    './rules/flow',
    './rules/import'
  ].map(require.resolve),
  parserOptions: {
    sourceType: 'module'
  }
};
