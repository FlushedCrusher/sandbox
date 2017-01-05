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

	__webpack_require__(1);
	__webpack_require__(6);
	__webpack_require__(10);
	__webpack_require__(12);

	var main = __webpack_require__(14);

	angular.module('app',
	  [
	    'DivPkg',
	    'ElementPkg',
	    'EventsPkg',
	    'StylePkg'
	  ])
	  .controller('main', [
	    '$injector',
	    main
	  ]);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * DivPkg module definition
	 */

	var Div = __webpack_require__(2);
	var DivOptions = __webpack_require__(5);

	angular.module('DivPkg', [])
	  .factory('Div', function() {
	    'use strict';
	    return Div;
	  })
	  .factory('DivOptions',  function() {
	    'use strict';
	    return DivOptions;
	  });

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Basic Div element wrapper
	 * 
	 * @requires {Element}
	 * @requires {DivOptions}
	 * @augments {Element}
	 * @param {DivOptions} options
	 * @returns {Div}
	 */

	var Element = __webpack_require__(3);
	var DivOptions = __webpack_require__(5);

	function Div(options) {
	  'use strict';
	  Element.call(this, 'div');
	  var _options = options ? options : new DivOptions();
	  if(_options.template) {
	    this.setTemplate(_options.template);
	  } else if(_options.textContent){
	    this.setTextContent(_options.textContent);
	  }
	  if(_options.events) {
	    this.setEvents(_options.events);
	  }
	  if(_options.style) {
	    this.setStyles(_options.style);
	  }
	}
	Div.prototype = Object.create(Element.prototype);
	Div.prototype.setTextContent = function(content) {
	  'use strict';
	  this.element.textContent = content;
	  return this;
	};
	Div.prototype.setTemplate = function(content) {
	  'use strict';
	  this.element.innerHTML = content;
	  return this;
	};

	module.exports = Div;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Dom Element wrapper
	 * 
	 * @requires {EventList}
	 * @param {String} type Element type
	 * @returns {Element}
	 */

	var EventList = __webpack_require__(4);

	function Element(type) {
	  'use strict';
	  this.element = type ? document.createElement(type) : null;
	}
	/*
	 * Display modifiers
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
	 * Visibility modifiers
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
	 * Child modifiers
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
	 * Sibling modifiers
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
	  return this;
	};
	Element.prototype.removeEvent = function(key) {
	  'use strict';
	  if(this.element[key] !== undefined && EventList.includes(key)) { 
	    this.element[key] = null;
	  }
	  return this;
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
	  return this;
	};
	Element.prototype.clearEvents = function() {
	  'use strict';
	  var self = this;
	  var _events = this.element;
	  for (var key in _events) {
	    if (!_events.hasOwnProperty(key) && !EventList.includes(key)) {
	      continue;
	    }
	    self.removeEvent(key);
	  }
	  return this;
	};
	/*
	 * Style modifiers
	 */
	Element.prototype.setStyle = function(key, style) {
	  'use strict';
	  this.element.style[key] = style;
	  return this;
	};
	Element.prototype.removeStyle = function(style) {
	  'use strict';
	  var _styles = this.element.style;
	  _styles[style] = null;
	  return this;
	};
	Element.prototype.setStyles = function(styles) {
	  'use strict';
	  var self = this;
	  for (var key in styles) {
	    if (!styles.hasOwnProperty(key)) {
	      continue;
	    }
	    var _style = styles[key];
	    self.setStyle(key, _style);
	  }
	  return this;
	};
	Element.prototype.clearStyles = function() {
	  'use strict';
	  var self = this;
	  var _styles = this.element.style;
	  for (var style in _styles) {
	    if (!_styles.hasOwnProperty(style)) {
	      continue;
	    }
	    self.removeStyle(style);
	  }
	  return this;
	};

	module.exports = Element;

