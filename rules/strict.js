
module.exports = {
  rules: {
    // Require or disallow strict mode directives
    // http://eslint.org/docs/rules/strict
    // Since babel inserts `'use strict';` for us, we don't need it
    strict: ['error', 'never'],
  },
};
