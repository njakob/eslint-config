
module.exports = {
  extends: [
    'eslint-config-airbnb-base/rules/node'
  ],
  rules: {
    // Require error handling in callbacks
    // http://eslint.org/docs/rules/handle-callback-err
    'handle-callback-err': 'error',
  },
};
