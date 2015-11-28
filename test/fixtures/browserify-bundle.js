require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @func withClass
 * @desc get elements by .class
 * @param {string} className - name of class to match
 * @param {object} [fromEl=document] - element to start search from
 * @returns {array<object>} array of elements
 */
function withClass(className, fromEl) {
  fromEl = fromEl || document
  return Array.prototype.slice.call(fromEl.getElementsByClassName(className))
}

/**
 * @func withTag
 * @desc get elements by <tag>
 * @param {string} tagName - name of tag to match
 * @param {object} [fromEl=document] - element to start search from
 * @returns {array<object>} array of elements
 */
function withTag(tagName, fromEl) {
  fromEl = fromEl || document
  return Array.prototype.slice.call(fromEl.getElementsByTagName(tagName))
}

(function() {
  if (typeof module !== 'undefined') {
    module.exports = {withClass, withTag}
  } else {
    this.getElement = {}
    this.getElement.withClass = withClass
    this.getElement.withTag = withTag
  }
})()

},{}],"bGetElement":[function(require,module,exports){
const getElement = require('../../../index')

// const bGetElement = {}
// bGetElement.withClass = getElement.withClass
// bGetElement.withTag = getElement.withTag
// module.exports = bGetElement
const bGetElement = module.exports = {
  withClass: getElement.withClass,
  withTag: getElement.withTag
}

},{"../../../index":1}]},{},[]);
