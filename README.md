
# eslint-config-njakob

Personal ESLint configuration.

## Configurations

* [Flowtype](/flow.js) 
* [Import](/import.js)
* [ES6](/babel.js)

## Installation

[![NPM](https://nodei.co/npm/eslint-config-njakob.png?downloads=true)](https://nodei.co/npm/eslint-config-njakob/)

```
$ npm install eslint-config-njakob --sav-dev
```

## Usage  

In order to use the basic ES5 ESLint rules, the following file can be added.

`.eslintrc`
```json
{
  "extends": "njakob"
}
```

More configurations are available in the repository.

`.eslintrc`
```json
{
  "extends": [
    "njakob",
    "njakob/babel",
    "njakob/node",
    "njakob/flow"
  ]
}
```

## Licences

[MIT](LICENSE)
