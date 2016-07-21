/*!
 * @license redirect.js Copyright(c) 2016 sasa+1
 * https://github.com/sasaplus1-prototype/redirect.js
 * Released under the MIT license.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["redirect"] = factory();
	else
		root["redirect"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports) {

	'use strict';

	/**
	 * generate redirect URI
	 *
	 * @param {Object} replaces
	 */
	function generate(replaces) {
	  var uri = '';

	  replaces || (replaces = {});

	  uri += (replaces.protocol || location.protocol) + '//';
	  uri += (replaces.hostname || location.hostname);

	  if (replaces.port || location.port) {
	    uri += ':' + (replaces.port || location.port);
	  }

	  uri += (replaces.pathname || location.pathname);
	  uri += (replaces.search || location.search);
	  uri += (replaces.hash || location.hash);

	  return uri;
	}

	/**
	 * redirect to generated URI
	 *
	 * @param {Object} replaces
	 */
	function redirect(replaces) {
	  location.href = generate(replaces);
	}

	module.exports = {
	  generate: generate,
	  redirect: redirect
	};


/***/ }
/******/ ])
});
;