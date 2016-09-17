
module.exports = {
  extends: [
    './rules/node',
    './rules/strict',
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
