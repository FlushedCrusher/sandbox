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

	var run = __webpack_require__(57);
	var InfoCtrl = __webpack_require__(58);

	angular.module('app',
	  [
	    'ui.bootstrap',
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
	__webpack_require__(8);
	__webpack_require__(10);
	__webpack_require__(13);
	__webpack_require__(20);
	__webpack_require__(23);
	__webpack_require__(26);
	__webpack_require__(29);
	__webpack_require__(32);
	__webpack_require__(33);

	__webpack_require__(34);
	__webpack_require__(36);
	__webpack_require__(40);

	__webpack_require__(41);
	__webpack_require__(44);
	__webpack_require__(46);
	__webpack_require__(50);
	__webpack_require__(52);

	var Info = __webpack_require__(56);

	angular.module('StatePkg', [
	  'BannerPkg',
	  'ConfigPkg',
	  'DivPkg',
	  'GlyphBtnPkg',
	  'ImgPkg',
	  'LiPkg',
	  'LinkPkg',
	  'NavPkg',
	  'SpanPkg',
	  'StylePkg',

	  'AngularHelperPkg',
	  'ElementPkg',
	  'EventsPkg',

	  'ClassificationPkg',
	  'GlyphPkg',
	  'PanelPkg',
	  'ScrollablePkg',
	  'NavigationPkg'
	])
	  .service('Info', [
	    '$injector',
	    Info
	  ]);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * BannerPkg module definition
	 * 
	 * @requires {Banner}
	 * @requires {BannerOptions}
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
	    
	  this._p = new Element('p');

	  this._options = options ? options : new BannerOptions();
	  Element.call(this, this._options);

	  this.addElementChild(this._p.element);

	}
	Banner.prototype = Object.create(Element.prototype);
	/*
	 * Set the text content of the inner most element
	 * 
	 * @override
	 * @returns {Banner}
	 */
	Banner.prototype.setTextContent = function(content) {
	  'use strict';
	  this._p.element.textContent = content;
	  return this;
	};
	/*
	 * Set the template of the inner most element
	 * 
	 * @override
	 * @returns {Banner}
	 */
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
	 * @param {string | object} type Element type | Element options
	 * @returns {Element}
	 */

	var EventList = __webpack_require__(5);

	function Element(options) {
	  'use strict';
	  this.assign(options);
	}
	/*
	 * Assign options to the element
	 * 
	 * @param {object} options
	 * @returns {Element}
	 */
	Element.prototype.assign = function(options) {
	  'use strict';
	  this.children = [];
	  this.element =
	    options.type ? 
	      document.createElement(options.type) : 
	      typeof options === 'string' ? 
	        document.createElement(options) :
	        {};
	  if(options.template) {
	    this.setTemplate(options.template);
	  } else if(options.textContent){
	    this.setTextContent(options.textContent);
	  }
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
	  return this;
	};

	// Element inner content modifiers
	Element.prototype.setTextContent = function(content) {
	  'use strict';
	  this.element.textContent = content;
	  return this;
	};
	Element.prototype.setTemplate = function(content) {
	  'use strict';
	  this.element.innerHTML = content;
	  return this;
	};
	// Display modifiers
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
	// Visibility modifiers
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
	// Object child modifiers
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
	//  Append content to element
	Element.prototype.append = function(content) {
	  'use strict';
	  this.element.append(content);
	  return this;
	};
	// Element Child modifiers
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
	// Element Sibling modifiers
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
	// Event modifiers
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
	// Style modifiers
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
	// Class modifiers
	Element.prototype.hasClass = function(_class) {
	  'use strict';
	  return this.element.classList.contains(_class);
	};
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
	// Abstract Attribute modifiers
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
	/*
	 * Set type of element to create. Defaults to div
	 * 
	 * @param {string} type
	 * @returns {BannerOptions)}
	 */
	BannerOptions.prototype.setType = function(type) {
	  'use strict';
	  this.type = type;
	  return this;
	};
	/*
	 * Get the element type to create / that has been created
	 * 
	 * @returns {string} type
	 */
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
	  var clone = this._clone(this);
	  return clone;
	};
	ElementOptions.prototype._clone = function(obj) {
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
	        temp[key] = self._clone(obj[key]);
	    }
	    return temp;
	};

	module.exports = ElementOptions;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ConfigPkg module definition
	 */

	var Config = __webpack_require__(9);

	angular.module('ConfigPkg', [])
	  .constant('Config', Config);

