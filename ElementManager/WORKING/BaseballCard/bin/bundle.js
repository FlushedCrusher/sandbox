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

	var run = __webpack_require__(39);
	var InfoCtrl = __webpack_require__(40);

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
	    InfoCtrl
	  ]);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * StatePkg module definition
	 */
	'use strict'; // eslint-disable-line strict

	__webpack_require__(2);
	__webpack_require__(4);
	__webpack_require__(10);
	__webpack_require__(12);
	__webpack_require__(15);
	__webpack_require__(19);
	__webpack_require__(21);
	__webpack_require__(24);
	__webpack_require__(27);
	__webpack_require__(30);
	__webpack_require__(33);
	__webpack_require__(36);

	var Info = __webpack_require__(38);

	angular.module('StatePkg', [
	  'AngularHelperPkg',
	  'BannerPkg',
	  'ConfigPkg',
	  'DivPkg',
	  'ElementPkg',
	  'EventsPkg',
	  'ImgPkg',
	  'LiPkg',
	  'LinkPkg',
	  'NavPkg',
	  'SpanPkg',
	  'StylePkg',
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
	 * AngularHelperPkg module definition
	 */

	var AngularHelper = __webpack_require__(3);

	angular.module('AngularHelperPkg', [])
	  .service('AngularHelper',  AngularHelper);

/***/ },
/* 3 */
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
	AngularHelper.prototype.compileContent = function(content) {
	  'use strict';
	  var _content = this.compile(content)(this.scope);
	  return _content;
	};

	module.exports = AngularHelper;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * BannerPkg module definition
	 */

	var Banner = __webpack_require__(5);
	var BannerOptions = __webpack_require__(8);

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
/* 5 */
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

	var Element = __webpack_require__(6);
	var BannerOptions = __webpack_require__(8);

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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Dom Element wrapper
	 * 
	 * @requires {EventList}
	 * @param {String} type Element type
	 * @returns {Element}
	 */

	var EventList = __webpack_require__(7);

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
	    this.setAttributes(options.attributes);
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
/* 7 */
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Options for Banner element wrapper
	 * 
	 * @requires {ElementOptions}
	 * @augments {ElementOptions}
	 * @returns {BannerOptions}
	 */

	var ElementOptions = __webpack_require__(9);

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
/* 9 */
/***/ function(module, exports) {

	/**
	 * Options for Element element wrapper
	 * 
	 * @returns {ElementOptions}
	 */

	function ElementOptions() {
	  'use strict';
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
	ElementOptions.prototype.clone = function() {
	  'use strict';
	  var clone = this._assign(this);
	  return clone;
	};
	ElementOptions.prototype._assign = function(obj) {
	  'use strict';
	  var self = this;
	    if (obj === null || typeof obj !== 'object') {
	        return obj;
	    }
	    var temp = new obj.constructor();
	    for (var key in obj) {
	      if (!obj.hasOwnProperty(key)) {
	        continue;
	      }
	        temp[key] = self._assign(obj[key]);
	    }
	    return temp;
	};

	module.exports = ElementOptions;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ConfigPkg module definition
	 */

	var Config = __webpack_require__(11);

	angular.module('ConfigPkg', [])
	  .constant('Config', Config);

/***/ },
/* 11 */
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * DivPkg module definition
	 */

	var Div = __webpack_require__(13);
	var DivOptions = __webpack_require__(14);

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
/* 13 */
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

	var Element = __webpack_require__(6);
	var DivOptions = __webpack_require__(14);

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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Options for Div element wrapper
	 * 
	 * @requires {ElementOptions}
	 * @augments {ElementOptions}
	 * @returns {DivOptions}
	 */

	var ElementOptions = __webpack_require__(9);

	function DivOptions() {
	  'use strict';
	  ElementOptions.call(this);
	  this.type = 'div';
	}
	DivOptions.prototype = Object.create(ElementOptions.prototype);

	module.exports = DivOptions;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ElementPkg module definition
	 */

	var Element = __webpack_require__(6);
	var ElementFactory = __webpack_require__(16);
	var ElementManager = __webpack_require__(17);

	angular.module('ElementPkg', [])
	  .factory('Element', Element)
	  .service('ElementManager', ElementManager)
	  .service('ElementFactory', ElementFactory);

/***/ },
/* 16 */
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Element manager
	 * 
	 * @requires {ElementFactory}
	 * @requires {Guid}
	 * @returns {ElementManager}
	 */

	var ElementFactory = __webpack_require__(16);
	var Guid = __webpack_require__(18);
	var AngularHelper = __webpack_require__(3);

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
	ElementManager.prototype.compile = function() {
	  'use strict';
	  this.helper.compileContent(this.dom);
	  return this;
	};
	ElementManager.prototype.build = function() {
	  'use strict';
	  this.clearDom();
	  this._build(this, this.elements, this.addToDom);
	  this.compile();
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
/* 18 */
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

	var EventList = __webpack_require__(7);

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
	 * ImgPkg module definition
	 */

	var Img = __webpack_require__(22);
	var ImgOptions = __webpack_require__(23);

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
/* 22 */
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

	var Element = __webpack_require__(6);
	var ImgOptions = __webpack_require__(23);

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
	}
	Img.prototype = Object.create(Element.prototype);
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Options for Img element wrapper
	 * 
	 * @requires {ElementOptions}
	 * @augments {ElementOptions}
	 * @returns {ImgOptions}
	 */

	var ElementOptions = __webpack_require__(9);

	function ImgOptions() {
	  'use strict';
	  ElementOptions.call(this);
	  this.type = 'img';
	}
	ImgOptions.prototype = Object.create(ElementOptions.prototype);

	module.exports = ImgOptions;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * LiPkg module definition
	 */

	var Li = __webpack_require__(25);
	var LiOptions = __webpack_require__(26);

	angular.module('LiPkg', [])
	  .factory('Li', function() {
	    'use strict';
	    return Li;
	  })
	  .factory('LiOptions',  function() {
	    'use strict';
	    return LiOptions;
	  });

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Basic Li element wrapper
	 * 
	 * @requires {Element}
	 * @requires {LiOptions}
	 * @augments {Element}
	 * @param {LiOptions} options
	 * @returns {Li}
	 */

	var Element = __webpack_require__(6);
	var LiOptions = __webpack_require__(26);

	function Li(options) {
	  'use strict';

	  this._options = options ? options : new LiOptions();

	  Element.call(this, this._options);

	  if(this._options.template) {
	    this.setTemplate(this._options.template);
	  } else if(this._options.textContent){
	    this.setTextContent(this._options.textContent);
	  }
	  if(this._options.src) {
	    this.setSrc(this._options.src);
	  }
	}
	Li.prototype = Object.create(Element.prototype);
	Li.prototype.setTextContent = function(content) {
	  'use strict';
	  this.element.textContent = content;
	  return this;
	};
	Li.prototype.setTemplate = function(content) {
	  'use strict';
	  this.element.innerHTML = content;
	  return this;
	};

	module.exports = Li;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Options for Li element wrapper
	 * 
	 * @requires {ElementOptions}
	 * @augments {ElementOptions}
	 * @returns {LiOptions}
	 */

	var ElementOptions = __webpack_require__(9);

	function LiOptions() {
	  'use strict';
	  ElementOptions.call(this);
	  this.type = 'li';
	}
	LiOptions.prototype = Object.create(ElementOptions.prototype);

	module.exports = LiOptions;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * LinkPkg module definition
	 */

	var Link = __webpack_require__(28);
	var LinkOptions = __webpack_require__(29);

	angular.module('LinkPkg', [])
	  .factory('Link', function() {
	    'use strict';
	    return Link;
	  })
	  .factory('LinkOptions',  function() {
	    'use strict';
	    return LinkOptions;
	  });

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Basic Link element wrapper
	 * 
	 * @requires {Element}
	 * @requires {LinkOptions}
	 * @augments {Element}
	 * @param {LinkOptions} options
	 * @returns {Link}
	 */

	var Element = __webpack_require__(6);
	var LinkOptions = __webpack_require__(29);

	function Link(options) {
	  'use strict';

	  this._options = options ? options : new LinkOptions();

	  Element.call(this, this._options);

	  if(this._options.template) {
	    this.setTemplate(this._options.template);
	  } else if(this._options.textContent){
	    this.setTextContent(this._options.textContent);
	  }
	  if(this._options.src) {
	    this.setSrc(this._options.src);
	  }
	}
	Link.prototype = Object.create(Element.prototype);
	Link.prototype.setTextContent = function(content) {
	  'use strict';
	  this.element.textContent = content;
	  return this;
	};
	Link.prototype.setTemplate = function(content) {
	  'use strict';
	  this.element.innerHTML = content;
	  return this;
	};

	module.exports = Link;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Options for Link element wrapper
	 * 
	 * @requires {ElementOptions}
	 * @augments {ElementOptions}
	 * @returns {LinkOptions}
	 */

	var ElementOptions = __webpack_require__(9);

	function LinkOptions() {
	  'use strict';
	  ElementOptions.call(this);
	  this.type = 'a';
	}
	LinkOptions.prototype = Object.create(ElementOptions.prototype);

	module.exports = LinkOptions;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * NavPkg module definition
	 */

	var Nav = __webpack_require__(31);
	var NavOptions = __webpack_require__(32);

	angular.module('NavPkg', [])
	  .factory('Nav', function() {
	    'use strict';
	    return Nav;
	  })
	  .factory('NavOptions',  function() {
	    'use strict';
	    return NavOptions;
	  });

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Basic Nav element wrapper
	 * 
	 * @requires {Element}
	 * @requires {NavOptions}
	 * @augments {Element}
	 * @param {NavOptions} options
	 * @returns {Nav}
	 */

	var Element = __webpack_require__(6);
	var NavOptions = __webpack_require__(32);

	var Li = __webpack_require__(25);
	var LiOptions = __webpack_require__(26);

	var Link = __webpack_require__(28);
	var LinkOptions = __webpack_require__(29);

	var EventOptions = __webpack_require__(20);

	function Nav(options) {
	  'use strict';

	  this._options = options ? options : new NavOptions();
	  this._item_options = new LiOptions();
	  this._item_link_options = new LinkOptions();
	  this._item_events = new EventOptions();

	  Element.call(this, this._options);

	  if(this._options.template) {
	    this.setTemplate(this._options.template);
	  } else if(this._options.textContent){
	    this.setTextContent(this._options.textContent);
	  }
	  if(this._options.src) {
	    this.setSrc(this._options.src);
	  }

	  this.create();
	}
	Nav.prototype = Object.create(Element.prototype);
	Nav.prototype.create = function() {
	  'use strict';
	  this._item_events
	    .set('onclick', function() {
	      alert('clicked!');
	    });
	  this._item_options
	    .setAttribute({
	      key: 'role',
	      value: 'navigation'
	    })
	    .setEvents(this._item_events);
	};
	Nav.prototype.setTextContent = function(content) {
	  'use strict';
	  this.element.textContent = content;
	  return this;
	};
	Nav.prototype.setTemplate = function(content) {
	  'use strict';
	  this.element.innerHTML = content;
	  return this;
	};
	Nav.prototype.addItem = function(attrs) {
	  'use strict';
	  var _item = this.createItem(attrs);
	  this.addChild(_item);
	  return this;
	};
	Nav.prototype.createItem = function(attrs) {
	  'use strict';
	  var io = this._item_options.clone();
	  var lo = this._item_link_options.clone();
	  lo.setTextContent(attrs.text);
	  var _item = new Li(io);
	  var _link = new Link(lo);
	  _item.addChild(_link);
	  return _item;
	};

	module.exports = Nav;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Options for Nav element wrapper
	 * 
	 * @requires {ElementOptions}
	 * @augments {ElementOptions}
	 * @returns {NavOptions}
	 */

	var ElementOptions = __webpack_require__(9);

	function NavOptions() {
	  'use strict';
	  ElementOptions.call(this);
	  this.type = 'ul';
	  this.items = [];
	}
	NavOptions.prototype = Object.create(ElementOptions.prototype);
	NavOptions.prototype.addItem = function(item) {
	  'use strict';
	  this.items.push(item);
	  return this;
	};

	module.exports = NavOptions;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * SpanPkg module definition
	 */

	var Span = __webpack_require__(34);
	var SpanOptions = __webpack_require__(35);

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
/* 34 */
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

	var Element = __webpack_require__(6);
	var SpanOptions = __webpack_require__(35);

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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Options for Span element wrapper
	 * 
	 * @requires {ElementOptions}
	 * @augments {ElementOptions}
	 * @returns {SpanOptions}
	 */

	var ElementOptions = __webpack_require__(9);

	function SpanOptions() {
	  'use strict';
	  ElementOptions.call(this);
	  this.type = 'span';
	}
	SpanOptions.prototype = Object.create(ElementOptions.prototype);

	module.exports = SpanOptions;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * StylePkg module definition
	 */

	var StyleOptions = __webpack_require__(37);

	angular.module('StylePkg', [])
	  .factory('StyleOptions', function() {
	    'use strict';
	    return StyleOptions;
	  });

/***/ },
/* 37 */
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
/* 38 */
/***/ function(module, exports) {

	/**
	 * This is where we build out the info state UI
	 */

	function Info($injector, $compile) {  // eslint-disable-line no-unused-vars
	  'use strict';

	  var ElementManager = $injector.get('ElementManager');
	  window.ElementManager = ElementManager;

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

	  var Nav = $injector.get('Nav');
	  var NavOptions = $injector.get('NavOptions');
	  ElementManager.register('Nav', Nav);

	  var Li = $injector.get('Li');
	  var LiOptions = $injector.get('LiOptions');
	  ElementManager.register('Li', Li);

	  var Link = $injector.get('Link');
	  var LinkOptions = $injector.get('LinkOptions');
	  ElementManager.register('Link', Link);

	  var StyleOptions = $injector.get('StyleOptions');
	  var EventOptions = $injector.get('EventOptions');

	  /* ****************************************
	   *
	   * Header
	   * 
	   **************************************** */
	  var headerOptions = new BannerOptions();
	  headerOptions
	    .setType('header')
	    .addClass('header')
	    .addClass('class-top-secret')
	    .setTextContent('TOP SECRET');

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
	  panelHeadingStyle
	    .set('background-color', 'white')
	    .set('color', 'black')
	    .set('padding-top', '3px')
	    .set('padding-bottom', '3px');
	  panelHeadingOptions
	    .addClass('panel-heading')
	    .setStyle(panelHeadingStyle);
	  /* ****************************************
	   *
	   * Flag Pic
	   * 
	   **************************************** */
	  var flagPicOptions = new ImgOptions();
	  var flagPicEvents = new EventOptions();
	  flagPicEvents
	    .set('onerror', function() {
	      this.style.display = 'none';
	    });
	  flagPicOptions
	    .addClass('flag-pic')
	    .setAttribute({
	      key: 'ng-src',
	      value: '{{flag_pic}}'
	    })
	    .setEvents(flagPicEvents);

	  /* ****************************************
	   *
	   * Track Name
	   * 
	   **************************************** */
	  var trackNameOptions = new SpanOptions();
	  var trackNameTemplate =
	    '<!-- Track Name -->' +
			'{{track.name | uppercase}},';
	  trackNameOptions
	    .setTemplate(trackNameTemplate);

	  /* ****************************************
	   *
	   * Country Abbreviation
	   * 
	   **************************************** */
	  var countryOptions = new SpanOptions();
	  var countryTemplate = 
			'<!-- Country Code -->' +
			'{{country | uppercase}}';
	  countryOptions
	    .setTemplate(countryTemplate);

	  /* ****************************************
	   *
	   * Last Updated Info
	   * 
	   **************************************** */
	  var lastUpdatedOptions = new SpanOptions();
	  var lastUpdatedStyle = new StyleOptions();
	  var lastUpdatedTemplate = 
	    '<!-- Last Updated -->' +
	    'Last Updated - {{track.last_update | date:\'dd MMM yyyy HH:mm:ss\' : \'UTC\' | uppercase}}Z';
	  lastUpdatedStyle
	    .set('float', 'right');
	  lastUpdatedOptions
	    .addClass('float-right')
	    .setStyle(lastUpdatedStyle)
	    .setTemplate(lastUpdatedTemplate);

	  /* ****************************************
	   *
	   * Panel Body
	   * 
	   **************************************** */
	  var panelBodyOptions = new DivOptions();
	  var panelBodyStyle = new StyleOptions();
	  panelBodyStyle
	    .set('margin', '0')
	    .set('padding', '0');
	  panelBodyOptions
	    .addClass('panel-body')
	    .setStyle(panelBodyStyle);

	  /* ****************************************
	   *
	   * Ship Pic
	   * 
	   **************************************** */
	  var shipPicOptions = new ImgOptions();
	  var shipPicEvents = new EventOptions();
	  shipPicEvents
	    .set('onerror', function() {
	      this.style.display = 'none';
	    });
	  shipPicOptions
	    .addClass('ship-pic')
	    .setAttribute({
	      key: 'ng-src',
	      value: '{{track.image}}'
	    })
	    .setEvents(shipPicEvents);
	  
	  /* ****************************************
	   *
	   * Navigation Container
	   * 
	   **************************************** */
	  var navContainerOptions = new DivOptions();
	  var navContainerStyle = new StyleOptions();
	  navContainerStyle
	    .set('background-color', 'white');
	  navContainerOptions
	    .setStyle(navContainerStyle);

	  /* ****************************************
	   *
	   * Navigation Tabs
	   * 
	   **************************************** */
	  var navTabOptions = new NavOptions();
	  var navTabStyle = new StyleOptions();
	  navTabStyle
	    .set('padding-top', '5px');
	  navTabOptions
	    .addClass('nav')
	    .addClass('nav-tabs')
	    .setStyle(navTabStyle);

	  /* ****************************************
	   *
	   * Navigation Items
	   * 
	   **************************************** */
	  var tabOptions = new LiOptions();
	  var navEvents = new EventOptions();
	  navEvents
	    .set('onclick', function() {
	      alert('clicked!');
	    });
	  tabOptions
	    .setAttribute({
	      key: 'role',
	      value: 'navigation'
	    })
	    .setEvents(navEvents);
	  var activeTabOptions = tabOptions.clone();
	  activeTabOptions
	    .addClass('active');
	  var navLinkOptions = new LinkOptions();
	  navLinkOptions
	    .setAttribute({
	      key: 'href',
	      value: ''
	    })
	    .setAttribute({
	      key: 'ng-click',
	      value: ''
	    });
	  var infoNavLinkOptions = navLinkOptions.clone();
	  infoNavLinkOptions.setTextContent('Info');
	  var alertsNavLinkOptions = navLinkOptions.clone();
	  alertsNavLinkOptions.setTextContent('ActiveAlerts');
	  var notesNavLinkOptions = navLinkOptions.clone();
	  notesNavLinkOptions.setTextContent('Notes');
	  
	  /* ****************************************
	   *
	   * Footer
	   * 
	   **************************************** */
	  var footerOptions = new BannerOptions();
	  footerOptions
	    .setType('footer')
	    .addClass('footer')
	    .addClass('class-top-secret')
	    .setTextContent('TOP SECRET');

	  /* ****************************************
	   *
	   * Create the UI
	   * 
	   **************************************** */
	  // Create the pieces
	  this.header = ElementManager.construct('Banner', headerOptions);
	  this.panel = ElementManager.construct('Div', panelOptions);
	  
	  this.panelHeader = ElementManager.construct('Div', panelHeadingOptions);
	  this.flag_pic = ElementManager.construct('Img', flagPicOptions);
	  this.track_name = ElementManager.construct('Img', trackNameOptions);
	  this.country = ElementManager.construct('Img', countryOptions);
	  this.lastUpdated = ElementManager.construct('Span', lastUpdatedOptions);

	  this.panelBody = ElementManager.construct('Div', panelBodyOptions);
	  this.ship_pic = ElementManager.construct('Img', shipPicOptions);

	  this.navigation = ElementManager.construct('Div', navContainerOptions);
	  this.nav_tabs = ElementManager.construct('Nav', navTabOptions);
	  this.info_tab = ElementManager.construct('Li', activeTabOptions);
	  this.alerts_tab = ElementManager.construct('Li', tabOptions);
	  this.notes_tab = ElementManager.construct('Li', tabOptions);

	  this.info_tab_link = ElementManager.construct('Link', infoNavLinkOptions);
	  this.alerts_tab_link = ElementManager.construct('Link', alertsNavLinkOptions);
	  this.notes_tab_link = ElementManager.construct('Link', notesNavLinkOptions);

	  this.footer = ElementManager.construct('Banner', footerOptions);

	  // Put the pieces together
	  this.panelHeader
	    .addChild(this.flag_pic)
	    .addChild(this.track_name)
	    .addChild(this.country)
	    .addChild(this.lastUpdated);

	  this.info_tab.addChild(this.info_tab_link);
	  this.alerts_tab.addChild(this.alerts_tab_link);
	  this.notes_tab.addChild(this.notes_tab_link);

	  this.nav_tabs
	    .addChild(this.info_tab)
	    .addChild(this.alerts_tab)
	    .addChild(this.notes_tab);

	  this.navigation
	    .addChild(this.nav_tabs);

	  this.panelBody
	    .addChild(this.ship_pic)
	    .addChild(this.navigation);

	  this.panel
	    .addChild(this.panelHeader)
	    .addChild(this.panelBody);

	}

	module.exports = Info;

/***/ },
/* 39 */
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
/* 40 */
/***/ function(module, exports) {

	/**
	 * Info State Controller
	 * 
	 * @returns {InfoCtrl}
	 */

	function InfoCtrl($injector, $compile, $scope) {
	  'use strict';

	  var ElementManager = $injector.get('ElementManager');
	  ElementManager.bind($scope, $compile);

	  var Config = $injector.get('Config');
	  var CONST = Config.baseballcard.constants;

	  $scope.track = {};

	  if(Config.baseballcard.constants.FAKEDATA) {

	    $scope.flag_pic = CONST.FAKE.FLAG_PIC;
	    $scope.country = CONST.FAKE.COUNTRY;

	    $scope.track.flag = CONST.FAKE.FLAG;
	    $scope.track.name = CONST.FAKE.NAME;
	    $scope.track.home_port = CONST.FAKE.HOME_PORT;
	    $scope.track.last_update = CONST.FAKE.LAST_UPDATE;
	    $scope.track.image = CONST.FAKE.IMAGE;
	    $scope.track.location = CONST.FAKE.LOCATION; 
	    $scope.track.time_delay = 'Calculating time delay...';
	  }
	  
	  ElementManager
	    .setUI('info')
	    .build();

	}

	module.exports = InfoCtrl;

/***/ }
/******/ ]);