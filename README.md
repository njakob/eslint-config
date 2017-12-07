
<h1 align="center">
  eslint-config-njakob
</h1>

<p align="center">
  Personal ESLint configuration based on <a href="https://github.com/airbnb/javascript">Airbnb styleguide</a>.
</p>

<p align="center">
  <a href="https://nodei.co/npm/@njakob/eslint-config"><img alt="NPM version" src="https://img.shields.io/npm/v/@njakob/eslint-config.svg"></a>
  <a href="https://conventionalcommits.org"><img alt="Conventional Commits" src="https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg"></a>
</p>

## Configurations

* [ES5](/es5.js)
* [ES5/Node](/es5-node.js)
* [ES6](/es6.js)
* [ES6 with Flowtype](/es6-flow.js)
* [ES6/Node with Flowtype](/es6-flow-node.js)
* [ES6/React with Flowtype](/es6-flow-react.js)

## Installation

```
$ npm install eslint-config-njakob --sav-dev
```

```
$ yarn add eslint-config-njakob --dev
```

## Usage  

The package provides multiple different configurations regarding the environment you need.

In `.eslintrc` file:
```json
{
  "extends": "njakob/es6-flow-react"
}
```

## Changelog

See [changelog](CHANGELOG.md).

## License

[MIT License](LICENSE).