/***/ },
/* 9 */
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * DivPkg module definition
	 * 
	 * @requires {Div}
	 * @requires {DivOptions}
	 */

	var Div = __webpack_require__(11);
	var DivOptions = __webpack_require__(12);

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
/* 11 */
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
	var DivOptions = __webpack_require__(12);

	function Div(options) {
	  'use strict';

	  this._options = options ? options : new DivOptions();
	  Element.call(this, this._options);

	}
	Div.prototype = Object.create(Element.prototype);

	module.exports = Div;

/***/ },
/* 12 */
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * GlyphBtnPkg module definition
	 * 
	 * @requires {GlyphBtn}
	 * @requires {GlyphBtnOptions}
	 */

	var GlyphBtn = __webpack_require__(14);
	var GlyphBtnOptions = __webpack_require__(15);

	angular.module('GlyphBtnPkg', [])
	  .factory('GlyphBtn', function() {
	    'use strict';
	    return GlyphBtn;
	  })
	  .factory('GlyphBtnOptions',  function() {
	    'use strict';
	    return GlyphBtnOptions;
	  });

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Basic GlyphBtn element wrapper
	 * 
	 * @requires {Element}
	 * @requires {GlyphBtnOptions}
	 * @requires {Span}
	 * @requires {SpanOptions}
	 * @requires {StyleOptions}
	 * @requires {EventOptions}
	 * @augments {Element}
	 * @param {GlyphBtnOptions} options
	 * @returns {GlyphBtn}
	 */

	var Element = __webpack_require__(4);
	var GlyphBtnOptions = __webpack_require__(15);

	var Span = __webpack_require__(16);
	var SpanOptions = __webpack_require__(17);

	var StyleOptions = __webpack_require__(18);
	var EventOptions = __webpack_require__(19);

	function GlyphBtn(options) {
	  'use strict';

	  this._options = options ? options : new GlyphBtnOptions();
	  this._icon_options = new SpanOptions();
	  this._icon_style = new StyleOptions();
	  this._icon_events = new EventOptions();

	  Element.call(this, this._options);

	}
	GlyphBtn.prototype = Object.create(Element.prototype);
	GlyphBtn.prototype.create = function(attrs) {
	  'use strict';
	  if(attrs.add) {
	    this.setIconAttributes(attrs.add);
	  }
	  if(attrs.style) {
	    this.setIconStyle(attrs.style);
	  }
	  if(attrs.events) {
	    this.setIconEvents(attrs.events);
	  }
	  if(attrs.callback) {
	    this.setScopedCallback(attrs.callback);
	  }
	  this._icon_options
	    .addClass(attrs.icon_package)
	    .addClass(attrs.icon)
	    .setStyle(this._icon_style)
	    .setEvents(this._icon_events);
	  var _icon = new Span(this._icon_options);
	  this.addChild(_icon);
	  return this;
	};
	GlyphBtn.prototype.setIconAttributes = function(_attrs) {
	  'use strict';
	  var self = this;
	  _attrs.forEach(function(_attr) {
	    self._icon_options.setAttribute(_attr);
	  });
	};
	GlyphBtn.prototype.setIconStyle = function(_styles) {
	  'use strict';
	  var self = this;
	  _styles.forEach(function(_style) {
	    self._icon_style.set(_style.key, _style.value);
	  });
	};
	GlyphBtn.prototype.setIconEvents = function(_events) {
	  'use strict';
	  var self = this;
	  _events.forEach(function(_event) {
	     self._icon_events.set(_event.key, _event.value);
	  });
	};
	GlyphBtn.prototype.setScopedCallback = function(_callback) {
	  'use strict';
	  var self = this;
	  var unscoped = this._icon_events.get('onclick');
	  var newAction = function() {
	    if(unscoped) {
	      unscoped();
	    }
	    _callback.call(self.children[0]);
	  };
	  this._icon_events.set('onclick', newAction);
	};

	module.exports = GlyphBtn;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Options for GlyphBtn element wrapper
	 * 
	 * @requires {ElementOptions}
	 * @augments {ElementOptions}
	 * @returns {GlyphBtnOptions}
	 */

	var ElementOptions = __webpack_require__(7);

	function GlyphBtnOptions() {
	  'use strict';
	  ElementOptions.call(this);
	  this.type = 'a';
	}
	GlyphBtnOptions.prototype = Object.create(ElementOptions.prototype);

	module.exports = GlyphBtnOptions;

/***/ },
/* 16 */
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
	var SpanOptions = __webpack_require__(17);

	function Span(options) {
	  'use strict';

	  this._options = options ? options : new SpanOptions();
	  Element.call(this, this._options);

	}
	Span.prototype = Object.create(Element.prototype);

	module.exports = Span;

