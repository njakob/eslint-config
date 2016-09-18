
module.exports = {
  plugins: [
    'flowtype',
  ],
  settings: {
    'flowtype': {
      'onlyFilesWithFlowAnnotation': true,
    }
  },
  rules: {
    // Enforces a particular style for boolean type annotations
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-boolean-style
    'flowtype/boolean-style': ['warn', 'boolean'],

    // Marks Flow type identifiers as defined
    // https://github.com/gajus/eslint-plugin-flowtype#define-flow-type
    'flowtype/define-flow-type': 'warn',

    // Enforces consistent use of trailing commas in object and tuple
    // annotations
    // https://github.com/gajus/eslint-plugin-flowtype#delimiter-dangle
    'flowtype/delimiter-dangle': ['error', 'always'],

    // Enforces consistent spacing within generic type annotation parameters
    // https://github.com/gajus/eslint-plugin-flowtype#generic-spacing
    'flowtype/generic-spacing': ['error', 'never'],

    // Checks for duplicate properties in object annotations
    // https://github.com/gajus/eslint-plugin-flowtype#no-dupe-keys
    'flowtype/no-dupe-keys': 'error',

    // Warns against weak type annotations `any`, `Object` and `Function`
    // https://github.com/gajus/eslint-plugin-flowtype#no-weak-types
    'flowtype/no-weak-types': 'off',

    // Requires that all function parameters have type annotations
    // https://github.com/gajus/eslint-plugin-flowtype#require-parameter-type
    'flowtype/require-parameter-type': ['warn', 'always'],

    // Requires that functions have return type annotation
    // https://github.com/gajus/eslint-plugin-flowtype#require-return-type
    'flowtype/require-return-type': ['warn', 'always', { 'annotateUndefined': 'never' }],

    // Makes sure that files have a valid `@flow` annotation
    // https://github.com/gajus/eslint-plugin-flowtype#require-valid-file-annotation
    'flowtype/require-valid-file-annotation': 'error',

    // Enforces consistent use of semicolons after type aliases
    // https://github.com/gajus/eslint-plugin-flowtype#semi
    'flowtype/semi': ['error',  'always'],

    // Enforces consistent spacing after the type annotation colon
    // https://github.com/gajus/eslint-plugin-flowtype#space-after-type-colon
    'flowtype/space-after-type-colon': ['error', 'always'],

    // Enforces consistent spacing before the opening `<` of generic type
    // annotation parameters
    // https://github.com/gajus/eslint-plugin-flowtype#space-before-generic-bracket
    'flowtype/space-before-generic-bracket': ['error', 'never'],

    // Enforces consistent spacing before the type annotation colon
    // https://github.com/gajus/eslint-plugin-flowtype#space-before-type-colon
    'flowtype/space-before-type-colon': ['error', 'never'],

    // Enforces a consistent naming pattern for type aliases
    // https://github.com/gajus/eslint-plugin-flowtype#type-id-match
    'flowtype/type-id-match': ['warn', '^([A-Z][a-z0-9]+)+Type$'],

    // Enforces consistent spacing around union and intersection type separators
    // https://github.com/gajus/eslint-plugin-flowtype#union-intersection-spacing
    'flowtype/union-intersection-spacing': ['error', 'always'],

    // Marks Flow type alias declarations as used
    // https://github.com/gajus/eslint-plugin-flowtype#use-flow-type
    'flowtype/use-flow-type': 'warn',

    // Checks for simple Flow syntax errors
    // https://github.com/gajus/eslint-plugin-flowtype#valid-syntax
    'flowtype/valid-syntax': 'error',
  },
};
