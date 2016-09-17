
module.exports = {
  plugins: [
    'flowtype'
  ],
  settings: {
    'flowtype': {
      'onlyFilesWithFlowAnnotation': true
    }
  },
  rules: {
    // Enforces a particular style for boolean type annotations
    'flowtype/boolean-style': ['warn', 'boolean'],

    // Marks Flow type identifiers as defined
    'flowtype/define-flow-type': 'warn',

    // Enforces consistent use of trailing commas in Object and Tuple
    // annotations
    'flowtype/delimiter-dangle': ['error', 'always'],

    // Enforces consistent spacing within generic type annotation parameters
    'flowtype/generic-spacing': ['error', 'never'],

    // Checks for duplicate properties in Object annotations
    'flowtype/no-dupe-keys': 'error',

    // Warns against weak type annotations `any`, `Object` and `Function`
    'flowtype/no-weak-types': 'off',

    // Requires that all function parameters have type annotations
    'flowtype/require-parameter-type': ['warn', 'always'],

    // Requires that functions have return type annotation
    'flowtype/require-return-type': ['warn', 'always', { 'annotateUndefined': 'never' }],

    // Makes sure that files have a valid `@flow` annotation.
    'flowtype/require-valid-file-annotation': 'error',

    // Enforces consistent use of semicolons after type aliases
    'flowtype/semi': ['error',  'always'],

    // Enforces consistent spacing after the type annotation colon
    'flowtype/space-after-type-colon': ['error', 'always'],

    // Enforces consistent spacing before the opening `<` of generic type
    // annotation parameters
    'flowtype/space-before-generic-bracket': ['error', 'never'],

    // Enforces consistent spacing before the type annotation colon
    'flowtype/space-before-type-colon': ['error', 'never'],

    // Enforces a consistent naming pattern for type aliases
    'flowtype/type-id-match': ['warn', '^([A-Z][a-z0-9]+)+Type$'],

    // Enforces consistent spacing around union and intersection type separators
    'flowtype/union-intersection-spacing': ['error', 'always'],

    // Marks Flow type alias declarations as used
    'flowtype/use-flow-type': 'warn',

    // Checks for simple Flow syntax errors
    'flowtype/valid-syntax': 'error'
  }
};