/***/ },
/* 17 */
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
/* 18 */
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
/* 19 */
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
	EventOptions.prototype.clone = function() {
	  'use strict';
	  var clone = this._clone(this);
	  return clone;
	};
	EventOptions.prototype._clone = function(obj) {
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
	        temp[key] = self._clone(obj[key]);
	    }
	    return temp;
	};

	module.exports = EventOptions;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ImgPkg module definition
	 * 
	 * @requires {Img}
	 * @requires {ImgOptions}
	 */

	var Img = __webpack_require__(21);
	var ImgOptions = __webpack_require__(22);

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
/* 21 */
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
	var ImgOptions = __webpack_require__(22);

	function Img(options) {
	  'use strict';

	  this._options = options ? options : new ImgOptions();
	  Element.call(this, this._options);

	  if(this._options.src) {
	    this.setSrc(this._options.src);
	  }
	}
	Img.prototype = Object.create(Element.prototype);
	Img.prototype.setSrc = function(src) {
	  'use strict';
	  this.element.src = src;
	  return this;
	};

	module.exports = Img;

/***/ },
/* 22 */
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

	module.exports = ImgOptions;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * LiPkg module definition
	 * 
	 * @requires {Li}
	 * @requires {LiOptions}
	 */

	var Li = __webpack_require__(24);
	var LiOptions = __webpack_require__(25);

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
/* 24 */
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

	var Element = __webpack_require__(4);
	var LiOptions = __webpack_require__(25);

	function Li(options) {
	  'use strict';

	  this._options = options ? options : new LiOptions();
	  Element.call(this, this._options);

	}
	Li.prototype = Object.create(Element.prototype);

	module.exports = Li;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Options for Li element wrapper
	 * 
	 * @requires {ElementOptions}
	 * @augments {ElementOptions}
	 * @returns {LiOptions}
	 */

	var ElementOptions = __webpack_require__(7);

	function LiOptions() {
	  'use strict';
	  ElementOptions.call(this);
	  this.type = 'li';
	}
	LiOptions.prototype = Object.create(ElementOptions.prototype);

	module.exports = LiOptions;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * LinkPkg module definition
	 * 
	 * @requires {Link}
	 * @requires {LinkOptions}
	 */

	var Link = __webpack_require__(27);
	var LinkOptions = __webpack_require__(28);

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
/* 27 */
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

	var Element = __webpack_require__(4);
	var LinkOptions = __webpack_require__(28);

	function Link(options) {
	  'use strict';

	  this._options = options ? options : new LinkOptions();
	  Element.call(this, this._options);

	  if(this._options.src) {
	    this.setSrc(this._options.src);
	  }
	}
	Link.prototype = Object.create(Element.prototype);

	module.exports = Link;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Options for Link element wrapper
	 * 
	 * @requires {ElementOptions}
	 * @augments {ElementOptions}
	 * @returns {LinkOptions}
	 */

	var ElementOptions = __webpack_require__(7);

	function LinkOptions() {
	  'use strict';
	  ElementOptions.call(this);
	  this.type = 'a';
	}
	LinkOptions.prototype = Object.create(ElementOptions.prototype);

	module.exports = LinkOptions;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * NavPkg module definition
	 * 
	 * @requires {Nav}
	 * @requires {NavOptions}
	 */

	var Nav = __webpack_require__(30);
	var NavOptions = __webpack_require__(31);

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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Basic Nav element wrapper
	 * 
	 * @requires {Element}
	 * @requires {NavOptions}
	 * @requires {Li}
	 * @requires {LiOptions}
	 * @requires {Link}
	 * @requires {LinkOptions}
	 * @requires {EventOptions}
	 * @augments {Element}
	 * @param {NavOptions} options
	 * @returns {Nav}
	 */

	var Element = __webpack_require__(4);
	var NavOptions = __webpack_require__(31);

	var Li = __webpack_require__(24);
	var LiOptions = __webpack_require__(25);

	var Link = __webpack_require__(27);
	var LinkOptions = __webpack_require__(28);

	var EventOptions = __webpack_require__(19);

	function Nav(options) {
	  'use strict';

	  this._options = options ? options : new NavOptions();
	  this._item_options = new LiOptions();
	  this._item_link_options = new LinkOptions();
	  this._item_events = new EventOptions();

	  Element.call(this, this._options);

	  this.create();
	}
	Nav.prototype = Object.create(Element.prototype);
	Nav.prototype.create = function() {
	  'use strict';
	  this._item_options
	    .setAttribute({
	      key: 'role',
	      value: 'navigation'
	    });
	  this._item_link_options
	    .setAttribute({
	      key: 'href',
	      value: ''
	    });
	};
	Nav.prototype.addItems = function(items) {
	  'use strict';
	  var self = this;
	  items.forEach(function(attrs) {
	    self.addItem(attrs);
	  });
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
	  var itemOptions = this._item_options.clone();
	  var linkOptions = this._item_link_options.clone();
	  var linkEvents = this._item_events.clone();

	  linkEvents
	    .set('onclick', attrs.onClick || function() { alert('Nav Item clicked.'); });
	  linkOptions
	    .setTextContent(attrs.text || 'Unnamed')
	    .setAttribute({
	      key: 'ng-click',
	      value: attrs.ngClick || ''
	    })
	    .setAttribute({
	      key: 'data-index',
	      value: this.children.length
	    })
	    .setEvents(linkEvents); 
	  if(attrs.active) {
	    itemOptions.addClass('active');
	  }
	  var _item = new Li(itemOptions);
	  var _link = new Link(linkOptions);
	  _item.addChild(_link);
	  return _item;
	};
	Nav.prototype.setActive = function(item) {
	  'use strict';
	  var _item = this.children[item.dataset.index];
	  this.children.forEach(function(child) {
	    if(child._options.type !== 'li') {
	      return;
	    }
	    child.removeClass('active');
	  });
	  _item.addClass('active');
	};

	module.exports = Nav;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Options for Nav element wrapper
	 * 
	 * @requires {ElementOptions}
	 * @augments {ElementOptions}
	 * @returns {NavOptions}
	 */

	var ElementOptions = __webpack_require__(7);

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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * SpanPkg module definition
	 * 
	 * @requires {Span}
	 * @requires {SpanOptions}
	 */

	var Span = __webpack_require__(16);
	var SpanOptions = __webpack_require__(17);

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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * StylePkg module definition
	 * 
	 * @requires {StyleOptions}
	 */

	var StyleOptions = __webpack_require__(18);

	angular.module('StylePkg', [])
	  .factory('StyleOptions', function() {
	    'use strict';
	    return StyleOptions;
	  });

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * AngularHelperPkg module definition
	 * 
	 * @requires {AngularHelper}
	 */

	var AngularHelper = __webpack_require__(35);

	angular.module('AngularHelperPkg', [])
	  .service('AngularHelper',  AngularHelper);

