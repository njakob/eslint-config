
module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: [
    'import'
  ],
  settings: {
    'import/resolver': {
      'babel-module': {},
      'node': {
        extensions: ['.js', '.json']
      }
    },
    'import/extensions': ['.js',  '.jsx'],
    'import/core-modules': [],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$'
    ]
  },
  rules: {
    // Ensures an imported module can be resolved to a module on the local
    // filesystem, as defined by standard Node require.resolve behavior
    'import/no-unresolved': ['error', { commonjs: true }],

    // Verifies that all named imports are part of the set of named exports in
    // the referenced module
    'import/named': 'off',

    // If a default import is requested, this rule will report if there is no
    // default export in the imported module.
    'import/default': 'off',

    // Enforces names exist at the time they are dereferenced, when imported as
    // a full namespace
    'import/namespace': 'off',

    // Reports funny business with exports, like repeated exports of names or
    // defaults
    'import/export': 'error',

    // Reports use of an exported name as the locally imported name of a default
    // export
    'import/no-named-as-default': 'error',

    // Reports use of an exported name as a property on the default export
    'import/no-named-as-default-member': 'error',

    // Reports use of a deprecated name, as indicated by a JSDoc block with a
    // `@deprecated` tag or TomDoc `Deprecated:` comment
    'import/no-deprecated': 'off',

    // Forbid the import of external modules that are not declared in the
    // `package.json`'s `dependencies`, `devDependencies`,
    // `optionalDependencies` or `peerDependencies`
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: false,
      optionalDependencies: false,
    }],

    // Forbids the use of mutable exports with `var` or `let`
    'import/no-mutable-exports': 'error',

    // Reports `require([string])` function calls and `module.exports` or
    // `exports.*`
    'import/no-commonjs': 'off',

    // Reports `require([array], ...)` and `define([array], ...)` function calls
    // at the module scope
    'import/no-amd': 'error',

    // Forbid the use of Node.js builtin modules
    'import/no-nodejs-modules': 'off',

    // This rule reports any imports that come after non-import statements
    'import/imports-first': ['error', 'absolute-first'],

    // Reports if a resolved path is imported more than once
    'import/no-duplicates': 'off',

    // Reports if namespace import is used
    'import/no-namespace': 'off',

    // Some file resolve algorithms allow you to omit the file extension within
    // the import source path
    'import/extensions': ['off', 'never'],

    // Enforce a convention in the order of `require()` and `import` statements
    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index']
    }],

    // Reports if there's no new line after last `import` and `require` in group
    'import/newline-after-import': 'error',

    // When there is only a single export from a module, prefer using default
    // export over named export
    'import/prefer-default-export': 'off',

    // Restrict which files can be imported in a given folder
    'import/no-restricted-paths': 'off',

    // Forbid modules to have too many dependencies
    'import/max-dependencies': 'off',

    // Forbid import of modules using absolute paths
    'import/no-absolute-path': 'error'
  }
};