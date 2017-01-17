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

	var run = __webpack_require__(32);
	var info = __webpack_require__(33);

	angular.module('app',
	  [
	    'StatePkg'
	  ])
	  .run([
	    '$injector',
	    '$compile',
	    '$rootScope',
	    run
	  ])
	  .controller('info', [
	    '$injector',
	    '$compile',
	    '$scope',
	    '$interval',
	    info
	  ]);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * StatePkg module definition
	 */
	'use strict'; // eslint-disable-line strict

	__webpack_require__(2);
	__webpack_require__(8);
	__webpack_require__(11);
	__webpack_require__(14);
	__webpack_require__(19);
	__webpack_require__(21);
	__webpack_require__(23);
	__webpack_require__(25);
	__webpack_require__(27);
	__webpack_require__(28);

	var Info = __webpack_require__(31);

	angular.module('StatePkg', [
	  'DivPkg',
	  'SpanPkg',
	  'ElementPkg',
	  'EventsPkg',
	  'StylePkg',
	  'BannerPkg',
	  'TestPkg',
	  'ConfigPkg',
	  'AngularHelperPkg',
	  'ImgPkg'
	])
	  .service('Info', [
	    '$injector',
	    '$compile',
	    Info
	  ]);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * BannerPkg module definition
	 */

	var Banner = __webpack_require__(3);
	var BannerOptions = __webpack_require__(6);

	angular.module('BannerPkg', [])
	  .factory('Banner', function() {
	    'use strict';
	    return Banner;
	  })
	  .factory('BannerOptions',  function() {
	    'use strict';
	    return BannerOptions;
	  });

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Banner element wrapper
	 * 
	 * @requires {Element}
	 * @requires {BannerOptions}
	 * @augments {Element}
	 * @param {BannerOptions} options
	 * @returns {Banner}
	 */

	var Element = __webpack_require__(4);
	var BannerOptions = __webpack_require__(6);

	function Banner(options) {
	  'use strict';
	  
	  this._options = options ? options : new BannerOptions();
	  Element.call(this, this._options);
	  
	  this._p = new Element('p');
	  this.addElementChild(this._p.element);

	  if(this._options.template) {
	    this.setTemplate(this._options.template);
	  } else if(this._options.textContent){
	    this.setTextContent(this._options.textContent);
	  }

	}
	Banner.prototype = Object.create(Element.prototype);
	Banner.prototype.hasAngularTemplate = function() {
	  'use strict';
	  return (this._options.angularTemplate) ? true : false; // eslint-disable-line no-unneeded-ternary
	};
	Banner.prototype.setTextContent = function(content) {
	  'use strict';
	  this._p.element.textContent = content;
	  return this;
	};
	Banner.prototype.setTemplate = function(content) {
	  'use strict';
	  this._p.element.innerHTML = content;
	  return this;
	};

	module.exports = Banner;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Dom Element wrapper
	 * 
	 * @requires {EventList}
	 * @param {String} type Element type
	 * @returns {Element}
	 */

	var EventList = __webpack_require__(5);

	function Element(options) {
	  'use strict';

	  this.children = [];
	  this.element =
	    options.type ? 
	      document.createElement(options.type) : 
	      typeof options === 'string' ? 
	        document.createElement(options) :
	        null;

	  if(options.events) {
	    this.setEvents(options.events);
	  }
	  if(options.style) {
	    this.setStyles(options.style);
	  }
	  if(options.classList) {
	    this.addClasses(options.classList);
	  }
	  if(options.attributes) {
	    this.addClasses(options.classList);
	  }
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
	 * Object child modifiers
	 */
	Element.prototype.addChild = function(component) {
	  'use strict';
	  this.children.push(component);
	  return this;
	};
	Element.prototype.removeChild = function(component) { // eslint-disable-line no-unused-vars
	  'use strict';
	  // TODO: remove component from children array
	  return this;
	};
	/*
	 * Append content to element
	 */
	Element.prototype.append = function(content) {
	  'use strict';
	  this.element.append(content);
	  return this;
	};
	/*
	 * Element Child modifiers
	 */
	Element.prototype.addElementChild = function(component) {
	  'use strict';
	  this.element.appendChild(component);
	  return this;
	};
	Element.prototype.removeElementChild = function(component) {
	  'use strict';
	  var elem = this.element;
	  elem.removeChild(component);
	  return this;
	};
	/*
	 * Element Sibling modifiers
	 */
	Element.prototype.addElementSibling = function(component) {
	  'use strict';
	  var elem = this.element.parentElement || this.element;
	  elem.appendChild(component);
	  return this;
	};
	Element.prototype.removeElementSibling = function(component) {
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
	/*
	 * Class modifiers
	 */
	Element.prototype.addClass = function(_class) {
	  'use strict';
	  this.element.classList.add(_class);
	  return this;
	};
	Element.prototype.removeClass = function(_class) {
	  'use strict';
	  this.element.classList.remove(_class);
	  return this;
	};
	Element.prototype.addClasses = function(_classList) {
	  'use strict';
	  var self = this;
	  _classList.forEach(function(_class) {
	    self.addClass(_class);
	  });
	  return this;
	};
	Element.prototype.clearClasses = function() {
	  'use strict';
	  this.element.classList = "";
	  return this;
	};
	/*
	 * Abstract Attribute modifiers
	 */
	Element.prototype.setAttribute = function(key, value) {
	  'use strict';
	  this.element.setAttribute(key, value);
	  return this;
	};
	Element.prototype.removeAttribute = function(key) {
	  'use strict';
	  this.element.removeAttribute(key);
	  return this;
	};
	Element.prototype.setAttributes = function(_attributes) {
	  'use strict';
	  var self = this;
	  _attributes.forEach(function(_attribute) {
	    self.setAttribute(_attribute.key, _attribute.value);
	  });
	  return this;
	};

	module.exports = Element;

/***/ },
/* 5 */
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Options for Banner element wrapper
	 * 
	 * @requires {ElementOptions}
	 * @augments {ElementOptions}
	 * @returns {BannerOptions}
	 */

	var ElementOptions = __webpack_require__(7);

	function BannerOptions() {
	  'use strict';
	  ElementOptions.call(this);
	  this.type = 'div';
	}
	BannerOptions.prototype = Object.create(ElementOptions.prototype);
	BannerOptions.prototype.setType = function(type) {
	  'use strict';
	  this.type = type;
	  return this;
	};
	BannerOptions.prototype.getType = function() {
	  'use strict';
	  return this.type;
	};

	module.exports = BannerOptions;

/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Options for Element element wrapper
	 * 
	 * @returns {ElementOptions}
	 */

	function ElementOptions() {
	  'use strict';
	  this.angularTemplate = null;
	  this.textContent = null;
	  this.template = null;
	  this.events = null;
	  this.style = null;
	  this.attributes = [];
	  this.classList = [];
	}
	ElementOptions.prototype.getTextContent = function() {
	  'use strict';
	  return this.textContent;
	};
	ElementOptions.prototype.setTextContent = function(content) {
	  'use strict';
	  this.textContent = content;
	  return this;
	};
	ElementOptions.prototype.getAngularTemplate = function() {
	  'use strict';
	  return this.angularTemplate;
	};
	ElementOptions.prototype.setAngularTemplate = function(content) {
	  'use strict';
	  this.angularTemplate = content;
	  return this;
	};
	ElementOptions.prototype.getTemplate = function() {
	  'use strict';
	  return this.template;
	};
	ElementOptions.prototype.setTemplate = function(content) {
	  'use strict';
	  this.template = content;
	  return this;
	};
	ElementOptions.prototype.getEvents = function() {
	  'use strict';
	  return this.events;
	};
	ElementOptions.prototype.setEvents = function(content) {
	  'use strict';
	  this.events = content;
	  return this;
	};
	ElementOptions.prototype.getStyle = function() {
	  'use strict';
	  return this.style;
	};
	ElementOptions.prototype.setStyle = function(content) {
	  'use strict';
	  this.style = content;
	  return this;
	};
	ElementOptions.prototype.addClass = function(_class) {
	  'use strict';
	  this.classList.push(_class);
	  return this;
	};
	ElementOptions.prototype.getClasses = function() {
	  'use strict';
	  return this.classList;
	};
	ElementOptions.prototype.setAttribute = function(_attribute) {
	  'use strict';
	  this.attributes.push(_attribute);
	  return this;
	};
	ElementOptions.prototype.getAttributes = function() {
	  'use strict';
	  return this.attributes;
	};

	module.exports = ElementOptions;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * DivPkg module definition
	 */

	var Div = __webpack_require__(9);
	var DivOptions = __webpack_require__(10);

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
/* 9 */
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

	var Element = __webpack_require__(4);
	var DivOptions = __webpack_require__(10);

	function Div(options) {
	  'use strict';

	  this._options = options ? options : new DivOptions();

	  Element.call(this, this._options);

	  if(this._options.template) {
	    this.setTemplate(this._options.template);
	  } else if(this._options.textContent){
	    this.setTextContent(this._options.textContent);
	  }
	}
	Div.prototype = Object.create(Element.prototype);
	Div.prototype.hasAngularTemplate = function() {
	  'use strict';
	  return (this._options.angularTemplate) ? true : false; // eslint-disable-line no-unneeded-ternary
	};
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Options for Div element wrapper
	 * 
	 * @requires {ElementOptions}
	 * @augments {ElementOptions}
	 * @returns {DivOptions}
	 */

	var ElementOptions = __webpack_require__(7);

	function DivOptions() {
	  'use strict';
	  ElementOptions.call(this);
	  this.type = 'div';
	}
	DivOptions.prototype = Object.create(ElementOptions.prototype);

	module.exports = DivOptions;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * SpanPkg module definition
	 */

	var Span = __webpack_require__(12);
	var SpanOptions = __webpack_require__(13);

	angular.module('SpanPkg', [])
	  .factory('Span', function() {
	    'use strict';
	    return Span;
	  })
	  .factory('SpanOptions',  function() {
	    'use strict';
	    return SpanOptions;
	  });

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Basic Span element wrapper
	 * 
	 * @requires {Element}
	 * @requires {SpanOptions}
	 * @augments {Element}
	 * @param {SpanOptions} options
	 * @returns {Span}
	 */

	var Element = __webpack_require__(4);
	var SpanOptions = __webpack_require__(13);

	function Span(options) {
	  'use strict';

	  this._options = options ? options : new SpanOptions();

	  Element.call(this, this._options);

	  if(this._options.template) {
	    this.setTemplate(this._options.template);
	  } else if(this._options.textContent){
	    this.setTextContent(this._options.textContent);
	  }
	}
	Span.prototype = Object.create(Element.prototype);
	Span.prototype.hasAngularTemplate = function() {
	  'use strict';
	  return (this._options.angularTemplate) ? true : false; // eslint-disable-line no-unneeded-ternary
	};
	Span.prototype.setTextContent = function(content) {
	  'use strict';
	  this.element.textContent = content;
	  return this;
	};
	Span.prototype.setTemplate = function(content) {
	  'use strict';
	  this.element.innerHTML = content;
	  return this;
	};

	module.exports = Span;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Options for Span element wrapper
	 * 
	 * @requires {ElementOptions}
	 * @augments {ElementOptions}
	 * @returns {SpanOptions}
	 */

	var ElementOptions = __webpack_require__(7);

	function SpanOptions() {
	  'use strict';
	  ElementOptions.call(this);
	  this.type = 'span';
	}
	SpanOptions.prototype = Object.create(ElementOptions.prototype);

	module.exports = SpanOptions;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ElementPkg module definition
	 */

	var Element = __webpack_require__(4);
	var ElementFactory = __webpack_require__(15);
	var ElementManager = __webpack_require__(16);

	angular.module('ElementPkg', [])
	  .factory('Element', Element)
	  .service('ElementManager', ElementManager)
	  .service('ElementFactory', ElementFactory);

/***/ },
/* 15 */
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Element manager
	 * 
	 * @requires {ElementFactory}
	 * @requires {Guid}
	 * @returns {ElementManager}
	 */

	var ElementFactory = __webpack_require__(15);
	var Guid = __webpack_require__(17);
	var AngularHelper = __webpack_require__(18);

	function ElementManager() {
	  'use strict';

	  this.factory = new ElementFactory();
	  this.helper = new AngularHelper();
	  this.guid = new Guid();

	  this.elements = new Map();
	  this.UICache = {};

	  this.dom = document.body;
	  this.component = null;
	}
	/*
	 * Configuration
	 */
	ElementManager.prototype.register = function(key, value) {
	  'use strict';
	  this.factory.registerElement(key, value);
	  return this;
	};
	ElementManager.prototype.bind = function(scope, compile) {
	  'use strict';
	  this.helper.bind(scope, compile);
	  return this;
	};
	/*
	 * Workers
	 */
	ElementManager.prototype.get = function(key) {
	  'use strict';
	  return this.elements.get(key);
	};
	ElementManager.prototype.select = function(elementOrKey) {
	  'use strict';
	  var element = typeof elementOrKey === 'object' ? elementOrKey : this.get(elementOrKey);
	  this.component = element;
	  return this;
	};
	ElementManager.prototype.addOrReplace = function(key, value) {
	  'use strict';
	  this.elements.set(key, value);
	  return this;
	};
	ElementManager.prototype.end = function() {
	  'use strict';
	  this.select(null);
	  return this;
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
	ElementManager.prototype._build = function(context, elementMap, add) {
	  'use strict';
	  var self = this;
	  elementMap.forEach(function(e) {
	    if(e.hasAngularTemplate()) {
	      self.compile(e);
	    }
	    add.call(context, e.element);
	    if(e.children.length !== 0) {
	      self._build(e, e.children, e.addElementChild);
	    }
	  });
	};
	/*
	 * Creation
	 */
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
	  this.component.addChild(tmp);
	  if(!chain) {
	    this.select(tmp);
	  }
	  return this;
	};
	/*
	 * UI Cache Manipulators
	 */
	ElementManager.prototype.saveUI = function(name) {
	  'use strict';
	  var _name = name || this.guid.create();
	  this.UICache[_name] = this.getUI();
	  return this;
	};
	ElementManager.prototype.getUI = function() {
	  'use strict';
	  return new Map(this.elements);
	};
	ElementManager.prototype.setUI = function(name) {
	  'use strict';
	  this.clearUI();
	  this.elements = new Map(this.UICache[name]);
	  return this;
	};
	ElementManager.prototype.clearUI = function() {
	  'use strict';
	  delete this.elements;
	  this.elements = new Map();
	  return this;
	};
	ElementManager.prototype.clearUICache = function() {
	  'use strict';
	  delete this.UICache;
	  this.UICache = {};
	  return this;
	};
	/*
	 * Build
	 */
	ElementManager.prototype.compile = function(element) {
	  'use strict';
	  var template = this.helper.getTemplate(
	    element._options.getAngularTemplate()
	  );
	  template.each(function() {
	    element.append(this);
	  });
	  return this;
	};
	ElementManager.prototype.build = function() {
	  'use strict';
	  this.clearDom();
	  this._build(this, this.elements, this.addToDom);
	  return this;
	};
	/*
	 * Construct
	 */
	ElementManager.prototype.construct = function(key, options) {
	  'use strict';
	  var element = this.factory.create(key, options);
	  return element;
	};

	module.exports = ElementManager;