/***/ },
/* 35 */
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
	/*
	 * Binds a scope and compile to the helper
	 * 
	 * @param {object} scope
	 * @param {object} compile
	 * @returns {AngularHelper}
	 */
	AngularHelper.prototype.bind = function(scope, compile) {
	  'use strict';
	  this.scope = scope;
	  this.compile = compile;
	  return this;
	};
	/*
	 * Compile angular content to HTMLElement
	 * 
	 * @param {String | object} content
	 * @returns {HTMLElement} _content
	 */
	AngularHelper.prototype.compileContent = function(content) {
	  'use strict';
	  var _content = this.compile(content)(this.scope);
	  return _content;
	};

	module.exports = AngularHelper;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ElementPkg module definition
	 * 
	 * @requires {Element}
	 * @requires {ElementFactory}
	 * @requires {ElementManager}
	 */

	var Element = __webpack_require__(4);
	var ElementFactory = __webpack_require__(37);
	var ElementManager = __webpack_require__(38);

	angular.module('ElementPkg', [])
	  .factory('Element', Element)
	  .service('ElementManager', ElementManager)
	  .service('ElementFactory', ElementFactory);

/***/ },
/* 37 */
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
	/*
	 * Add an element to the registered element Map
	 * 
	 * @param {string} key
	 * @param {object} value
	 * @returns {ElementFactory}
	 */
	ElementFactory.prototype.registerElement = function(key, value) {
	  'use strict';
	  this.registeredElements.set(key, value);
	  return this;
	};
	/*
	 * Create a DOM Element of type mapped to key with given options
	 * 
	 * @param {string} key Key of Element type to create
	 * @param {object} options Options to use when creating element
	 * @returns {object} of type mapped to given key
	 */
	ElementFactory.prototype.create = function(key, options) {
	  'use strict';
	  var Elem = this.registeredElements.get(key);
	  return new Elem(options);
	};

	module.exports = ElementFactory;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Element Manager
	 * 
	 * @requires {AngularHelper}
	 * @requires {ElementFactory}
	 * @requires {Guid}
	 * @returns {ElementManager}
	 */

	var AngularHelper = __webpack_require__(35);
	var ElementFactory = __webpack_require__(37);
	var Guid = __webpack_require__(39);

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
	/* *************************
	 * Configuration
	 ************************* */
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
	/* *************************
	 * Workers
	 ************************* */
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
	// Creation operations
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
	// UI Cache Manipulators
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
	// DOM Build operations
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
	// Element Constructor
	ElementManager.prototype.construct = function(key, options) {
	  'use strict';
	  var element = this.factory.create(key, options);
	  return element;
	};

	module.exports = ElementManager;

