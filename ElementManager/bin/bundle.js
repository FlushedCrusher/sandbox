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

	var ElementManager = __webpack_require__(1);
	var elementManager = new ElementManager();

	var DivOptions = __webpack_require__(4);
	var Div = __webpack_require__(7);
	elementManager.register('Div', Div);

	var l1 = new DivOptions();
	l1.setTextContent('Level 1');
	var l2 = new DivOptions();
	l2.setTextContent('Level 2');
	var l3 = new DivOptions();
	l3.setTextContent('Level 3');
	var l4 = new DivOptions();
	l4.setTextContent('Level 4')
	.events.set('onclick', function() {
	  'use strict';
	  alert('Clicked level 4!');
	}).set('onmouseover', function() {
	  'use strict';
	  alert('Moused over level 4!');
	});

	elementManager
	  .create('Div', l1)
	  .nest('Div', l2)
	  .nest('Div', l3)
	  .after('Div', l3, true)
	  .nest('Div', l4)
	  .end();

	elementManager
	  .create('Div', l1)
	  .nest('Div', l2, true)
	  .nest('Div', l2)
	  .nest('Div', l3, true)
	  .after('Div', l2)
	  .build();

	// window.ElementManager = elementManager;

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
	ElementManager.prototype.get = function(key) {
	  'use strict';
	  return this.elements.get(key);
	};
	ElementManager.prototype.addOrReplace = function(key, value) {
	  'use strict';
	  this.elements.set(key, value);
	};
	ElementManager.prototype.register = function(key, value) {
	  'use strict';
	  this.factory.registerElement(key, value);
	  return this;
	};
	ElementManager.prototype.create = function(key, options) {
	  'use strict';
	  var element = this.factory.create(key, options);
	  var id = this.guid.create();
	  this.addOrReplace(id, element);
	  this.select(element);
	  return this;
	};
	ElementManager.prototype.nest = function (key, options, chain) {
	  'use strict';
	  var tmp = this.factory.create(key, options);
	  this.component.addChild(tmp.element);
	  if(!chain) {
	    this.select(tmp);
	  }
	  return this;
	};
	ElementManager.prototype.after = function (key, options, chain) {
	  'use strict';
	  var tmp = this.factory.create(key, options);
	  this.component.addToParent(tmp.element);
	  if(!chain) {
	    this.select(tmp);
	  }
	  return this;
	};
	ElementManager.prototype.select = function(elementOrKey) {
	  'use strict';
	  var element = typeof elementOrKey === 'object' ? elementOrKey : this.get(elementOrKey);
	  this.component = element;
	};
	ElementManager.prototype.end = function() {
	  'use strict';
	  this.select(null);
	};
	ElementManager.prototype.addToDom = function(component) {
	  'use strict';
	  this.dom.appendChild(component);
	  return this;
	};
	ElementManager.prototype.removeFromDom = function(component) {
	  'use strict';
	  this.dom.remove(component);
	  return this;
	};
	ElementManager.prototype.clearDom = function() {
	  'use strict';
	  var self = this;
	  this.elements.forEach(function(n) {
	    self.removeFromDom(n.element);
	  });
	  this.end();
	  return this;
	};
	ElementManager.prototype.build = function() {
	  'use strict';
	  var self = this;
	  // this.clearDom();
	  this.elements.forEach(function(n) {
	    self.addToDom(n.element);
	  });
	  return this;
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

	var EventOptions = __webpack_require__(5);

	function DivOptions() {
	  'use strict';
	  this.textContent = null;
	  this.events = new EventOptions();
	}
	DivOptions.prototype.getTextContent = function() {
	  'use strict';
	  return this.textContent;
	};
	DivOptions.prototype.setTextContent = function(content) {
	  'use strict';
	  this.textContent = content;
	  return this;
	};

	module.exports = DivOptions;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var EventList = __webpack_require__(6);

	function EventOptions() {
	  'use strict';
	}
	EventOptions.prototype.get = function(key) {
	  'use strict';
	  var action = null;
	  if(EventList.includes(key)) {
	    action = this[key];
	  }
	  return action;
	};
	EventOptions.prototype.set = function(key, action) {
	  'use strict';
	  if(EventList.includes(key)) {
	    this[key] = action;
	  }
	  return this;
	};

	module.exports = EventOptions;

/***/ },
/* 6 */
/***/ function(module, exports) {

	var EventList = [
	  'onabort',
	  'onauxclick',
	  'onbeforecopy',
	  'onbeforecut',
	  'onbeforepaste',
	  'onblur',
	  'oncancel',
	  'oncanplay',
	  'oncanplaythrough',
	  'onchange',
	  'onclick',
	  'onclose',
	  'oncontextmenu',
	  'oncopy',
	  'oncuechange',
	  'oncut',
	  'ondblclick',
	  'ondrag',
	  'ondragend',
	  'ondragenter',
	  'ondragleave',
	  'ondragover',
	  'ondragstart',
	  'ondrop',
	  'ondurationchange',
	  'onemptied',
	  'onended',
	  'onerror',
	  'onfocus',
	  'ongotpointercapture',
	  'oninput',
	  'oninvalid',
	  'onkeydown',
	  'onkeypress',
	  'onkeyup',
	  'onload',
	  'onloadeddata',
	  'onloadedmetadata',
	  'onloadstart',
	  'onlostpointercapture',
	  'onmousedown',
	  'onmouseenter',
	  'onmouseleave',
	  'onmousemove',
	  'onmouseout',
	  'onmouseover',
	  'onmouseup',
	  'onmousewheel',
	  'onpaste',
	  'onpause',
	  'onplay',
	  'onplaying',
	  'onpointercancel',
	  'onpointerdown',
	  'onpointerenter',
	  'onpointerleave',
	  'onpointermove',
	  'onpointerout',
	  'onpointerover',
	  'onpointerup',
	  'onprogress',
	  'onratechange',
	  'onreset',
	  'onresize',
	  'onscroll',
	  'onsearch',
	  'onseeked',
	  'onseeking',
	  'onselect',
	  'onselectstart',
	  'onshow',
	  'onstalled',
	  'onsubmit',
	  'onsuspend',
	  'ontimeupdate',
	  'ontoggle',
	  'onvolumechange',
	  'onwaiting',
	  'onwebkitfullscreenchange',
	  'onwebkitfullscreenerror',
	  'onwheel'
	];

	module.exports = EventList;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var Element = __webpack_require__(8);

	function Div(options) {
	  'use strict';
	  Element.call(this, 'div');
	  if(options) {
	    this.setTextContent(options.textContent || "");
	    this.setEvents(options.events || {});
	  }
	  
	}
	Div.prototype = Object.create(Element.prototype);
	Div.prototype.setTextContent = function(content) {
	  'use strict';
	  this.element.textContent = content;
	  return this;
	};

	module.exports = Div;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var EventList = __webpack_require__(6);

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
	  var elem = this.element.parentElement || this.element;
	  elem.appendChild(component);
	  return this;
	};
	Element.prototype.removeFromParent = function(component) {
	  'use strict';
	  var elem = this.element.parentElement || this.element;
	  elem.removeChild(component);
	  return this;
	};
	/*
	 * Event modifiers
	 */
	Element.prototype.setEvent = function(key, action) {
	  'use strict';
	  if(this.element[key] !== undefined && EventList.includes(key)) { 
	    this.element[key] = action;
	  }
	};
	Element.prototype.removeEvent = function(key) {
	  'use strict';
	  if(this.element[key] !== undefined && EventList.includes(key)) { 
	    this.element[key] = null;
	  }
	};
	Element.prototype.setEvents = function(events) {
	  'use strict';
	  var self = this;
	  for (var key in events) {
	    if (!events.hasOwnProperty(key)) {
	      continue;
	    }
	    var action = events[key];
	    self.setEvent(key, action);
	  }
	};

	module.exports = Element;

/***/ }
/******/ ]);