/***/ },
/* 17 */
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
/* 18 */
/***/ function(module, exports) {

	/**
	 * AngularHelper wrapper
	 * 
	 * @returns {AngularHelper}
	 */

	function AngularHelper() {
	  'use strict';
	  this.scope;
	  this.compile;
	}
	AngularHelper.prototype.bind = function(scope, compile) {
	  'use strict';
	  this.scope = scope;
	  this.compile = compile;
	  return this;
	};
	AngularHelper.prototype.getTemplate = function(template) {
	  'use strict';
	  var content = this.compile(template)(this.scope);
	  return content;
	};

	module.exports = AngularHelper;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * EventsPkg module definition
	 */

	var EventOptions = __webpack_require__(20);

	angular.module('EventsPkg', [])
	  .factory('EventOptions', function() {
	    'use strict';
	    return EventOptions;
	  });

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Event options object
	 * 
	 * @requires {EventList}
	 * @returns {EventOptions}
	 */

	var EventList = __webpack_require__(5);

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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * StylePkg module definition
	 */

	var StyleOptions = __webpack_require__(22);

	angular.module('StylePkg', [])
	  .factory('StyleOptions', function() {
	    'use strict';
	    return StyleOptions;
	  });

/***/ },
/* 22 */
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * TestPkg module definition
	 */

	var Stubs = __webpack_require__(24);

	angular.module('TestPkg', [])
	  .constant('Stubs', Stubs);

