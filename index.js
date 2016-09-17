
module.exports = {
  extends: [
    './rules/strict',
    './rules/errors',
    './rules/variables',
    './rules/node',
    './rules/flow',
    './rules/import'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  rules: {
    strict: 'error',
  }
};
