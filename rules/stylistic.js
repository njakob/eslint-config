
module.exports = {
  rules: {
    // Enforce consistent spacing inside array brackets
    // http://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing': ['error', 'never'],

    // Enforce consistent spacing inside single-line blocks
    // http://eslint.org/docs/rules/block-spacing
    'block-spacing': ['error', 'always'],

    // Enforce consistent brace style for blocks
    // http://eslint.org/docs/rules/brace-style
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],

    // Enforce camelcase naming convention
    // http://eslint.org/docs/rules/camelcase
    'camelcase': 'off',

    // Require or disallow trailing commas
    // http://eslint.org/docs/rules/comma-dangle
    'comma-dangle': ['error', 'only-multiline'],

    // Enforce consistent spacing before and after commas
    // http://eslint.org/docs/rules/comma-spacing
    'comma-spacing': ['error', { before: false, after: true }],

    // Enforce consistent comma style
    // http://eslint.org/docs/rules/comma-style
    'comma-style': ['error', 'last'],

    // Enforce consistent spacing inside computed property brackets
    // http://eslint.org/docs/rules/computed-property-spacing
    'computed-property-spacing': ['error', 'never'],

    // Enforce consistent naming when capturing the current execution context
    // http://eslint.org/docs/rules/consistent-this
    'consistent-this': 'off',

    // Enforce at least one newline at the end of files
    // http://eslint.org/docs/rules/eol-last
    'eol-last': ['error', 'unix'],

    // Require or disallow spacing between `function` identifiers and their
    // invocations
    // http://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': ['error', 'never'],

    // Require or disallow named `function` expressions
    // http://eslint.org/docs/rules/func-names
    'func-names': ['warn', 'never'],

    // Enforce the consistent use of either function declarations or expressions
    // http://eslint.org/docs/rules/func-style
    'func-style': ['off', 'declaration', { allowArrowFunctions: true }],

    // Disallow specified identifiers
    // http://eslint.org/docs/rules/id-blacklist
    'id-blacklist': 'off',

    // Enforce minimum and maximum identifier lengths
    // http://eslint.org/docs/rules/id-length
    'id-length': 'off',

    // Require identifiers to match a specified regular expression
    // http://eslint.org/docs/rules/id-match
    'id-match': 'off',

    // Enforce consistent indentation
    // http://eslint.org/docs/rules/indent
    'indent': ['error', 2, {
      SwitchCase: 1,
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: { 'body': 1, 'parameters': 2 },
      FunctionExpression: { 'body': 1, 'parameters': 2 },
    }],

    // Enforce the consistent use of either double or single quotes in JSX
    // attributes
    // http://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': ['error', 'prefer-double'],

    // Enforce consistent spacing between keys and values in object literal
    // properties
    // http://eslint.org/docs/rules/key-spacing
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
      mode: 'strict'
    }],

    // Enforce consistent spacing before and after keywords
    // http://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': ['error', {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true }
      }
    }],

    // Enforce position of line comments
    // http://eslint.org/docs/rules/line-comment-position
    'line-comment-position': ['error', {
      position: 'above',
      applyDefaultPatterns: true,
    }],

    // Enforce consistent linebreak style
    // http://eslint.org/docs/rules/linebreak-style
    'linebreak-style': ['error', 'unix'],

    // Require empty lines around comments
    // http://eslint.org/docs/rules/lines-around-comment
    'lines-around-comment': 'off',

    // Require or disallow newlines around directives
    // http://eslint.org/docs/rules/lines-around-directive
    'lines-around-directive': ['error', 'always'],

    // Enforce a maximum depth that blocks can be nested
    // http://eslint.org/docs/rules/max-depth
    'max-depth': ['off', 4],

    // Enforce a maximum line length
    // http://eslint.org/docs/rules/max-len
    'max-len': ['error', 100, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    // Enforce a maximum number of lines per file
    // http://eslint.org/docs/rules/max-lines
    'max-lines': 'off',

    // Enforce a maximum depth that callbacks can be nested
    // http://eslint.org/docs/rules/max-nested-callbacks
    'max-nested-callbacks': 'off',

    // Enforce a maximum number of parameters in `function` definitions
    // http://eslint.org/docs/rules/max-params
    'max-params': 'off',

    // Enforce a maximum number of statements allowed in `function` blocks
    // http://eslint.org/docs/rules/max-statements
    'max-statements': 'off',

    // Enforce a maximum number of statements allowed per line
    // http://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': 'off',

    // Enforce newlines between operands of ternary expressions
    // http://eslint.org/docs/rules/multiline-ternary
    'multiline-ternary': 'off',

    // Require constructor `function` names to begin with a capital letter
    // http://eslint.org/docs/rules/new-cap
    'new-cap': ['error', { newIsCap: true }],

    // Require parentheses when invoking a constructor with no arguments
    // http://eslint.org/docs/rules/new-parens
    'new-parens': 'error',

    // Require or disallow an empty line after `var` declarations
    // http://eslint.org/docs/rules/newline-after-var
    'newline-after-var': 'off',

    // Require an empty line before `return` statements
    // http://eslint.org/docs/rules/newline-before-return
    'newline-before-return': 'off',

    // Require a newline after each call in a method chain
    // http://eslint.org/docs/rules/newline-per-chained-call
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

    // Disallow `Array` constructors
    // http://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': 'error',

    // Disallow use of bitwise operators
    // http://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 'error',

    // Disallow `continue` statement
    // http://eslint.org/docs/rules/no-continue
    'no-continue': 'error',

    // Disallow comments inline after code
    // http://eslint.org/docs/rules/no-inline-comments
    'no-inline-comments': 'warn',

    // Disallow `if` statements as the only statement in `else` blocks
    // http://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'error',

    // Disallow mixed binary operators
    // http://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': ['error', {
      groups: [
        ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: false
    }],

    // Disallow mixed spaces and tabs for indentation
    // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    'no-mixed-spaces-and-tabs': 'error',

    // Disallow multiple empty lines
    // http://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],

    // Disallow negated conditions
    // http://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': 'off',

    // Disallow nested ternary expressions
    // http://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': 'error',

    // Disallow `Object` constructors
    // http://eslint.org/docs/rules/no-new-object
    'no-new-object': 'error',

    // Disallow the unary operators `++` and `--`
    // http://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'error',

    // Disallow specified syntax
    // http://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': ['error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],

    // Disallow tab characters in file
    // http://eslint.org/docs/rules/no-tabs
    'no-tabs': 'error',

    // Disallow ternary operators
    // http://eslint.org/docs/rules/no-ternary
    'no-ternary': 'off',

    // Disallow trailing whitespace at the end of lines
    // http://eslint.org/docs/rules/no-ternary
    'no-trailing-spaces': 'error',

    // Disallow dangling underscores in identifiers
    // http://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': ['error', { allowAfterThis: false }],

    // Disallow ternary operators when simpler alternatives exist
    // http://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // Disallow whitespace before properties
    // http://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'error',

    // Enforce consistent line breaks inside braces
    // http://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': ['off', {
      ObjectExpression: "always",
      ObjectPattern: { "minProperties": 4 }
    }],

    // Enforce consistent spacing inside braces
    // http://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': ['error', 'always'],

    // Enforce placing object properties on separate lines
    // http://eslint.org/docs/rules/object-property-newline
    'object-property-newline': ['error', {
      allowMultiplePropertiesPerLine: true,
    }],

    // Enforce variables to be declared either together or separately in
    // functions
    // http://eslint.org/docs/rules/one-var
    'one-var': ['error', 'never'],

    // Require or disallow newlines around `var` declarations
    // http://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': ['error', 'always'],

    // Require or disallow assignment operator shorthand where possible
    // http://eslint.org/docs/rules/operator-assignment
    'operator-assignment': ['error', 'always'],

    // Enforce consistent linebreak style for operators
    // http://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': ['error', 'before'],

    // Require or disallow padding within blocks
    // http://eslint.org/docs/rules/padded-blocks
    'padded-blocks': ['error', 'never'],

    // Require quotes around object literal property names
    // http://eslint.org/docs/rules/quote-props.html
    'quote-props': ['error', 'consistent'],

    // Enforce the consistent use of either backticks, double, or single quotes
    // http://eslint.org/docs/rules/quotes
    'quotes': ['error', 'single', { avoidEscape: true }],

    // Require JSDoc comments
    // http://eslint.org/docs/rules/require-jsdoc
    'require-jsdoc': 'off',

    // Require or disallow semicolons instead of ASI
    // http://eslint.org/docs/rules/semi
    'semi': ['error', 'always'],

    // Enforce spacing before and after semicolons
    // http://eslint.org/docs/rules/semi-spacing
    'semi-spacing': ['error', { before: false, after: true }],

    // Requires object keys to be sorted
    // http://eslint.org/docs/rules/sort-keys
    'sort-keys': 'off',

    // Variable sorting
    // http://eslint.org/docs/rules/sort-vars
    'sort-vars': 'off',

    // Require or disallow space before blocks
    // http://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': 'error',

    // Require or disallow a space before function parenthesis
    // http://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never' }],

    // Disallow or enforce spaces inside of parentheses
    // http://eslint.org/docs/rules/space-in-parens
    'space-in-parens': ['error', 'never'],

    // Require spaces around infix operators
    // http://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': ['error', { int32Hint: false }],

    // Require or disallow spaces before or after unary operators
    // http://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false
    }],

    // Requires or disallows a whitespace
    // http://eslint.org/docs/rules/spaced-comment
    'spaced-comment': ['error', 'always'],

    // Require or disallow the Unicode Byte Order Mark
    // http://eslint.org/docs/rules/unicode-bom
    'unicode-bom': ['error', 'never'],

    // Require regex literals to be wrapped
    // http://eslint.org/docs/rules/wrap-regex
    'wrap-regex': 'off',
  }
};
