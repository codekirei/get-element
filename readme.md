A Node.js module for quickly selecting HTML elements. Requires Node.js > `4.0`.

## Why

- Because using `jQuery` just to select elements is like using a flamethrower to light a birthday candle
- Because `document.querySelector()` is slow
- Because the [`HTMLCollections`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) returned by `document.getElement(s)By...` are cool and all, but I really just want a native `Array` to iterate over
- Because I don't want to type `Array.prototype.slice.call(document.getElementsByClassName('aVeryNiceClassName'))` every time I want to generate said array of elements

## Installation

Install and save to `package.json` from terminal:

`$ npm install --save get-element`

Require in JS file that will be [bundled](#bundlers-vs-browser):

```js
var getElement = require('get-element')
```

Or if you like to live dangerously :sunglasses::
```js
var el = require('get-element')
```

## Usage

### Methods

`get-element` exports two methods for your convenience:

*withClass*

*withTag*

### Bundlers vs Browser

## License

[MIT](https://github.com/codekirei/get-element/blob/master/license)
