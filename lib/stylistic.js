
module.exports = {
  extends: [
    'eslint-config-airbnb-base/rules/style'
  ],
  rules: {
    // Enforce consistent brace style for blocks
    // http://eslint.org/docs/rules/brace-style
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],

    // Require or disallow trailing commas
    // http://eslint.org/docs/rules/comma-dangle
    'comma-dangle': ['error', 'only-multiline'],

    // Enforce at least one newline at the end of files
    // http://eslint.org/docs/rules/eol-last
    'eol-last': ['error', 'unix'],

    // Disallow specified identifiers
    // http://eslint.org/docs/rules/id-blacklist
    'id-blacklist': 'off',

    // Enforce the consistent use of either double or single quotes in JSX
    // attributes
    // http://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': ['error', 'prefer-double'],

    // Enforce position of line comments
    // http://eslint.org/docs/rules/line-comment-position
    'line-comment-position': ['error', {
      position: 'above',
      applyDefaultPatterns: true,
    }],

    // Enforce consistent linebreak style
    // http://eslint.org/docs/rules/linebreak-style
    'linebreak-style': ['error', 'unix'],

    // Enforce a maximum line length
    // http://eslint.org/docs/rules/max-len
    'max-len': ['error', 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    // Disallow comments inline after code
    // http://eslint.org/docs/rules/no-inline-comments
    'no-inline-comments': 'warn',

    // Enforce consistent linebreak style for operators
    // http://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': ['error', 'before'],
  }
};
