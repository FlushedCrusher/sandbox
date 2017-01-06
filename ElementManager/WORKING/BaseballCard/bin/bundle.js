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
	__webpack_require__(7);
	__webpack_require__(11);
	__webpack_require__(13);
	__webpack_require__(15);

	var info = __webpack_require__(18);

	angular.module('app',
	  [
	    'DivPkg',
	    'ElementPkg',
	    'EventsPkg',
	    'StylePkg',
	    'BannerPkg'
	  ])
	  .controller('info', [
	    '$injector',
	    info
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

	  var _options = options ? options : new DivOptions();

	  Element.call(this, _options);

	  if(_options.template) {
	    this.setTemplate(_options.template);
	  } else if(_options.textContent){
	    this.setTextContent(_options.textContent);
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

	function Element(options) {
	  'use strict';

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
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Options for Header element wrapper
	 * 
	 * @requires {ElementOptions}
	 * @augments {ElementOptions}
	 * @returns {DivOptions}
	 */

	var ElementOptions = __webpack_require__(6);

	function DivOptions() {
	  'use strict';
	  ElementOptions.call(this);
	  this.type = 'div';
	}
	DivOptions.prototype = Object.create(ElementOptions.prototype);

	module.exports = DivOptions;

/***/ },
/* 6 */
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

	module.exports = ElementOptions;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ElementPkg module definition
	 */

	var Element = __webpack_require__(3);
	var ElementFactory = __webpack_require__(8);
	var ElementManager = __webpack_require__(9);

	angular.module('ElementPkg', [])
	  .factory('Element', Element)
	  .service('ElementManager', ElementManager)
	  .service('ElementFactory', ElementFactory);

/***/ },
/* 8 */
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Element manager
	 * 
	 * @requires {ElementFactory}
	 * @requires {Guid}
	 * @returns {ElementManager}
	 */

	var ElementFactory = __webpack_require__(8);
	var Guid = __webpack_require__(10);

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
/* 10 */
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * EventsPkg module definition
	 */

	var EventOptions = __webpack_require__(12);

	angular.module('EventsPkg', [])
	  .factory('EventOptions', function() {
	    'use strict';
	    return EventOptions;
	  });

/***/ },
/* 12 */
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * StylePkg module definition
	 */

	var StyleOptions = __webpack_require__(14);

	angular.module('StylePkg', [])
	  .factory('StyleOptions', function() {
	    'use strict';
	    return StyleOptions;
	  });

/***/ },
/* 14 */
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * BannerPkg module definition
	 */

	var Banner = __webpack_require__(16);
	var BannerOptions = __webpack_require__(17);

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
/* 16 */
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

	var Element = __webpack_require__(3);
	var BannerOptions = __webpack_require__(17);

	function Banner(options) {
	  'use strict';
	  
	  var _options = options ? options : new BannerOptions();
	  Element.call(this, _options);
	  
	  this._p = new Element('p');
	  this.addChild(this._p.element);

	  if(options.template) {
	    this.setTemplate(options.template);
	  } else if(options.textContent){
	    this.setTextContent(options.textContent);
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Options for Banner element wrapper
	 * 
	 * @requires {ElementOptions}
	 * @augments {ElementOptions}
	 * @returns {BannerOptions}
	 */

	var ElementOptions = __webpack_require__(6);

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
/* 18 */
/***/ function(module, exports) {

	/**
	 * Info State Controller
	 * 
	 * @returns {info}
	 */

	function info($injector) {
	  'use strict';

	  var ElementManager = $injector.get('ElementManager');

	  var Banner = $injector.get('Banner');
	  var BannerOptions = $injector.get('BannerOptions');
	  ElementManager.register('Banner', Banner);

	  var Div = $injector.get('Div');
	  var DivOptions = $injector.get('DivOptions');
	  ElementManager.register('Div', Div);

	  var StyleOptions = $injector.get('StyleOptions');

	  var headerOptions = new BannerOptions();
	  headerOptions
	    .setType('header')
	    .addClass('header')
	    .addClass('class-unclass')
	    .setTextContent('UNCLASSIFIED');


	  var contentOptions = new DivOptions();
	  var contentStyle = new StyleOptions();
	  contentStyle
	  .set('margin-left', 'auto')
	  .set('margin-right', 'auto')
	  .set('max-width', '510px');
	  contentOptions
	    .addClass('scroll-content')
	    .setStyle(contentStyle);

	  var footerOptions = new BannerOptions();
	  footerOptions
	    .setType('footer')
	    .addClass('footer')
	    .addClass('class-unclass')
	    .setTextContent('UNCLASSIFIED');

	  ElementManager
	    .create('Banner', headerOptions)
	    .create('Div', contentOptions)
	    .create('Banner', footerOptions)
	    .build();

	}

	module.exports = info;

/***/ }
/******/ ]);