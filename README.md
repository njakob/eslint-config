
# eslint-config-njakob

Personal ESLint configuration based on [Airbnb styleguide][airbnb-javascript].

## Configurations

* [ES5](/es5.js)
* [ES5 with Node](/es5-node.js)
* [ES6](/es6.js)
* [ES6 with Flowtype](/es6-flow.js)
* [ES6/React with Flowtype](/es6-flow-react.js)

## Installation

[![NPM][npm-install-image]][npm]

With NPM:

```
$ npm install eslint-config-njakob --sav-dev
```

With Yarn:

```
$ yarn add eslint-config-njakob --dev
```

## Usage  

The package provides multiple different configuations regarding the environment you need.

In `.eslintrc` file:
```json
{
  "extends": "njakob/es6-flow-react"
}
```

## Licences

`njakob/eslint-config` is licensed under the [MIT License][licence].

[licence]: LICENSE
[airbnb-javascript]: https://github.com/airbnb/javascript
[npm]: https://nodei.co/npm/eslint-config-njakob/
[npm-install-image]: https://nodei.co/npm/eslint-config-njakob.png?downloads=true
[npm-status-image]: https://img.shields.io/npm/v/eslint-config-njakob.svg
