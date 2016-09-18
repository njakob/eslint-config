
module.exports = {
  env: {
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    // Enforces no braces where they can be omitted
    // http://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': ['error', 'as-needed', {
      requireReturnForObjectLiteral: true,
    }],

    // Require parentheses in arrow function arguments
    // http://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'always'],

    // Require space before/after arrow function's arrow
    // http://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': ['error', { before: true, after: true }],

    // Verify `super()` callings in constructors
    // http://eslint.org/docs/rules/constructor-super
    'constructor-super': 'error',

    // Enforce the spacing around the * in generator functions
    // http://eslint.org/docs/rules/generator-star-spacing
    'generator-star-spacing': ['error', { before: false, after: true }],

    // Disallow modifying variables of class declarations
    // http://eslint.org/docs/rules/no-class-assign
    'no-class-assign': 'error',

    // Disallow arrow functions where they could be confused with comparisons
    // http://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': ['error', { allowParens: true }],

    // Disallow modifying variables that are declared using const
    // http://eslint.org/docs/rules/no-const-assign
    'no-const-assign': 'error',

    // Disallow duplicate class members
    // http://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': 'error',

    // Disallow importing from the same path more than once
    // http://eslint.org/docs/rules/no-duplicate-imports
    'no-duplicate-imports': 'error',

    // Disallow symbol constructor
    // http://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol': 'error',

    // Disallow specific imports
    // http://eslint.org/docs/rules/no-restricted-imports
    'no-restricted-imports': 'off',

    // Disallow to use `thi`or `super` before `super()` calling in constructors
    // http://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': 'error',

    // Disallow useless computed property keys
    // http://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': 'error',

    // Disallow unnecessary constructor
    // http://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 'error',

    // Disallow renaming `import`, `export` and destructured assignments to the
    // same name
    // http://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': ['error', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    }],

    // Require let or const instead of var
    // http://eslint.org/docs/rules/no-var
    'no-var': 'error',

    // Require method and property shorthand syntax for object literals
    // http://eslint.org/docs/rules/object-shorthand
    'object-shorthand': ['error', 'always', {
      ignoreConstructors: false,
      avoidQuotes: true,
    }],

    // Suggest using arrow functions as callbacks
    // http://eslint.org/docs/rules/prefer-arrow-callback
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    }],

    // Suggest using of const declaration for variables that are never modified
    // after declared
    // http://eslint.org/docs/rules/prefer-const
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    }],

    // Disallow `parseInt()` in favor of binary, octal, and hexadecimal literals
    // http://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-numeric-literals': 'error',

    // Suggest using Reflect methods where applicable
    // http://eslint.org/docs/rules/prefer-reflect
    'prefer-reflect': 'warn',

    // Use rest parameters instead of `arguments`
    // http://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 'error',

    // Suggest using the spread operator instead of `.apply()`
    // http://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 'error',

    // Suggest using template literals instead of string concatenation
    // http://eslint.org/docs/rules/prefer-template
    'prefer-template': 'error',

    // Disallow generator functions that do not have `yield`
    // http://eslint.org/docs/rules/require-yield
    'require-yield': 'error',

    // Enforce spacing between object rest-spread
    // http://eslint.org/docs/rules/rest-spread-spacing
    'rest-spread-spacing': ['error', 'never'],

    // Import sorting
    // http://eslint.org/docs/rules/sort-imports
    'sort-imports': 'off',

    // Require a `Symbol` description
    // http://eslint.org/docs/rules/symbol-description
    'symbol-description': 'error',

    // Enforce usage of spacing in template strings
    // http://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': ['error', 'never'],

    // Enforce spacing around the `*` in `yield*` expressions
    // http://eslint.org/docs/rules/yield-star-spacing
    'yield-star-spacing': ['error', 'after'],
  },
};
