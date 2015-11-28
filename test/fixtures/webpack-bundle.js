/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["wGetElement"] = __webpack_require__(1);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

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
	  if (true) {
	    module.exports = {withClass, withTag}
	  } else {
	    this.getElement = {}
	    this.getElement.withClass = withClass
	    this.getElement.withTag = withTag
	  }
	})()


/***/ }
/******/ ]);