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
	__webpack_require__(18);
	__webpack_require__(20);

	var run = __webpack_require__(22);
	var info = __webpack_require__(23);

	angular.module('app',
	  [
	    'DivPkg',
	    'ElementPkg',
	    'EventsPkg',
	    'StylePkg',
	    'BannerPkg',
	    'TestPkg',
	    'AngularHelperPkg'
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

	  if(_options.template && typeof _options.template === 'object') {
	    this.append(_options.template);
	  } else if(_options.template){
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
	 * Append modifier
	 */
	Element.prototype.append = function(content) {
	  'use strict';
	  this.element.append(content);
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
	  this.UICache = {};
	  this.factory = new ElementFactory();
	  this.guid = new Guid();
	}
	ElementManager.prototype.saveUI = function(name) {
	  'use strict';
	  this.UICache[name] = this.getUI();
	  return this;
	};
	ElementManager.prototype.getUI = function() {
	  'use strict';
	  return new Map(this.elements);
	};
	ElementManager.prototype.setUI = function(name) {
	  'use strict';
	  delete this.elements;
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

	  if(_options.template && typeof _options.template === 'object') {
	    this.append(_options.template);
	  } else if(_options.template){
	    this.setTemplate(_options.template);
	  } else if(_options.textContent){
	    this.setTextContent(_options.textContent);
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
/***/ function(module, exports, __webpack_require__) {

	/**
	 * TestPkg module definition
	 */

	var Stubs = __webpack_require__(19);

	angular.module('TestPkg', [])
	  .constant('Stubs', Stubs);

/***/ },
/* 19 */
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * AngularHelperPkg module definition
	 */

	var AngularHelper = __webpack_require__(21);

	angular.module('AngularHelperPkg', [])
	  .service('AngularHelper',  AngularHelper);

/***/ },
/* 21 */
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
	  return content[0];
	};

	module.exports = AngularHelper;

/***/ },
/* 22 */
/***/ function(module, exports) {

	/**
	 * Run State Controller
	 * 
	 * @returns {run}
	 */

	function run($injector, $compile, $rootScope) {
	  'use strict';

	  var ElementManager = $injector.get('ElementManager');

	  var AngularHelper = $injector.get('AngularHelper');
	  AngularHelper.bind($rootScope, $compile);

	  var Banner = $injector.get('Banner');
	  var BannerOptions = $injector.get('BannerOptions');
	  ElementManager.register('Banner', Banner);

	  var Div = $injector.get('Div');
	  var DivOptions = $injector.get('DivOptions');
	  ElementManager.register('Div', Div);

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
	   * Main Content
	   * 
	   **************************************** */
	  var contentOptions = new DivOptions();
	  var contentStyle = new StyleOptions();
	  var contentTemplate = AngularHelper.getTemplate(
	    '<span>{{track.name | uppercase}}</span>'
	  );
	  contentStyle
	  .set('margin-left', 'auto')
	  .set('margin-right', 'auto')
	  .set('max-width', '510px');
	  contentOptions
	    .addClass('scroll-content')
	    .setStyle(contentStyle)
	    .setTemplate(contentTemplate);

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
	   * Build the UI
	   * 
	   **************************************** */
	  ElementManager
	    .create('Banner', headerOptions)
	    .create('Div', contentOptions)
	    .nest('Div', panelHeadingOptions)
	    .create('Banner', footerOptions)
	    .saveUI('info');

	}

	module.exports = run;

/***/ },
/* 23 */
/***/ function(module, exports) {

	/**
	 * Info State Controller
	 * 
	 * @returns {info}
	 */

	function info($injector, $compile, $scope) {
	  'use strict';

	  var ElementManager = $injector.get('ElementManager');

	  var Stubs = $injector.get('Stubs');
	  $scope.track = Stubs.FULL_TRACKDATA;

	  ElementManager
	    .setUI('info')
	    .build();

	}

	module.exports = info;

/***/ }
/******/ ]);