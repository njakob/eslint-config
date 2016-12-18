
module.exports = {
  extends: [
    'eslint-config-airbnb-base/rules/es6'
  ],
  rules: {
    // Enforces no braces where they can be omitted
    // http://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': ['error', 'as-needed', {
      requireReturnForObjectLiteral: true,
    }],

    // Suggest using Reflect methods where applicable
    // http://eslint.org/docs/rules/prefer-reflect
    'prefer-reflect': 'warn',
  },
};