/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Acceptable events
	 * 
	 * @returns {EventList}
	 */

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
/* 5 */
/***/ function(module, exports) {

	/**
	 * Options for Div element wrapper
	 * 
	 * @returns {DivOptions}
	 */

	function DivOptions() {
	  'use strict';
	  this.textContent = null;
	  this.template = null;
	  this.events = null;
	  this.style = null;
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
	DivOptions.prototype.getTemplate = function() {
	  'use strict';
	  return this.template;
	};
	DivOptions.prototype.setTemplate = function(content) {
	  'use strict';
	  this.template = content;
	  return this;
	};
	DivOptions.prototype.getEvents = function() {
	  'use strict';
	  return this.events;
	};
	DivOptions.prototype.setEvents = function(content) {
	  'use strict';
	  this.events = content;
	  return this;
	};
	DivOptions.prototype.getStyle = function() {
	  'use strict';
	  return this.style;
	};
	DivOptions.prototype.setStyle = function(content) {
	  'use strict';
	  this.style = content;
	  return this;
	};

	module.exports = DivOptions;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ElementPkg module definition
	 */

	var Element = __webpack_require__(3);
	var ElementFactory = __webpack_require__(7);
	var ElementManager = __webpack_require__(8);

	angular.module('ElementPkg', [])
	  .factory('Element', Element)
	  .service('ElementManager', ElementManager)
	  .service('ElementFactory', ElementFactory);

/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Element factory 
	 * 
	 * @returns {ElementFactory}
	 */

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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Element manager
	 * 
	 * @requires {ElementFactory}
	 * @requires {Guid}
	 * @returns {ElementManager}
	 */

	var ElementFactory = __webpack_require__(7);
	var Guid = __webpack_require__(9);

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
	  if(this.dom.contains(component)) {
	    this.dom.removeChild(component);
	  }
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
	  this.clearDom();
	  this.elements.forEach(function(n) {
	    self.addToDom(n.element);
	  });
	  return this;
	};

	module.exports = ElementManager;

/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Guid generator and hash
	 * 
	 * @returns {Guid}
	 */

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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * EventsPkg module definition
	 */

	var EventOptions = __webpack_require__(11);

	angular.module('EventsPkg', [])
	  .factory('EventOptions', function() {
	    'use strict';
	    return EventOptions;
	  });

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Event options object
	 * 
	 * @requires {EventList}
	 * @returns {EventOptions}
	 */

	var EventList = __webpack_require__(4);

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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * StylePkg module definition
	 */

	var StyleOptions = __webpack_require__(13);

	angular.module('StylePkg', [])
	  .factory('StyleOptions', function() {
	    'use strict';
	    return StyleOptions;
	  });

/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * Style options object
	 * 
	 * @returns {StyleOptions}
	 */

	function StyleOptions() {
	  'use strict';
	}
	StyleOptions.prototype.get = function(key) {
	  'use strict';
	  var style = this[key];
	  return style;
	};
	StyleOptions.prototype.set = function(key, style) {
	  'use strict';
	  this[key] = style;
	  return this;
	};
	module.exports = StyleOptions;

/***/ },
/* 14 */
/***/ function(module, exports) {

	function main($injector) {
	  'use strict';

	  var ElementManager = $injector.get('ElementManager');
	  var EventOptions = $injector.get('EventOptions');
	  var StyleOptions = $injector.get('StyleOptions');

	  var DivOptions = $injector.get('DivOptions');
	  var Div = $injector.get('Div');

	  ElementManager.register('Div', Div);

	  var l1 = new DivOptions();
	  l1.setTextContent('Level 1');

	  var l2 = new DivOptions();
	  var styles2 = new StyleOptions();
	  styles2.set('cssText',
	    "color: white;" +
	    "background-color: red;" +
	    'border: 1px solid black;'
	  );
	  l2.setTextContent('Level 2')
	  .setStyle(styles2);

	  var l3 = new DivOptions();
	  var styles3 = new StyleOptions();
	  styles3.set('cssText',
	    'color: green;' +
	    'background-color: yellow;' +
	    'border: 1px solid black;'
	  );
	  l3.setTextContent('Level 3')
	  .setStyle(styles3);

	  var l4 = new DivOptions();
	  var events4 = new EventOptions();
	  events4.set('onclick', function() {
	    alert('Clicked level 4!');
	  });
	  l4.setTemplate("<div>I am a template div!</div>")
	  .setEvents(events4);

	  ElementManager
	    .create('Div', l1)
	    .nest('Div', l2)
	    .nest('Div', l3)
	    .after('Div', l3, true)
	    .nest('Div', l4)
	    .build();

	  ElementManager
	    .create('Div', l1)
	    .nest('Div', l2, true)
	    .nest('Div', l2)
	    .nest('Div', l3, true)
	    .after('Div', l2)
	    .build();

	}

	module.exports = main;

/***/ }
/******/ ]);