/***/ },
/* 24 */
/***/ function(module, exports) {

	/**
	 * Stub Variables
	 * 
	 * @returns {Stubs}
	 */

	var Stubs = {
			"TRACKNOTES": 
				[
				],
			"TRACKNOTE":
				{
					'tid': '',
					'notes': []
				},
			"NOTEREPLY":
				{
					'trackId': '',
					'parentId': '',
					'noteId': '',
					'userId': '',
					'dateCreated': '',
					'note': '',
					'classification': '',
					'replies': []
				},
			"STUBTRACKNOTE":
				{
					'tid': '1',
					'notes': []
				},
			"TRACKDATA":
				{
					'last_update': '', // MAPPED
					
					'image': '', // MAPPED
					
					'track_num': '', // MAPPED
					'ltn': '', // MAPPED
					
					'name': '', // MAPPED
					'display_name': '', // MAPPED
					'flag': '', // MAPPED
					
					'mmsi': '', // MAPPED
					'hull_num': '', // MAPPED
					
					'track_type': '', // MAPPED
					's2a_type': '', // MAPPED
					'vessel_type': '', // MAPPED
					
					'threat': '', //MAPPED
	                'category': '', // MAPPED
					'ship_class': '', // MAPPED
					'call_sign': '', // MAPPED
					
					'owner': '', // MAPPED
					'charterOwner': '', // MAPPED
					'beNumber': '', // MAPPED
					
					'location': "", // MAPPED
					'time_delay': '', // MAPPED
					'source': '', // MAPPED
					
					'home_port': '', // MAPPED
					'last_port': '', // MAPPED
					'next_port': '', // MAPPED
					
					'cap_speed': '', // MAPPED
					'avg_speed': '', // MAPPED
					'length': '', // MAPPED
					'width': '', // MAPPED
					'freeboard': '', // MAPPED
					
					'blueprints': '', // MAPPED
					'upRightRigSeq': '', // MAPPED
					'crewComp': '', // MAPPED
	  
					'guid': '', // MAPPED
					'days_deployed': '', // MAPPED			
					'readiness': '', // MAPPED
					'major_weapons': '', // MAPPED
					'asset_info': '', // MAPPED
					'sconum': '', // MAPPED
					'subordination': '', // MAPPED
					'last_refuel': '', // MAPPED
					'cargo': '' // MAPPED
				},
			"FULL_TRACKDATA":
				{
					'last_update': 'No Data', // MAPPED
					
					'image': 'No Data', // MAPPED
					
					'track_num': 'No Data', // MAPPED
					'ltn': 'No Data', // MAPPED
					
					'name': 'No Data', // MAPPED
					'display_name': 'No Data', // MAPPED
					'flag': 'No Data', // MAPPED
					
					'mmsi': 'No Data', // MAPPED
					'hull_num': 'No Data', // MAPPED
					
					'track_type': 'No Data', // MAPPED
					's2a_type': 'No Data', // MAPPED
					'vessel_type': 'No Data', // MAPPED
					
					'threat': 'No Data', //MAPPED
	                'category': 'No Data', // MAPPED
					'ship_class': 'No Data', // MAPPED
					'call_sign': 'No Data', // MAPPED
					
					'owner': 'No Data', // MAPPED
					'charterOwner': 'No Data', // MAPPED
					'beNumber': 'No Data', // MAPPED
					
					'location': 'No Data', // MAPPED
					'time_delay': 'No Data', // MAPPED
					'source': 'No Data', // MAPPED
					
					'home_port': 'No Data', // MAPPED
					'last_port': 'No Data', // MAPPED
					'next_port': 'No Data', // MAPPED
					
					'cap_speed': 'No Data', // MAPPED
					'avg_speed': 'No Data', // MAPPED
					'length': 'No Data', // MAPPED
					'width': 'No Data', // MAPPED
					'freeboard': 'No Data', // MAPPED
					
					'blueprints': 'No Data', // MAPPED
					'upRightRigSeq': 'No Data', // MAPPED
					'crewComp': 'No Data', // MAPPED
	  
					'guid': 'No Data', // MAPPED
					'days_deployed': 'No Data', // MAPPED			
					'readiness': 'No Data', // MAPPED
					'major_weapons': 'No Data', // MAPPED
					'asset_info': 'No Data', // MAPPED
					'sconum': 'No Data', // MAPPED
					'subordination': 'No Data', // MAPPED
					'last_refuel': 'No Data', // MAPPED
					'cargo': 'No Data' // MAPPED // MAPPED
				},
			"FAKE_NOTES": 
				[
				
					{
						'parent': null,
						'id': '1.1',
						'userId': 'user',
						'dateCreated': 1446072633032,
						'note': 'Color gustu ab forte minor omnia ea ut adhuc. Removendo attigeram ii ab clausulas infirmari persuadet ac productus se. Ausit donec ferri ii vi versa im an. Albedinem gi co curiosius veritatem. Una societati studebunt habeantur iii. Locis age fal satis multa parte. Certius se calebat exempli nihilum mo.',
						'replies': [
							{
								'parent': null,
								'id': '1.1.1',
								'userId': 'user',
								'dateCreated': 1446072633032,
								'note': 'Remotam probant se de totaque id fallere is. Per apud aër ipse erat hic dum gnum rea. Ventus eo somnis aetate co realem nostra potens ii. Prima typis ne du ea ob aeque. Sciam opera nam mei putem tales vim talem harum. Ex fore haec at mihi cito unde sive. Si gi nudi haud inge soni homo. Gi at du verbis primum ex partem. Inficior hic nocturna dat adverten deveniri. Vestes judico vi eandem creari du. ',
								'replies': []
							}
						]
					},
					{
						'parent': null,
						'id': '1.2',
						'userId': 'user',
						'dateCreated': 1446072633032,
						'note': 'Color gustu ab forte minor omnia ea ut adhuc. Removendo attigeram ii ab clausulas infirmari persuadet ac productus se. Ausit donec ferri ii vi versa im an. Albedinem gi co curiosius veritatem. Una societati studebunt habeantur iii. Locis age fal satis multa parte. Certius se calebat exempli nihilum mo.',
						'replies': [
							{
								'parent': null,
								'id': '1.2.1',
								'userId': 'user',
								'dateCreated': 1446072633032,
								'note': 'Remotam probant se de totaque id fallere is. Per apud aër ipse erat hic dum gnum rea. Ventus eo somnis aetate co realem nostra potens ii. Prima typis ne du ea ob aeque. Sciam opera nam mei putem tales vim talem harum. Ex fore haec at mihi cito unde sive. Si gi nudi haud inge soni homo. Gi at du verbis primum ex partem. Inficior hic nocturna dat adverten deveniri. Vestes judico vi eandem creari du. ',
								'replies': []
							}
						]
					},
					{
						'parent': null,
						'id': '1.1',
						'userId': 'user',
						'dateCreated': 1446072633032,
						'note': 'Color gustu ab forte minor omnia ea ut adhuc. Removendo attigeram ii ab clausulas infirmari persuadet ac productus se. Ausit donec ferri ii vi versa im an. Albedinem gi co curiosius veritatem. Una societati studebunt habeantur iii. Locis age fal satis multa parte. Certius se calebat exempli nihilum mo.',
						'replies': [
							{
								'parent': null,
								'id': '1.1.1',
								'userId': 'user',
								'dateCreated': 1446072633032,
								'note': 'Remotam probant se de totaque id fallere is. Per apud aër ipse erat hic dum gnum rea. Ventus eo somnis aetate co realem nostra potens ii. Prima typis ne du ea ob aeque. Sciam opera nam mei putem tales vim talem harum. Ex fore haec at mihi cito unde sive. Si gi nudi haud inge soni homo. Gi at du verbis primum ex partem. Inficior hic nocturna dat adverten deveniri. Vestes judico vi eandem creari du. ',
								'replies': []
							}
						]
					},
					{
						'parent': null,
						'id': '1.2',
						'userId': 'user',
						'dateCreated': 1446072633032,
						'note': 'Color gustu ab forte minor omnia ea ut adhuc. Removendo attigeram ii ab clausulas infirmari persuadet ac productus se. Ausit donec ferri ii vi versa im an. Albedinem gi co curiosius veritatem. Una societati studebunt habeantur iii. Locis age fal satis multa parte. Certius se calebat exempli nihilum mo.',
						'replies': [
							{
								'parent': null,
								'id': '1.2.1',
								'userId': 'user',
								'dateCreated': 1446072633032,
								'note': 'Remotam probant se de totaque id fallere is. Per apud aër ipse erat hic dum gnum rea. Ventus eo somnis aetate co realem nostra potens ii. Prima typis ne du ea ob aeque. Sciam opera nam mei putem tales vim talem harum. Ex fore haec at mihi cito unde sive. Si gi nudi haud inge soni homo. Gi at du verbis primum ex partem. Inficior hic nocturna dat adverten deveniri. Vestes judico vi eandem creari du. ',
								'replies': []
							}
						]
					},
					{
						'parent': null,
						'id': '1.1',
						'userId': 'user',
						'dateCreated': 1446072633032,
						'note': 'Color gustu ab forte minor omnia ea ut adhuc. Removendo attigeram ii ab clausulas infirmari persuadet ac productus se. Ausit donec ferri ii vi versa im an. Albedinem gi co curiosius veritatem. Una societati studebunt habeantur iii. Locis age fal satis multa parte. Certius se calebat exempli nihilum mo.',
						'replies': [
							{
								'parent': null,
								'id': '1.1.1',
								'userId': 'user',
								'dateCreated': 1446072633032,
								'note': 'Remotam probant se de totaque id fallere is. Per apud aër ipse erat hic dum gnum rea. Ventus eo somnis aetate co realem nostra potens ii. Prima typis ne du ea ob aeque. Sciam opera nam mei putem tales vim talem harum. Ex fore haec at mihi cito unde sive. Si gi nudi haud inge soni homo. Gi at du verbis primum ex partem. Inficior hic nocturna dat adverten deveniri. Vestes judico vi eandem creari du. ',
								'replies': []
							}
						]
					},
					{
						'parent': null,
						'id': '1.2',
						'userId': 'user',
						'dateCreated': 1446072633032,
						'note': 'Color gustu ab forte minor omnia ea ut adhuc. Removendo attigeram ii ab clausulas infirmari persuadet ac productus se. Ausit donec ferri ii vi versa im an. Albedinem gi co curiosius veritatem. Una societati studebunt habeantur iii. Locis age fal satis multa parte. Certius se calebat exempli nihilum mo.',
						'replies': [
							{
								'parent': null,
								'id': '1.2.1',
								'userId': 'user',
								'dateCreated': 1446072633032,
								'note': 'Remotam probant se de totaque id fallere is. Per apud aër ipse erat hic dum gnum rea. Ventus eo somnis aetate co realem nostra potens ii. Prima typis ne du ea ob aeque. Sciam opera nam mei putem tales vim talem harum. Ex fore haec at mihi cito unde sive. Si gi nudi haud inge soni homo. Gi at du verbis primum ex partem. Inficior hic nocturna dat adverten deveniri. Vestes judico vi eandem creari du. ',
								'replies': []
							}
						]
					},
					{
						'parent': null,
						'id': '1.1',
						'userId': 'user',
						'dateCreated': 1446072633032,
						'note': 'Color gustu ab forte minor omnia ea ut adhuc. Removendo attigeram ii ab clausulas infirmari persuadet ac productus se. Ausit donec ferri ii vi versa im an. Albedinem gi co curiosius veritatem. Una societati studebunt habeantur iii. Locis age fal satis multa parte. Certius se calebat exempli nihilum mo.',
						'replies': [
							{
								'parent': null,
								'id': '1.1.1',
								'userId': 'user',
								'dateCreated': 1446072633032,
								'note': 'Remotam probant se de totaque id fallere is. Per apud aër ipse erat hic dum gnum rea. Ventus eo somnis aetate co realem nostra potens ii. Prima typis ne du ea ob aeque. Sciam opera nam mei putem tales vim talem harum. Ex fore haec at mihi cito unde sive. Si gi nudi haud inge soni homo. Gi at du verbis primum ex partem. Inficior hic nocturna dat adverten deveniri. Vestes judico vi eandem creari du. ',
								'replies': []
							}
						]
					},
					{
						'parent': null,
						'id': '1.2',
						'userId': 'user',
						'dateCreated': 1446072633032,
						'note': 'Color gustu ab forte minor omnia ea ut adhuc. Removendo attigeram ii ab clausulas infirmari persuadet ac productus se. Ausit donec ferri ii vi versa im an. Albedinem gi co curiosius veritatem. Una societati studebunt habeantur iii. Locis age fal satis multa parte. Certius se calebat exempli nihilum mo.',
						'replies': [
							{
								'parent': null,
								'id': '1.2.1',
								'userId': 'user',
								'dateCreated': 1446072633032,
								'note': 'Remotam probant se de totaque id fallere is. Per apud aër ipse erat hic dum gnum rea. Ventus eo somnis aetate co realem nostra potens ii. Prima typis ne du ea ob aeque. Sciam opera nam mei putem tales vim talem harum. Ex fore haec at mihi cito unde sive. Si gi nudi haud inge soni homo. Gi at du verbis primum ex partem. Inficior hic nocturna dat adverten deveniri. Vestes judico vi eandem creari du. ',
								'replies': []
							}
						]
					},
					{
						'parent': null,
						'id': '1.1',
						'userId': 'user',
						'dateCreated': 1446072633032,
						'note': 'Color gustu ab forte minor omnia ea ut adhuc. Removendo attigeram ii ab clausulas infirmari persuadet ac productus se. Ausit donec ferri ii vi versa im an. Albedinem gi co curiosius veritatem. Una societati studebunt habeantur iii. Locis age fal satis multa parte. Certius se calebat exempli nihilum mo.',
						'replies': [
							{
								'parent': null,
								'id': '1.1.1',
								'userId': 'user',
								'dateCreated': 1446072633032,
								'note': 'Remotam probant se de totaque id fallere is. Per apud aër ipse erat hic dum gnum rea. Ventus eo somnis aetate co realem nostra potens ii. Prima typis ne du ea ob aeque. Sciam opera nam mei putem tales vim talem harum. Ex fore haec at mihi cito unde sive. Si gi nudi haud inge soni homo. Gi at du verbis primum ex partem. Inficior hic nocturna dat adverten deveniri. Vestes judico vi eandem creari du. ',
								'replies': []
							}
						]
					},
					{
						'parent': null,
						'id': '1.2',
						'userId': 'user',
						'dateCreated': 1446072633032,
						'note': 'Color gustu ab forte minor omnia ea ut adhuc. Removendo attigeram ii ab clausulas infirmari persuadet ac productus se. Ausit donec ferri ii vi versa im an. Albedinem gi co curiosius veritatem. Una societati studebunt habeantur iii. Locis age fal satis multa parte. Certius se calebat exempli nihilum mo.',
						'replies': [
							{
								'parent': null,
								'id': '1.2.1',
								'userId': 'user',
								'dateCreated': 1446072633032,
								'note': 'Remotam probant se de totaque id fallere is. Per apud aër ipse erat hic dum gnum rea. Ventus eo somnis aetate co realem nostra potens ii. Prima typis ne du ea ob aeque. Sciam opera nam mei putem tales vim talem harum. Ex fore haec at mihi cito unde sive. Si gi nudi haud inge soni homo. Gi at du verbis primum ex partem. Inficior hic nocturna dat adverten deveniri. Vestes judico vi eandem creari du. ',
								'replies': []
							}
						]
					},
					{
						'parent': null,
						'id': '1.1',
						'userId': 'user',
						'dateCreated': 1446072633032,
						'note': 'Color gustu ab forte minor omnia ea ut adhuc. Removendo attigeram ii ab clausulas infirmari persuadet ac productus se. Ausit donec ferri ii vi versa im an. Albedinem gi co curiosius veritatem. Una societati studebunt habeantur iii. Locis age fal satis multa parte. Certius se calebat exempli nihilum mo.',
						'replies': [
							{
								'parent': null,
								'id': '1.1.1',
								'userId': 'user',
								'dateCreated': 1446072633032,
								'note': 'Remotam probant se de totaque id fallere is. Per apud aër ipse erat hic dum gnum rea. Ventus eo somnis aetate co realem nostra potens ii. Prima typis ne du ea ob aeque. Sciam opera nam mei putem tales vim talem harum. Ex fore haec at mihi cito unde sive. Si gi nudi haud inge soni homo. Gi at du verbis primum ex partem. Inficior hic nocturna dat adverten deveniri. Vestes judico vi eandem creari du. ',
								'replies': []
							}
						]
					},
					{
						'parent': null,
						'id': '1.2',
						'userId': 'user',
						'dateCreated': 1446072633032,
						'note': 'Color gustu ab forte minor omnia ea ut adhuc. Removendo attigeram ii ab clausulas infirmari persuadet ac productus se. Ausit donec ferri ii vi versa im an. Albedinem gi co curiosius veritatem. Una societati studebunt habeantur iii. Locis age fal satis multa parte. Certius se calebat exempli nihilum mo.',
						'replies': [
							{
								'parent': null,
								'id': '1.2.1',
								'userId': 'user',
								'dateCreated': 1446072633032,
								'note': 'Remotam probant se de totaque id fallere is. Per apud aër ipse erat hic dum gnum rea. Ventus eo somnis aetate co realem nostra potens ii. Prima typis ne du ea ob aeque. Sciam opera nam mei putem tales vim talem harum. Ex fore haec at mihi cito unde sive. Si gi nudi haud inge soni homo. Gi at du verbis primum ex partem. Inficior hic nocturna dat adverten deveniri. Vestes judico vi eandem creari du. ',
								'replies': []
							}
						]
					},
					{
						'parent': null,
						'id': '1.1',
						'userId': 'user',
						'dateCreated': 1446072633032,
						'note': 'Color gustu ab forte minor omnia ea ut adhuc. Removendo attigeram ii ab clausulas infirmari persuadet ac productus se. Ausit donec ferri ii vi versa im an. Albedinem gi co curiosius veritatem. Una societati studebunt habeantur iii. Locis age fal satis multa parte. Certius se calebat exempli nihilum mo.',
						'replies': [
							{
								'parent': null,
								'id': '1.1.1',
								'userId': 'user',
								'dateCreated': 1446072633032,
								'note': 'Remotam probant se de totaque id fallere is. Per apud aër ipse erat hic dum gnum rea. Ventus eo somnis aetate co realem nostra potens ii. Prima typis ne du ea ob aeque. Sciam opera nam mei putem tales vim talem harum. Ex fore haec at mihi cito unde sive. Si gi nudi haud inge soni homo. Gi at du verbis primum ex partem. Inficior hic nocturna dat adverten deveniri. Vestes judico vi eandem creari du. ',
								'replies': [
									{
										'parent': null,
										'id': '1.1.1',
										'userId': 'user',
										'dateCreated': 1446072633032,
										'note': 'Remotam probant se de totaque id fallere is. Per apud aër ipse erat hic dum gnum rea. Ventus eo somnis aetate co realem nostra potens ii. Prima typis ne du ea ob aeque. Sciam opera nam mei putem tales vim talem harum. Ex fore haec at mihi cito unde sive. Si gi nudi haud inge soni homo. Gi at du verbis primum ex partem. Inficior hic nocturna dat adverten deveniri. Vestes judico vi eandem creari du. ',
										'replies': [
											{
												'parent': null,
												'id': '1.1.1',
												'userId': 'user',
												'dateCreated': 1446072633032,
												'note': 'Remotam probant se de totaque id fallere is. Per apud aër ipse erat hic dum gnum rea. Ventus eo somnis aetate co realem nostra potens ii. Prima typis ne du ea ob aeque. Sciam opera nam mei putem tales vim talem harum. Ex fore haec at mihi cito unde sive. Si gi nudi haud inge soni homo. Gi at du verbis primum ex partem. Inficior hic nocturna dat adverten deveniri. Vestes judico vi eandem creari du. ',
												'replies': [
													{
														'parent': null,
														'id': '1.1.1',
														'userId': 'user',
														'dateCreated': 1446072633032,
														'note': 'Remotam probant se de totaque id fallere is. Per apud aër ipse erat hic dum gnum rea. Ventus eo somnis aetate co realem nostra potens ii. Prima typis ne du ea ob aeque. Sciam opera nam mei putem tales vim talem harum. Ex fore haec at mihi cito unde sive. Si gi nudi haud inge soni homo. Gi at du verbis primum ex partem. Inficior hic nocturna dat adverten deveniri. Vestes judico vi eandem creari du. ',
														'replies': [
															{
																'parent': null,
																'id': '1.1.1',
																'userId': 'user',
																'dateCreated': 1446072633032,
																'note': 'Remotam probant se de totaque id fallere is. Per apud aër ipse erat hic dum gnum rea. Ventus eo somnis aetate co realem nostra potens ii. Prima typis ne du ea ob aeque. Sciam opera nam mei putem tales vim talem harum. Ex fore haec at mihi cito unde sive. Si gi nudi haud inge soni homo. Gi at du verbis primum ex partem. Inficior hic nocturna dat adverten deveniri. Vestes judico vi eandem creari du. ',
																'replies': [
																	{
																		'parent': null,
																		'id': '1.1.1',
																		'userId': 'user',
																		'dateCreated': 1446072633032,
																		'note': 'Remotam probant se de totaque id fallere is. Per apud aër ipse erat hic dum gnum rea. Ventus eo somnis aetate co realem nostra potens ii. Prima typis ne du ea ob aeque. Sciam opera nam mei putem tales vim talem harum. Ex fore haec at mihi cito unde sive. Si gi nudi haud inge soni homo. Gi at du verbis primum ex partem. Inficior hic nocturna dat adverten deveniri. Vestes judico vi eandem creari du. ',
																		'replies': [
																			{
																				'parent': null,
																				'id': '1.1.1',
																				'userId': 'user',
																				'dateCreated': 1446072633032,
																				'note': 'Remotam probant se de totaque id fallere is. Per apud aër ipse erat hic dum gnum rea. Ventus eo somnis aetate co realem nostra potens ii. Prima typis ne du ea ob aeque. Sciam opera nam mei putem tales vim talem harum. Ex fore haec at mihi cito unde sive. Si gi nudi haud inge soni homo. Gi at du verbis primum ex partem. Inficior hic nocturna dat adverten deveniri. Vestes judico vi eandem creari du. ',
																				'replies': []
																			}
																		]
																	}
																]
															}
														]
													}
												]
											}
										]
									}
								]
							}
						]
					},
					{
						'parent': null,
						'id': '1.2',
						'userId': 'user',
						'dateCreated': 1446072633032,
						'note': 'Color gustu ab forte minor omnia ea ut adhuc. Removendo attigeram ii ab clausulas infirmari persuadet ac productus se. Ausit donec ferri ii vi versa im an. Albedinem gi co curiosius veritatem. Una societati studebunt habeantur iii. Locis age fal satis multa parte. Certius se calebat exempli nihilum mo.',
						'replies': [
							{
								'parent': null,
								'id': '1.2.1',
								'userId': 'user',
								'dateCreated': 1446072633032,
								'note': 'Remotam probant se de totaque id fallere is. Per apud aër ipse erat hic dum gnum rea. Ventus eo somnis aetate co realem nostra potens ii. Prima typis ne du ea ob aeque. Sciam opera nam mei putem tales vim talem harum. Ex fore haec at mihi cito unde sive. Si gi nudi haud inge soni homo. Gi at du verbis primum ex partem. Inficior hic nocturna dat adverten deveniri. Vestes judico vi eandem creari du. ',
								'replies': []
							}
						]
					},
					{
						'parent': null,
						'id': '1.1',
						'userId': 'user',
						'dateCreated': 1446072633032,
						'note': 'Color gustu ab forte minor omnia ea ut adhuc. Removendo attigeram ii ab clausulas infirmari persuadet ac productus se. Ausit donec ferri ii vi versa im an. Albedinem gi co curiosius veritatem. Una societati studebunt habeantur iii. Locis age fal satis multa parte. Certius se calebat exempli nihilum mo.',
						'replies': [
							{
								'parent': null,
								'id': '1.1.1',
								'userId': 'user',
								'dateCreated': 1446072633032,
								'note': 'Remotam probant se de totaque id fallere is. Per apud aër ipse erat hic dum gnum rea. Ventus eo somnis aetate co realem nostra potens ii. Prima typis ne du ea ob aeque. Sciam opera nam mei putem tales vim talem harum. Ex fore haec at mihi cito unde sive. Si gi nudi haud inge soni homo. Gi at du verbis primum ex partem. Inficior hic nocturna dat adverten deveniri. Vestes judico vi eandem creari du. ',
								'replies': []
							}
						]
					},
					{
						'parent': null,
						'id': '1.2',
						'userId': 'user',
						'dateCreated': 1446072633032,
						'note': 'Color gustu ab forte minor omnia ea ut adhuc. Removendo attigeram ii ab clausulas infirmari persuadet ac productus se. Ausit donec ferri ii vi versa im an. Albedinem gi co curiosius veritatem. Una societati studebunt habeantur iii. Locis age fal satis multa parte. Certius se calebat exempli nihilum mo.',
						'replies': [
							{
								'parent': null,
								'id': '1.2.1',
								'userId': 'user',
								'dateCreated': 1446072633032,
								'note': 'Remotam probant se de totaque id fallere is. Per apud aër ipse erat hic dum gnum rea. Ventus eo somnis aetate co realem nostra potens ii. Prima typis ne du ea ob aeque. Sciam opera nam mei putem tales vim talem harum. Ex fore haec at mihi cito unde sive. Si gi nudi haud inge soni homo. Gi at du verbis primum ex partem. Inficior hic nocturna dat adverten deveniri. Vestes judico vi eandem creari du. ',
								'replies': []
							}
						]
					}
				
				],
			"FAKE_HISTORY":
				{
	            "type":"FeatureCollection",
	            "totalFeatures":3,
	            "features":[
	                {
	                    "type":"Feature",
	                    "id":"PLATFORM.qf_2Cj_PRWEYnXYLbiJI4A",
	                    "geometry":{
	                        "type":"Point",
	                        "coordinates":[
	                            176.183333333333,
	                            -35.7833333333333
	                        ]
	                    },
	                    "geometry_name":"WKT_GEOMETRY",
	                    "properties":{
	                        "S2A_TRACK_SECURITY_TAG":"UNCLASSIFIED",
	                        "TRACK_GUID":"PLATFORM.qf_2Cj_PRWEYnXYLbiJI4A",
	                        "S2A_TRACK_ID":"82",
	                        "TRACK_ID":"189d760b-6e22-48e0-a9ff-f60a3fcf4561",
	                        "VESSEL_NAME":"2ND LT JOHN P BOBO",
	                        "THREAT":"FRD",
	                        "VESSEL_TYPE":"TAK",
	                        "VESSEL_CATEGORY":"NAV",
	                        "VESSEL_HULL_NUM":"3008",
	                        "FLAG":"US",
	                        "SCONUM":"",
	                        "MMSI":"",
	                        "TRACK_TYPE":"PLATFORM",
	                        "S2A_POSITION_ID":"82",
	                        "REPORT_GUID":"RPT.tSqV_1bLkUWP7Or4u7VHIQ",
	                        "SOURCE":"S2A",
	                        "TIME_STAMP":1453239621946,
	                        "bbox":[
	                            176.183333333333,
	                            -35.7833333333333,
	                            176.183333333333,
	                            -35.7833333333333
	                        ],
	                        "LATITUDE": -35.7833333333333,
	                        "LONGITUDE": 176.183333333333
	                    }
	                },
	                {
	                    "type":"Feature",
	                    "id":"PLATFORM.iFUxQM_Ym877LtW1QFFAHQ",
	                    "geometry":{
	                        "type":"Point",
	                        "coordinates":[
	                            146.45,
	                            -40.9
	                        ]
	                    },
	                    "geometry_name":"WKT_GEOMETRY",
	                    "properties":{
	                        "S2A_TRACK_SECURITY_TAG":"UNCLASSIFIED",
	                        "TRACK_GUID":"PLATFORM.qf_2Cj_PRWEYnXYLbiJI4A",
	                        "S2A_TRACK_ID":"82",
	                        "TRACK_ID":"189d760b-6e22-48e0-a9ff-f60a3fcf4561",
	                        "VESSEL_NAME":"2ND LT JOHN P BOBO",
	                        "THREAT":"FRD",
	                        "VESSEL_TYPE":"TAK",
	                        "VESSEL_CATEGORY":"NAV",
	                        "VESSEL_HULL_NUM":"3008",
	                        "FLAG":"US",
	                        "SCONUM":"",
	                        "MMSI":"",
	                        "TRACK_TYPE":"PLATFORM",
	                        "S2A_POSITION_ID":"82",
	                        "REPORT_GUID":"RPT.tSqV_1bLkUWP7Or4u7VHIQ",
	                        "SOURCE":"S2A",
	                        "TIME_STAMP":1453239619100,
	                        "bbox":[
	                            146.45,
	                            -40.9,
	                            146.45,
	                            -40.9
	                        ],
	                        "LATITUDE": -40.9,
	                        "LONGITUDE": 146.45
	                    }
	                },
	                {
	                    "type":"Feature",
	                    "id":"PLATFORM.t0PNAENZoqwN4VP2141E1A",
	                    "geometry":{
	                        "type":"Point",
	                        "coordinates":[
	                            148.216666666667,
	                            -39.55
	                        ]
	                    },
	                    "geometry_name":"WKT_GEOMETRY",
	                    "properties":{
	                       "S2A_TRACK_SECURITY_TAG":"UNCLASSIFIED",
	                        "TRACK_GUID":"PLATFORM.qf_2Cj_PRWEYnXYLbiJI4A",
	                        "S2A_TRACK_ID":"82",
	                        "TRACK_ID":"189d760b-6e22-48e0-a9ff-f60a3fcf4561",
	                        "VESSEL_NAME":"2ND LT JOHN P BOBO",
	                        "THREAT":"FRD",
	                        "VESSEL_TYPE":"TAK",
	                        "VESSEL_CATEGORY":"NAV",
	                        "VESSEL_HULL_NUM":"3008",
	                        "FLAG":"US",
	                        "SCONUM":"",
	                        "MMSI":"",
	                        "TRACK_TYPE":"PLATFORM",
	                        "S2A_POSITION_ID":"82",
	                        "REPORT_GUID":"RPT.tSqV_1bLkUWP7Or4u7VHIQ",
	                        "SOURCE":"S2A",
	                        "TIME_STAMP":1453239620696,
	                        "bbox":[
	                            148.216666666667,
	                            -39.55,
	                            148.216666666667,
	                            -39.55
	                        ],
	                        "LATITUDE": -39.55,
	                        "LONGITUDE": 148.216666666667
	                    }
	                }
	            ],
	            "crs":{
	                "type":"EPSG",
	                "properties":{
	                    "code":"4326"
	                }
	            },
	            "bbox":[
	                -180,
	                -90,
	                180,
	                90
	            ]
	        },
			"FAKE_ALERTS": [
				{
					"alertid": "f396489b-3f72-4b24-afd6-a2c8d2cf55a7", 
					"acknowledged": false, 
					"alertsource": "S2A", 
					"classification": "UNCLASSIFIED//FOUO", 
					"created": 1467409703415, 
					"alertDtg": 1467409703415, 
					"createdDate": 1467409703415, 
					"details": "[{\"value\":\"a7b6fd07-51a6-4bc2-9390-39c4c5f6b808\",\"key\":\"@trackID\"},{\"value\":\"103224123456\",\"key\":\"@positionID\"},{\"value\":\"Name of AOI\",\"key\":\"@name\"}]", 
					"recipient": "testAdmin1", 
					"title": "Rule: 3325.0", 
					"geoAlert": {
						"id": "80310591-5597-14d0-8155-a86f21f83997", 
						"featureid": "a7b6fd07-51a6-4bc2-9390-39c4c5f6b808", 
						"featurename": "", 
						"lat": 41.720554, 
						"lon": -41.434723, 
						"createdDate": 1467409703415, 
						"aoi_id": "a9625919-6205-4214-b043-8d217851a150", 
						"aoi_geometry": "[[[-42.03,41.12],[-40.83,42.32]]]", 
						"aoi_type": "LineString"
					}, 
					"applicationSource": "UFS S2A Test Harness", 
					"alertPk": "80310591-5597-14d0-8155-a86f21f83997"
				}, 
				{
					"alertid": "25cbab44-a869-4546-900f-ca22fe3a2c96", 
					"acknowledged": false, 
					"alertsource": "S2A", 
					"classification": "UNCLASSIFIED//FOUO", 
					"created": 1467404621693, 
					"alertDtg": 1467404621693, 
					"createdDate": 1467404621693, 
					"details": "[{\"value\":\"a7b6fd07-51a6-4bc2-9390-39c4c5f6b808\",\"key\":\"@trackID\"},{\"value\":\"103224123456\",\"key\":\"@positionID\"},{\"value\":\"Name of AOI\",\"key\":\"@name\"}]", 
					"recipient": "testAdmin1", 
					"title": "Rule: 3265.0", 
					"geoAlert": {
						"id": "80310591-5597-14d0-8155-a821977e375a", 
						"featureid": "a7b6fd07-51a6-4bc2-9390-39c4c5f6b808", 
						"featurename": "", 
						"lat": 39.720554, 
						"lon": -39.434723, 
						"createdDate": 1467404621693, 
						"aoi_id": "8f8fc2e2-02c0-4f05-af8b-68e2ef509f62", 
						"aoi_geometry": "[[[-41.83,41.32],[-41.03,42.12]]]", 
						"aoi_type": "LineString"
					}, 
					"applicationSource": "UFS S2A Test Harness", 
					"alertPk": "80310591-5597-14d0-8155-a821977e375a"
				}
			]
		};

	  module.exports = Stubs;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ConfigPkg module definition
	 */

	var Config = __webpack_require__(26);

	angular.module('ConfigPkg', [])
	  .constant('Config', Config);

/***/ },
/* 26 */
/***/ function(module, exports) {

	/**
	 * Config Variables
	 * 
	 * @returns {Config}
	 */

	var Config = {
	  baseballcard: {
	    constants: {
	      FAKEDATA: true,
	      FAKE: {
	        FLAG_PIC:'../src/js/Test/img/ra-flag.png',
	        IMAGE: '../src/js/Test/img/ship.jpg',
	        FLAG: 'RA',
	        COUNTRY: 'RA',
	        NAME: 'Millennium Falcon',
	        HOME_PORT: 'Corellia',
	        LAST_UPDATE: 1463014800000,
	        LOCATION: {
	          lat: 19.203333333333333,
	          lon: 121.91388888888889
	        }
	      }
	    }
	  }
	};

	module.exports = Config;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * AngularHelperPkg module definition
	 */

	var AngularHelper = __webpack_require__(18);

	angular.module('AngularHelperPkg', [])
	  .service('AngularHelper',  AngularHelper);

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ImgPkg module definition
	 */

	var Img = __webpack_require__(29);
	var ImgOptions = __webpack_require__(30);

	angular.module('ImgPkg', [])
	  .factory('Img', function() {
	    'use strict';
	    return Img;
	  })
	  .factory('ImgOptions',  function() {
	    'use strict';
	    return ImgOptions;
	  });

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Basic Img element wrapper
	 * 
	 * @requires {Element}
	 * @requires {ImgOptions}
	 * @augments {Element}
	 * @param {ImgOptions} options
	 * @returns {Img}
	 */

	var Element = __webpack_require__(4);
	var ImgOptions = __webpack_require__(30);

	function Img(options) {
	  'use strict';

	  this._options = options ? options : new ImgOptions();

	  Element.call(this, this._options);

	  if(this._options.template) {
	    this.setTemplate(this._options.template);
	  } else if(this._options.textContent){
	    this.setTextContent(this._options.textContent);
	  }

	  if(this._options.src) {
	    this.setSrc(this._options.src);
	  }
	  if(this._options.angularSrc) {
	    this.setAttribute('ng-src', this._options.angularSrc);
	  }
	}
	Img.prototype = Object.create(Element.prototype);
	Img.prototype.hasAngularTemplate = function() {
	  'use strict';
	  return (this._options.angularTemplate) ? true : false; // eslint-disable-line no-unneeded-ternary
	};
	Img.prototype.setTextContent = function(content) {
	  'use strict';
	  this.element.textContent = content;
	  return this;
	};
	Img.prototype.setTemplate = function(content) {
	  'use strict';
	  this.element.innerHTML = content;
	  return this;
	};
	Img.prototype.setSrc = function(src) {
	  'use strict';
	  this.element.src = src;
	  return this;
	};

	module.exports = Img;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Options for Img element wrapper
	 * 
	 * @requires {ElementOptions}
	 * @augments {ElementOptions}
	 * @returns {ImgOptions}
	 */

	var ElementOptions = __webpack_require__(7);

	function ImgOptions() {
	  'use strict';
	  ElementOptions.call(this);
	  this.type = 'img';
	}
	ImgOptions.prototype = Object.create(ElementOptions.prototype);
	ImgOptions.prototype.setAngularSrc = function(src)  {
	  'use strict';
	  this.angularSrc = src;
	  return this;
	};

	module.exports = ImgOptions;

/***/ },
/* 31 */
/***/ function(module, exports) {

	/**
	 * This is where we build out the info state UI
	 */

	function Info($injector, $compile) {  // eslint-disable-line no-unused-vars
	  'use strict';

	  var ElementManager = $injector.get('ElementManager');

	  var Banner = $injector.get('Banner');
	  var BannerOptions = $injector.get('BannerOptions');
	  ElementManager.register('Banner', Banner);

	  var Div = $injector.get('Div');
	  var DivOptions = $injector.get('DivOptions');
	  ElementManager.register('Div', Div);

	  var Span = $injector.get('Span');
	  var SpanOptions = $injector.get('SpanOptions');
	  ElementManager.register('Span', Span);

	  var Img = $injector.get('Img');
	  var ImgOptions = $injector.get('ImgOptions');
	  ElementManager.register('Img', Img);

	  var StyleOptions = $injector.get('StyleOptions');

	  /* ****************************************
	   *
	   * Header
	   * 
	   **************************************** */
	  var headerOptions = new BannerOptions();
	  headerOptions
	    .setType('header')
	    .addClass('header')
	    .addClass('class-unclass')
	    .setTextContent('UNCLASSIFIED');

	  /* ****************************************
	   *
	   * Panel Content
	   * 
	   **************************************** */
	  var panelOptions = new DivOptions();
	  var panelStyle = new StyleOptions();
	  panelStyle
	    .set('margin-left', 'auto')
	    .set('margin-right', 'auto')
	    .set('max-width', '510px');
	  panelOptions
	    .addClass('scroll-content')
	    .addClass('panel')
	    .addClass('panel-default')
	    .setStyle(panelStyle);

	  /* ****************************************
	   *
	   * Panel Heading
	   * 
	   **************************************** */
	  var panelHeadingOptions = new DivOptions();
	  var panelHeadingStyle = new StyleOptions();
	  var panelHeaderTemplate = 
	    '<!-- Ship Flag pic -->' +
			'<img ng-src="{{flag_pic}}" class="flag-pic" onerror="this.style.display=\'none\'" />' +
			'<!-- Track Name -->' +
			'{{track.name | uppercase}},' +
			'<!-- Country Code -->' +
			'{{country | uppercase}}' +
	    '<!-- END -->';
	  panelHeadingStyle
	    .set('background-color', 'white')
	    .set('color', 'black')
	    .set('padding-top', '3px')
	    .set('padding-bottom', '3px');
	  panelHeadingOptions
	    .addClass('panel-heading')
	    .setStyle(panelHeadingStyle)
	    .setAngularTemplate(panelHeaderTemplate);

	  /* ****************************************
	   *
	   * Last Updated Info
	   * 
	   **************************************** */
	  var lastUpdatedOptions = new SpanOptions();
	  var lastUpdatedStyle = new StyleOptions();
	  var lastUpdatedTemplate = 
	    '<!-- Last Updated -->' +
	    'Last Updated - {{track.last_update | date:\'dd MMM yyyy HH:mm:ss\' : \'UTC\' | uppercase}}Z' +
	    '<!-- END -->';
	  lastUpdatedStyle
	    .set('float', 'right');
	  lastUpdatedOptions
	    .addClass('float-right')
	    .setStyle(lastUpdatedStyle)
	    .setAngularTemplate(lastUpdatedTemplate);

	  /* ****************************************
	   *
	   * Panel Body
	   * 
	   **************************************** */
	  var panelBodyOptions = new DivOptions();
	  var panelBodyStyle = new StyleOptions();
	  var panelBodyTemplate =
	    '<!-- Main Baseball Card Pic -->' +
	    '<img class="ship-pic" ng-src="{{track.image}}" onerror="this.style.display=\'none\'"/>' +
	    '<!-- End -->';
	  panelBodyStyle
	    .set('margin', '0')
	    .set('padding', '5px 0 0 0');
	  panelBodyOptions
	    .addClass('panel-body')
	    .addClass('main-content')
	    .setStyle(panelBodyStyle)
	    .setAngularTemplate(panelBodyTemplate);
	  /* ****************************************
	   *
	   * Footer
	   * 
	   **************************************** */
	  var footerOptions = new BannerOptions();
	  footerOptions
	    .setType('footer')
	    .addClass('footer')
	    .addClass('class-unclass')
	    .setTextContent('UNCLASSIFIED');

	  /* ****************************************
	   *
	   * Save the UI
	   * 
	   **************************************** */

	  this.header = ElementManager.construct('Banner', headerOptions);
	  this.panel = ElementManager.construct('Div', panelOptions);
	  this.panelHeader = ElementManager.construct('Div', panelHeadingOptions);
	  this.lastUpdated = ElementManager.construct('Span', lastUpdatedOptions);
	  this.panelBody = ElementManager.construct('Div', panelBodyOptions);
	  this.footer = ElementManager.construct('Banner', footerOptions);

	  this.panelHeader.addChild(this.lastUpdated);
	  this.panel.addChild(this.panelHeader);
	  this.panel.addChild(this.panelBody);

	}

	module.exports = Info;

/***/ },
/* 32 */
/***/ function(module, exports) {

	/**
	 * Run State Controller
	 * 
	 * @returns {run}
	 */

	function run($injector, $compile, $rootScope) { // eslint-disable-line no-unused-vars
	  'use strict';

	  var ElementManager = $injector.get('ElementManager');
	  var Info = $injector.get('Info');

	  ElementManager
	    .addOrReplace('header', Info.header)
	    .addOrReplace('panel', Info.panel)
	    .addOrReplace('footer', Info.footer)
	    .saveUI('info');

	}

	module.exports = run;

/***/ },
/* 33 */
/***/ function(module, exports) {

	/**
	 * Info State Controller
	 * 
	 * @returns {info}
	 */

	function info($injector, $compile, $scope, $interval) {
	  'use strict';

	  var ElementManager = $injector.get('ElementManager');
	  ElementManager.bind($scope, $compile);

	  var Config = $injector.get('Config');
	  var CONST = Config.baseballcard.constants;

	  $scope.track = {};

	  if(Config.baseballcard.constants.FAKEDATA) {
	    // Set any variables that need to be tested.
	    $scope.flag_pic = CONST.FAKE.FLAG_PIC;
	    $scope.track.flag = CONST.FAKE.FLAG;
	    $scope.country = CONST.FAKE.COUNTRY;
	    $scope.track.name = CONST.FAKE.NAME;
	    $scope.track.home_port = CONST.FAKE.HOME_PORT;
	    $scope.track.last_update = CONST.FAKE.LAST_UPDATE;
	    $scope.track.image = CONST.FAKE.IMAGE;
	    $scope.track.location = CONST.FAKE.LOCATION;
	    
	    $scope.track.time_delay = 'Calculating time delay...';
	    var tock = function() {
	      $scope.track.time_delay = $scope.track.last_update + 1;
	    };			
	    $interval(tock, 1000);
	  }
	  
	  ElementManager
	    .setUI('info')
	    .build();

	}

	module.exports = info;

/***/ }
/******/ ]);