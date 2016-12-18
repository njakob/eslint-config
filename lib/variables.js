
module.exports = {
  extends: [
    'eslint-config-airbnb-base/rules/variables'
  ],
  rules: {
    // Disallow the use of `undefined` as an identifier
    // http://eslint.org/docs/rules/no-undefined
    'no-undefined': 'error',
  },
};