/***/ },
/* 39 */
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
	/*
	 * Generate a unique guid string
	 * 
	 * @returns {string} guid
	 */
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * EventsPkg module definition
	 * 
	 * @requires {EventOptions}
	 */

	var EventOptions = __webpack_require__(19);

	angular.module('EventsPkg', [])
	  .factory('EventOptions', function() {
	    'use strict';
	    return EventOptions;
	  });

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Classification module definition
	 */

	var Header = __webpack_require__(42);
	var Footer = __webpack_require__(43);

	angular.module('ClassificationPkg', [])
	  .service('Header', Header)
	  .service('Footer', Footer);

/***/ },
/* 42 */
/***/ function(module, exports) {

	/**
	 * Classification Header UI Component
	 * 
	 * @returns Header
	 */

	function Header($injector) {
	  'use strict';

	  var self = this;

	  var ElementManager = $injector.get('ElementManager');

	  var Banner = $injector.get('Banner');
	  var BannerOptions = $injector.get('BannerOptions');
	  ElementManager.register('Banner', Banner);

	  /* ****************************************
	   * Header Options
	   **************************************** */
	  var headerOptions = new BannerOptions();
	  headerOptions
	    .setType('header')
	    .addClass('header')
	    .addClass('class-top-secret')
	    .setTextContent('TOP SECRET');

	  self.component = ElementManager.construct('Banner', headerOptions);

	}

	module.exports = Header;

/***/ },
/* 43 */
/***/ function(module, exports) {

	/**
	 * Classification Footer UI Component
	 * 
	 * @returns Footer
	 */

	function Footer($injector) {
	  'use strict';

	  var self = this;

	  var ElementManager = $injector.get('ElementManager');

	  var Banner = $injector.get('Banner');
	  var BannerOptions = $injector.get('BannerOptions');
	  ElementManager.register('Banner', Banner);

	  /* ****************************************
	   * Footer Options
	   **************************************** */
	  var footerOptions = new BannerOptions();
	  footerOptions
	    .setType('footer')
	    .addClass('footer')
	    .addClass('class-top-secret')
	    .setTextContent('TOP SECRET');

	  self.component = ElementManager.construct('Banner', footerOptions);

	}

	module.exports = Footer;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Glyph module definition
	 */

	var Glyph = __webpack_require__(45);

	angular.module('GlyphPkg', [])
	  .service('Glyph', Glyph);

/***/ },
/* 45 */
/***/ function(module, exports) {

	/**
	 * Glyph Icon UI Component
	 * 
	 * @returns Glyph
	 */

	function Glyph($injector) {
	  'use strict';

	  var self = this;

	  var ElementManager = $injector.get('ElementManager');

	  var GlyphBtn = $injector.get('GlyphBtn');
	  var GlyphBtnOptions = $injector.get('GlyphBtnOptions');
	  ElementManager.register('GlyphBtn', GlyphBtn);

	  /* ****************************************
	   * Glyph Icon
	   **************************************** */
	  var glyphBtnOptions = new GlyphBtnOptions();
	  glyphBtnOptions
	    .setAttribute({
	      key: 'href',
	      value: ''
	    });

	  self.component = ElementManager.construct('GlyphBtn', glyphBtnOptions);
	  self.new = function() {
	    return ElementManager.construct('GlyphBtn', glyphBtnOptions);
	  };

	}

	module.exports = Glyph;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Panel module definition
	 */

	var Panel = __webpack_require__(47);
	var PanelHeader = __webpack_require__(48);
	var PanelBody = __webpack_require__(49);

	angular.module('PanelPkg', [])
	  .service('Panel', Panel)
	  .service('PanelHeader', PanelHeader)
	  .service('PanelBody', PanelBody);

/***/ },
/* 47 */
/***/ function(module, exports) {

	/**
	 * Panel UI Component
	 * 
	 * @returns Panel
	 */

	function Panel($injector) {
	  'use strict';

	  var self = this;

	  var ElementManager = $injector.get('ElementManager');

	  var Div = $injector.get('Div');
	  var DivOptions = $injector.get('DivOptions');
	  ElementManager.register('Div', Div);

	  var StyleOptions = $injector.get('StyleOptions');

	  /* ****************************************
	   * Panel Content
	   **************************************** */
	  var panelOptions = new DivOptions();
	  var panelStyle = new StyleOptions();
	  panelStyle
	    .set('margin-left', 'auto')
	    .set('margin-right', 'auto')
	    .set('max-width', '510px');
	  panelOptions
	    .addClass('panel')
	    .addClass('panel-default')
	    .setStyle(panelStyle);

	  self.component = ElementManager.construct('Div', panelOptions);

	}

	module.exports = Panel;

/***/ },
/* 48 */
/***/ function(module, exports) {

	/**
	 * Panel Header UI Component
	 * 
	 * @returns PanelHeader
	 */

	function PanelHeader($injector) {
	  'use strict';

	  var self = this;

	  var ElementManager = $injector.get('ElementManager');

	  var Div = $injector.get('Div');
	  var DivOptions = $injector.get('DivOptions');
	  ElementManager.register('Div', Div);

	  var StyleOptions = $injector.get('StyleOptions');

	  /* ****************************************
	   * Panel Header
	   **************************************** */
	  var panelHeaderOptions = new DivOptions();
	  var panelHeaderStyle = new StyleOptions();
	  panelHeaderStyle
	    .set('background-color', 'white')
	    .set('color', 'black')
	    .set('padding-top', '3px')
	    .set('padding-bottom', '3px');
	  panelHeaderOptions
	    .addClass('panel-heading')
	    .setStyle(panelHeaderStyle);

	  self.component = ElementManager.construct('Div', panelHeaderOptions);

	}

	module.exports = PanelHeader;

/***/ },
/* 49 */
/***/ function(module, exports) {

	/**
	 * Panel Body UI Component
	 * 
	 * @returns PanelBody
	 */

	function PanelBody($injector) {
	  'use strict';

	  var self = this;

	  var ElementManager = $injector.get('ElementManager');

	  var Div = $injector.get('Div');
	  var DivOptions = $injector.get('DivOptions');
	  ElementManager.register('Div', Div);

	  var StyleOptions = $injector.get('StyleOptions');

	  /* ****************************************
	   * Panel Body
	   **************************************** */
	  var panelBodyOptions = new DivOptions();
	  var panelBodyStyle = new StyleOptions();
	  panelBodyStyle
	    .set('margin', '0')
	    .set('padding', '0');
	  panelBodyOptions
	    .addClass('panel-body')
	    .setStyle(panelBodyStyle);

	  self.component = ElementManager.construct('Div', panelBodyOptions);

	}

	module.exports = PanelBody;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Scrollable module definition
	 */

	var Scrollable = __webpack_require__(51);

	angular.module('ScrollablePkg', [])
	  .service('Scrollable', Scrollable);

/***/ },
/* 51 */
/***/ function(module, exports) {

	/**
	 * Scrollable Container UI Component
	 * 
	 * @returns Scrollable
	 */

	function Scrollable($injector) {
	  'use strict';

	  var self = this;

	  var ElementManager = $injector.get('ElementManager');

	  var Div = $injector.get('Div');
	  var DivOptions = $injector.get('DivOptions');
	  ElementManager.register('Div', Div);

	  /* ****************************************
	   * Scrollable Options
	   **************************************** */
	   var scrollOptions = new DivOptions();
	  scrollOptions
	    .addClass('scroll-content');

	  self.component = ElementManager.construct('Div', scrollOptions);

	}

	module.exports = Scrollable;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Navigation module definition
	 */

	var NavContainer = __webpack_require__(53);
	var NavTabs = __webpack_require__(54);
	var NavBtns = __webpack_require__(55);

	angular.module('NavigationPkg', [])
	  .service('NavContainer', NavContainer)
	  .service('NavTabs', NavTabs)
	  .service('NavBtns', NavBtns);

/***/ },
/* 53 */
/***/ function(module, exports) {

	/**
	 * Navigation Container UI Component
	 * 
	 * @returns NavContainer
	 */

	function NavContainer($injector) {
	  'use strict';

	  var self = this;

	  var ElementManager = $injector.get('ElementManager');

	  var Div = $injector.get('Div');
	  var DivOptions = $injector.get('DivOptions');
	  ElementManager.register('Div', Div);

	  var StyleOptions = $injector.get('StyleOptions');

	  /* ****************************************
	   * Navigation Container
	   **************************************** */
	  var navContainerOptions = new DivOptions();
	  var navContainerStyle = new StyleOptions();
	  navContainerStyle
	    .set('background-color', 'white');
	  navContainerOptions
	    .setStyle(navContainerStyle);

	  self.component = ElementManager.construct('Div', navContainerOptions);

	}

	module.exports = NavContainer;

/***/ },
/* 54 */
/***/ function(module, exports) {

	/**
	 * Navigation Tabs UI Component
	 * 
	 * @returns NavTabs
	 */

	function NavTabs($injector) {
	  'use strict';

	  var self = this;

	  var ElementManager = $injector.get('ElementManager');

	  var Nav = $injector.get('Nav');
	  var NavOptions = $injector.get('NavOptions');
	  ElementManager.register('Nav', Nav);

	  var StyleOptions = $injector.get('StyleOptions');

	  /* ****************************************
	   * Navigation Tabs
	   **************************************** */
	  var navTabOptions = new NavOptions();
	  var navTabStyle = new StyleOptions();
	  navTabStyle
	    .set('padding-top', '5px');
	  navTabOptions
	    .addClass('nav')
	    .addClass('nav-tabs')
	    .setStyle(navTabStyle);

	  self.component = ElementManager.construct('Nav', navTabOptions);

	}

	module.exports = NavTabs;

/***/ },
/* 55 */
/***/ function(module, exports) {

	/**
	 * Navigation Button Group UI Component
	 * 
	 * @returns NavBtns
	 */

	function NavBtns($injector) {
	  'use strict';

	  var self = this;

	  var ElementManager = $injector.get('ElementManager');

	  var Div = $injector.get('Div');
	  var DivOptions = $injector.get('DivOptions');
	  ElementManager.register('Div', Div);

	  var StyleOptions = $injector.get('StyleOptions');

	  /* ****************************************
	  * Nav-Button Group
	  ***************************************** */
	  var navBtnGroupOptions = new DivOptions();
	  var navBtnGroupStyle = new StyleOptions();
	  navBtnGroupStyle
	    .set('float', 'right')
	    .set('padding-right', '10px');
	  navBtnGroupOptions
	    .addClass('btn-group')
	    .setAttribute({
	      key: 'role',
	      value: 'group'
	    })
	    .setAttribute({
	      key: 'aria-label',
	      value: '...'
	    })
	    .setStyle(navBtnGroupStyle);

	  self.component = ElementManager.construct('Div', navBtnGroupOptions);

	}

	module.exports = NavBtns;

/***/ },
/* 56 */
/***/ function(module, exports) {

	/**
	 * This is where we build out the info state UI
	 */

	function Info($injector) {
	  'use strict';

	  var self = this;

	  var ElementManager = $injector.get('ElementManager');

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
	  var EventOptions = $injector.get('EventOptions');

	  /* ****************************************
	   * Templeted Components
	   **************************************** */
	  var Header = $injector.get('Header');
	  var Scrollable = $injector.get('Scrollable');
	  var Panel = $injector.get('Panel');
	  var PanelHeader = $injector.get('PanelHeader');
	  var PanelBody = $injector.get('PanelBody');
	  var NavContainer = $injector.get('NavContainer');
	  var NavTabs = $injector.get('NavTabs');
	  var NavBtns = $injector.get('NavBtns');
	  var Glyph = $injector.get('Glyph');

	  /* ****************************************
	   * Flag Pic
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
	   * Track Name
	   **************************************** */
	  var trackNameOptions = new SpanOptions();
	  var trackNameTemplate =
	    '<!-- Track Name -->' +
			' {{track.name | uppercase}}, ';
	  trackNameOptions
	    .setTemplate(trackNameTemplate);

	  /* ****************************************
	   * Country Abbreviation
	   **************************************** */
	  var countryOptions = new SpanOptions();
	  var countryTemplate = 
			'<!-- Country Code -->' +
			'{{country | uppercase}}';
	  countryOptions
	    .setTemplate(countryTemplate);

	  /* ****************************************
	   * Last Updated Info
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
	   * Ship Pic
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
	   * Tab Content
	   **************************************** */
	  var tabContentOptions = new DivOptions();
	  var tabContentStyle = new StyleOptions();
	  tabContentStyle
	    .set('background', '#eeeeee')
	    .set('padding', '3px');
	  tabContentOptions
	    .setStyle(tabContentStyle);

	  /* ****************************************
	   * Info Row
	   **************************************** */
	  var infoRowOptions = new DivOptions();
	  var infoRowStyle = new StyleOptions();
	  infoRowStyle
	    .set('padding', '4px 3px 4px 3px');
	  infoRowOptions
	    .setStyle(infoRowStyle);

	  /* ****************************************
	   * Footer
	   **************************************** */ 
	  var Footer = $injector.get('Footer');

	  /* ****************************************
	   * Create the UI
	   **************************************** */
	  // Create the pieces
	  this.header = Header.component;
	  this.panel = Panel.component;
	  this.panelHeader = PanelHeader.component;
	  this.flag_pic = ElementManager.construct('Img', flagPicOptions);
	  this.track_name = ElementManager.construct('Img', trackNameOptions);
	  this.country = ElementManager.construct('Img', countryOptions);
	  this.lastUpdated = ElementManager.construct('Span', lastUpdatedOptions);
	  this.scroll = Scrollable.component;
	  this.panelBody = PanelBody.component;
	  this.ship_pic = ElementManager.construct('Img', shipPicOptions);
	  this.navigation = NavContainer.component;
	  this.nav_tabs = NavTabs.component;
	  this.nav_btns = NavBtns.component;
	  this.refresh_btn = Glyph.new();
	  this.watch_btn = Glyph.new();
	  this.tab_content = ElementManager.construct('Div', tabContentOptions);
	  this.row_one = ElementManager.construct('Div', infoRowOptions);
	  this.row_two = ElementManager.construct('Div', infoRowOptions);
	  this.row_three = ElementManager.construct('Div', infoRowOptions);
	  this.footer = Footer.component;

	  this.nav_tabs
	    .addItems([
	      {
	        text: 'Track Info',
	        ngClick: '',
	        active: true,
	        onClick: function() {
	          console.debug('Clicked - Info');
	          self.nav_tabs.setActive(this);
	        }
	      }, {
	        text: 'Active Alerts',
	        ngClick: '',
	        onClick: function() {
	          console.debug('Clicked - Alerts');
	          self.nav_tabs.setActive(this);
	        }
	      }, {
	        text: 'Notes',
	        ngClick: '',
	        onClick: function() {
	          console.debug('Clicked - Notes');
	          self.nav_tabs.setActive(this);
	        }
	      }
	    ]);

	  var btn_style = [
	    {
	      key: 'padding-top',
	      value: '10px'
	    }, {
	      key: 'padding-right',
	      value: '10px'
	    }, {
	      key: 'font-size',
	      value: '15px'
	    }, {
	      key: 'color',
	      value: 'gray'
	    }
	  ];
	  var btn_events = [
	    {
	      key: 'onmouseover',
	      value: function() {
	        this.classList.add('btn-hover');
	      }
	    }, {
	      key: 'onmouseout',
	      value: function() {
	        this.classList.remove('btn-hover');
	      }
	    }, {
	      key: 'onclick',
	      value: function() {
	        console.debug('This is an unscoped click event.');
	      }
	    }
	  ];
	  this.refresh_btn
	    .create({
	      add: [
	        {
	          key: 'uib-tooltip',
	          value: 'Refresh'
	        }
	      ],
	      style: btn_style,
	      events: btn_events,
	      icon_package: 'glyphicon',
	      icon: 'glyphicon-refresh'
	    });

	  this.watch_btn
	    .create({
	      add: [
	        {
	          key: 'uib-tooltip',
	          value: 'Add to Watch List'
	        }
	      ],
	      style: btn_style,
	      events: btn_events,
	      callback: function () {
	        if(this.hasClass('glyphicon-eye-close')) {
	          this.removeClass('glyphicon-eye-close');
	          this.addClass('glyphicon-eye-open');
	        } else {
	          this.addClass('glyphicon-eye-close');
	          this.removeClass('glyphicon-eye-open');
	        }
	      },
	      icon_package: 'glyphicon',
	      icon: 'glyphicon-eye-close'
	    });

	  // Put the pieces together
	  this.panelHeader
	    .addChild(this.flag_pic)
	    .addChild(this.track_name)
	    .addChild(this.country)
	    .addChild(this.lastUpdated);

	  this.nav_btns
	    .addChild(this.refresh_btn)
	    .addChild(this.watch_btn);

	  this.nav_tabs
	    .addChild(this.nav_btns);

	  this.navigation
	    .addChild(this.nav_tabs);

	  this.tab_content
	    .addChild(this.row_one)
	    .addChild(this.row_two)
	    .addChild(this.row_three);

	  this.panelBody
	    .addChild(this.ship_pic)
	    .addChild(this.navigation)
	    .addChild(this.tab_content);

	  this.panel
	    .addChild(this.panelHeader)
	    .addChild(this.panelBody);

	  this.scroll
	    .addChild(this.panel);

	}

	module.exports = Info;

/***/ },
/* 57 */
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
	    .addOrReplace('content', Info.scroll)
	    .addOrReplace('footer', Info.footer)
	    .saveUI('info');

	}

	module.exports = run;

/***/ },
/* 58 */
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

	  ElementManager
	    .setUI('info')
	    .build();

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

	}

	module.exports = InfoCtrl;

/***/ }
/******/ ]);