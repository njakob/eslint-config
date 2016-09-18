
module.exports = {
  rules: {
    // Enforces getter and setter pairs in objects
    // http://eslint.org/docs/rules/accessor-pairs
    'accessor-pairs': 'off',

    // Enforces `return` statements in callbacks of array's methods
    // http://eslint.org/docs/rules/array-callback-return
    'array-callback-return': 'error',

    // Enforce the use of variables within the scope they are defined
    // http://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': 'error',

    // Enforce that class methods use `this`
    // http://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': 'error',

    // Enforce a maximum cyclomatic complexity allowed in a program
    // http://eslint.org/docs/rules/complexity
    'complexity': 'off',

    // Require `return` statements to either always or never specify values
    // http://eslint.org/docs/rules/consistent-return
    'consistent-return': 'error',

    // Enforce consistent brace style for all control statements
    // http://eslint.org/docs/rules/curly
    'curly': ['error', 'all'],

    // Require `default` case in `switch` statements
    // http://eslint.org/docs/rules/default-case
    'default-case': ['error', { commentPattern: '^no default$' }],

    // Enforces consistent newlines before or after dots
    // http://eslint.org/docs/rules/dot-location
    'dot-location': ['error', 'property'],

    // Enforce dot notation whenever possible
    // http://eslint.org/docs/rules/dot-notation
    'dot-notation': 'off',

    // Require the use of `===` and `!==`
    // http://eslint.org/docs/rules/eqeqeq
    'eqeqeq': ['error', 'always', { 'null': 'ignore'}],

    // Require `for-in` loops to include an `if` statement
    // http://eslint.org/docs/rules/guard-for-in
    'guard-for-in': 'error',

    // Disallow the use of `alert`, `confirm`, and `prompt`
    // http://eslint.org/docs/rules/no-alert
    'no-alert': 'warn',

    // Disallow the use of `arguments.caller` or `arguments.callee`
    // http://eslint.org/docs/rules/no-caller
    'no-caller': 'error',

    // Disallow lexical declarations in case clauses
    // http://eslint.org/docs/rules/no-case-declarations
    'no-case-declarations': 'error',

    // Disallow division operators explicitly at beginning of regular expression
    // http://eslint.org/docs/rules/no-div-regex
    'no-div-regex': 'off',

    // Disallow `else` blocks after `return` statements in `if` statements
    // http://eslint.org/docs/rules/no-else-return
    'no-else-return': 'error',

    // Disallow empty functions
    // http://eslint.org/docs/rules/no-empty-function
    'no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ]
    }],

    // Disallow empty destructuring patterns
    // http://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 'error',

    // Disallow `null` comparisons without a type-checking operators
    // http://eslint.org/docs/rules/no-eq-null
    'no-eq-null': 'off',

    // Disallow use of `eval()`
    // http://eslint.org/docs/rules/no-eval
    'no-eval': 'error',

    // Disallow extending native types
    // http://eslint.org/docs/rules/no-extend-native
    'no-extend-native': 'error',

    // Disallow unnecessary calls to `.bind()`
    // http://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': 'error',

    // Disallow unnecessary labels
    // http://eslint.org/docs/rules/no-extra-bind
    'no-extra-label': 'error',

    // Disallow fallthrough of `case` statements
    // http://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': 'off',

    // Disallow leading or trailing decimal points in numeric literals
    // http://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': 'error',

    // Disallow reassignments of native objects or read-only globals
    // http://eslint.org/docs/rules/no-global-assign
    'no-global-assign': ['error', { exceptions: [] }],

    // Disallow shorthand type conversions
    // http://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': ['error', {
      boolean: false,
      number: false,
      string: true
    }],

    // Disallow `var` and named `function` declarations in the global scope
    // http://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 'error',

    // Disallow the use of `eval()`-like methods
    // http://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': 'error',

    // Disallow `this` keywords outside of classes or class-like objects
    // http://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': 'off',

    // Disallow usage of `__iterator__` property
    // http://eslint.org/docs/rules/no-iterator
    'no-iterator': 'error',

    // Disallow labeled statements
    // http://eslint.org/docs/rules/no-labels
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

    // Disallow unnecessary nested blocks
    // http://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': 'error',

    // Disallow `function` declarations and expressions inside loop statements
    // http://eslint.org/docs/rules/no-loop-func
    'no-loop-func': 'error',

    // Disallow magic numbers
    // http://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': 'off',

    // Disallow multiple spaces
    // http://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': 'error',

    // Disallow multiline strings
    // http://eslint.org/docs/rules/no-multi-str
    'no-multi-str': 'error',

    // Disallow `new` operators outside of assignments or comparisons
    // http://eslint.org/docs/rules/no-new
    'no-new': 'error',

    // Disallow `new` operators with the `Function` object
    // http://eslint.org/docs/rules/no-new-func
    'no-new-func': 'error',

    // Disallow `new` operators with the `String`, `Number`, and `Boolean`
    // objects
    // http://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': 'error',

    // Disallow octal literals
    // http://eslint.org/docs/rules/no-octal
    'no-octal': 'error',

    // Disallow octal escape sequences in string literals
    // http://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': 'error',

    // Disallow reassigning `function` parameters
    // http://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': ['error', { props: true }],

    // Disallow the use of the `__proto__` property
    // http://eslint.org/docs/rules/no-proto
    'no-proto': 'error',

    // Disallow `var` redeclaration
    // http://eslint.org/docs/rules/no-redeclare
    'no-redeclare': 'error',

    // Disallow assignment operators in `return` statements
    // http://eslint.org/docs/rules/no-return-assign
    'no-return-assign': 'error',

    // Disallow `javascript:` urls
    // http://eslint.org/docs/rules/no-script-url
    'no-script-url': 'error',

    // Disallow assignments where both sides are exactly the same
    // http://eslint.org/docs/rules/no-self-assign
    'no-self-assign': 'error',

    // Disallow comparisons where both sides are exactly the same
    // http://eslint.org/docs/rules/no-self-compare
    'no-self-compare': 'error',

    // Disallow comma operators
    // http://eslint.org/docs/rules/no-sequences
    'no-sequences': 'error',

    // Disallow throwing literals as exceptions
    // http://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': 'off',

    // Disallow unmodified loop conditions
    // http://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'error',

    // Disallow unused expressions
    // http://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true,
    }],

    // Disallow unused labels
    // http://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 'error',

    // Disallow unnecessary calls to `.call()` and `.apply()`
    // http://eslint.org/docs/rules/no-useless-call
    'no-useless-call': 'off',

    // Disallow unnecessary concatenation of literals or template literals
    // http://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'error',

    // Disallow unnecessary string escaping
    // http://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 'error',

    // Disallow `void` operators
    // http://eslint.org/docs/rules/no-void
    'no-void': 'error',

    // Disallow specified warning terms in comments
    // http://eslint.org/docs/rules/no-warning-comments
    'no-warning-comments': 'off',

    // Disallow `with` statements
    // http://eslint.org/docs/rules/no-with
    'no-with': 'error',

    // Enforce the consistent use of the radix argument when using  `parseInt()`
    // http://eslint.org/docs/rules/radix
    'radix': 'error',

    // Require `var` declarations be placed at the top of their containing scope
    // http://eslint.org/docs/rules/vars-on-top
    'vars-on-top': 'off',

    // Require parentheses around immediate `function` invocations
    // http://eslint.org/docs/rules/wrap-iife
    'wrap-iife': ['error', 'outside'],

    // Require or disallow Yoda conditions
    // http://eslint.org/docs/rules/yoda
    'yoda': ['error', 'never'],
  },
};
