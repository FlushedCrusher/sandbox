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

	'use strict'; // eslint-disable-line strict

	var ElementManager = __webpack_require__(1); // eslint-disable-line no-unused-vars
	var elementManager = new ElementManager();

	var Div = __webpack_require__(4);
	elementManager.register('Div', Div);
	elementManager.create('Div', {
	  name: 'myDivOptions'
	}).nest('Div', {
	  name: 'myDivOptions'
	}).nest('Div', {
	  name: 'myDivOptions'
	}).nest('Div', {
	  name: 'myDivOptions'
	}).nest('Div', {
	  name: 'myDivOptions'
	});

	window.ElementManager = elementManager;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var ElementFactory = __webpack_require__(2);
	var Guid = __webpack_require__(3);

	function ElementManager() {
	  'use strict';
	  this.dom = document.body;
	  this.component = null;
	  this.elements = new Map();
	  this.factory = new ElementFactory();
	  this.guid = new Guid();
	}
	ElementManager.prototype.register = function(key, value) {
	  'use strict';
	  this.factory.registerElement(key, value);
	  return this;
	};
	ElementManager.prototype.create = function(key, options) {
	  'use strict';
	  var element = this.factory.create(key, options);
	  var id = this.guid.create();
	  this.elements.set(id, element);
	  this.component = element;
	  return this;
	};
	ElementManager.prototype.createChain = function(key, options) {
	  'use strict';
	  return this.factory.create(key, options);
	};
	ElementManager.prototype.nest = function (key, options) {
	  'use strict';
	  var tmp = this.createChain(key, options);
	  this.component.appendChild(tmp.element);
	  return this;
	};
	ElementManager.prototype.addToDom = function(component) {
	  'use strict';
	  this.dom.appendChild(component);
	};
	ElementManager.prototype.build = function() {
	  'use strict';
	  var self = this;
	  this.elements.forEach(function(n) {
	    self.addToDom(n.element);
	  });
	};

	module.exports = ElementManager;

/***/ },
/* 2 */
/***/ function(module, exports) {

	function ElementFactory() {
	  'use strict';
	  this.registeredElements = new Map();
	}
	ElementFactory.prototype.registerElement = function(key, value) {
	  'use strict';
	  this.registeredElements.set(key, value);
	  return this;
	};
	ElementFactory.prototype.create = function(key, options) {
	  'use strict';
	  var Elem = this.registeredElements.get(key);
	  return new Elem(options);
	};

	module.exports = ElementFactory;

/***/ },
/* 3 */
/***/ function(module, exports) {

	function Guid() {
	  'use strict';
	  this.hash = new Map();
	}
	Guid.prototype.create = function() {
	  'use strict';
	  var guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8); // eslint-disable-line eqeqeq
	    return v.toString(16);
	  });
	  if(this.hash.has(guid)) {
	    guid = this.create();
	  } else {
	    this.hash.set(guid, guid);
	  }
	  return guid;
	};

	module.exports = Guid;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var Element = __webpack_require__(5);

	function Div(options) {
	  'use strict';
	  Element.call(this, 'div');
	  this.prototype = Object.create(Element.prototype);
	  this.element.textContent = 'Hello World!';
	}
	module.exports = Div;

/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
	 * Element base class
	 * 
	 */
	// Toggle.prototype = Object.create(Element.prototype);
	function Element(type) {
	  'use strict';
	  this.element = type ? document.createElement(type) : null;
	}
	/*
	 * Element display modifiers
	 */
	Element.prototype.show = function() {
	  'use strict';
	  var elem = this.element;
	  elem.style.display = 'block';
	  return this;
	};
	Element.prototype.hide = function() {
	  'use strict';
	  var elem = this.element;
	  elem.style.display = 'none';
	  return this;
	};
	Element.prototype.toggleDisplay = function() {
	  'use strict';
	  var elem = this.element;
	  elem.style.display = (elem.style.display === 'none') ? 'block' : 'none';
	  return this;
	};
	/*
	 * Element visibility modifiers
	 */
	Element.prototype.visible = function() {
	  'use strict';
	  var elem = this.element;
	  elem.style.visibility = 'visible';
	  return this;
	};
	Element.prototype.invisible = function() {
	  'use strict';
	  var elem = this.element;
	  elem.style.visibility = 'hidden';
	  return this;
	};
	Element.prototype.toggleVisibility = function() {
	  'use strict';
	  var elem = this.element;
	  elem.style.visibility = (elem.style.visibility === 'hidden') ? 'visible' : 'hidden';
	  return this;
	};
	/*
	 * Element children modifiers
	 */
	Element.prototype.addChild = function(component) {
	  'use strict';
	  var elem = this.element;
	  elem.appendChild(component);
	  return this;
	};
	Element.prototype.removeChild = function(component) {
	  'use strict';
	  var elem = this.element;
	  elem.removeChild(component);
	  return this;
	};
	/*
	 * Element parent modifiers
	 */
	Element.prototype.addToParent = function(component) {
	  'use strict';
	  var elem = this.element.parentElemen | this.element;
	  elem.appendChild(component);
	  return this;
	};
	Element.prototype.removeFromParent = function(component) {
	  'use strict';
	  var elem = this.element.parentElement | this.element;
	  elem.removeChild(component);
	  return this;
	};

	module.exports = Element;

/***/ }
/******/ ]);