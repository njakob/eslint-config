
module.exports = {
  extends: [
    './rules/node'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  rules: {
    strict: 'error',
  }
};
