
module.exports = {
  extends: [
    'eslint-config-airbnb-base/rules/best-practices'
  ],
  rules: {
    // Enforce that class methods use `this`
    // http://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': 'off',

    // Enforce a maximum cyclomatic complexity allowed in a program
    // http://eslint.org/docs/rules/complexity
    complexity: 'off',

    // Enforce consistent brace style for all control statements
    // http://eslint.org/docs/rules/curly
    curly: ['error', 'all'],

    // Disallow shorthand type conversions
    // http://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': ['error', {
      boolean: false,
      number: false,
      string: true,
    }],

    // Disallow `var` and named `function` declarations in the global scope
    // http://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 'error',

    // Disallow throwing literals as exceptions
    // http://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': 'off',

    // Disallow unmodified loop conditions
    // http://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'error',
  },
};
