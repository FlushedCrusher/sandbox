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

	var run = __webpack_require__(1);
	var InfoCtrl = __webpack_require__(3);

	__webpack_require__(4);
	__webpack_require__(6);
	__webpack_require__(14);

	angular.module('app',
	  [
	    'ui.bootstrap',
	    'ConfigPkg',
	    'ElementPkg',
	    'TemplatePkg'
	  ])
	  .run([
	    '$injector',
	    '$compile',
	    '$templateCache',
	    '$rootScope',
	    run
	  ])
	  .controller('info-controller', [
	    '$injector',
	    '$compile',
	    '$templateCache',
	    '$timeout',
	    '$scope',
	    InfoCtrl
	  ]);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Run State Controller
	 * 
	 * @returns {run}
	 */

	var createBaseballCardTemplates = __webpack_require__(2);

	function run($injector, $compile, $templateCache, $rootScope) { // eslint-disable-line no-unused-vars
	  'use strict';

	  var ElementManager = $injector.get('ElementManager');
	  var Template = $injector.get('Template');
	  createBaseballCardTemplates(Template);

	  var HeaderTemplate = Template.get('Header');
	  var Header = ElementManager.createFromTemplate(HeaderTemplate);
	  $templateCache.put('header.html', HeaderTemplate);

	  var FooterTemplate = Template.get('Footer');
	  var Footer = ElementManager.createFromTemplate(FooterTemplate);
	  $templateCache.put('footer.html', FooterTemplate);

	  var PanelTemplate = Template.get('Panel');
	  var Panel = ElementManager.createFromTemplate(PanelTemplate);
	  $templateCache.put('panel.html', PanelTemplate);

	  ElementManager
	    .addOrReplace('Header', Header)
	    .addOrReplace('Panel', Panel)
	    .addOrReplace('Footer', Footer)
	    .saveUI('Info');

	}

	module.exports = run;

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * BaseballCardTemplates Implementation
	 * 
	 * @param {Template} Template
	 * @returns {BaseballCardTemplates}
	 */

	function BaseballCardTemplates(Template) {
	  'use strict';

	  var HeaderTemplate =
	    '<header class="header class-unclass">' +
	    ' <p>{{DATA.TRACK.CLASSIFICATION}}</p>' +
	    '</header>';
	  Template.set('Header', HeaderTemplate);

	  var FooterTemplate =
	    '<footer class="footer class-unclass">' +
	    ' <p>{{DATA.TRACK.CLASSIFICATION}}</p>' +
	    '</footer>';
	  Template.set('Footer', FooterTemplate);

	  var PanelHeading =
	    '<div class="panel-heading" style="background-color: white; color: black; padding-top: 3px; padding-bottom: 3px;">' +
	    ' <img class="flag-pic" ng-src="{{DATA.FLAG_PIC}}" onerror="this.style.display=\'none\'">' +
	    ' <span class="ng-binding">' +
	    '   <!-- Track Name -->' +
			'   {{DATA.TRACK.NAME | uppercase}}, ' +
	    ' </span>' +
	    ' <span class="ng-binding">' +
	    '   <!-- Country Code -->' +
			'   {{DATA.COUNTRY | uppercase}}' +
	    ' </span>' +
	    ' <span class="float-right ng-binding" style="float: right;">' +
	    '   <!-- Last Updated -->' +
	    '   Last Updated - {{DATA.TRACK.LAST_UPDATE | date:\'dd MMM yyyy HH:mm:ss\' : \'UTC\' | uppercase}}Z' +
	    ' </span>' +
	    '</div>';
	  
	  var PanelBody =
	    '<div class="panel-body" style="margin: 0px; padding: 0px;">' +
	    ' <img class="ship-pic" ng-src="{{DATA.TRACK.IMAGE}}">' +
	    '</div>';

	  var PanelTemplate =
	    '<div class="scroll-content">' +
	    ' <div class="panel panel-default" style="margin-left: auto; margin-right: auto; max-width: 510px;">' +
	    PanelHeading +
	    PanelBody +
	    ' </div>' +
	    '</div>';
	  Template.set('Panel', PanelTemplate);

	}

	module.exports = BaseballCardTemplates;

/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * Info State Controller
	 * 
	 * @returns {InfoCtrl}
	 */

	function InfoCtrl($injector, $compile, $templatecache, $timeout, $scope) {
	  'use strict';

	  var ElementManager = $injector.get('ElementManager');
	  ElementManager.bind($scope, $compile);

	  var Config = $injector.get('Config');
	  var TEST = Config.BASEBALLCARD.TEST;
	  var CONST = Config.BASEBALLCARD.CONSTANTS;

	  $scope.DATA = TEST;

	  $scope.$watch('title', function(newValue, oldValue) {
	    if(newValue !== oldValue) {
	      var thisClass = '';
				if(newValue.length > 0) {
					if(newValue.charAt(0).toUpperCase() === "U") {
						thisClass = "class-unclass";
					} else if (newValue.charAt(0).toUpperCase() === "S"){
						thisClass = "class-secret";
					} else if (newValue.charAt(0).toUpperCase() === "T"){
						thisClass = "class-top-secret";
					}
				} else {
					thisClass = "class-noclass";
				}
	      ElementManager.get('Header').removeClasses(CONST.CLASSIFICATION_CLASSES);
	      ElementManager.get('Header').addClass(thisClass);
	      ElementManager.get('Header').setTextContent(newValue);
	      ElementManager.get('Footer').removeClasses(CONST.CLASSIFICATION_CLASSES);
	      ElementManager.get('Footer').addClass(thisClass);
	      ElementManager.get('Footer').setTextContent(newValue);
	    }
	  });

	  ElementManager
	    .setUI('Info')
	    .build();

	}

	module.exports = InfoCtrl;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ConfigPkg module definition
	 */

	var Config = __webpack_require__(5);

	angular.module('ConfigPkg', [])
	  .constant('Config', Config);

/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Config Variables
	 * 
	 * @returns {Config}
	 */

	var Config = {
	  BASEBALLCARD: {
	    TEST: {
	      FLAG_PIC:'../src/Test/img/ra-flag.png',
	      COUNTRY: 'RA',
	      TRACK: {
	        CLASSIFICATION: 'UNCLASSIFIED',
	        IMAGE: '../src/Test/img/ship.jpg',
	        FLAG: 'RA',
	        NAME: 'Millennium Falcon',
	        HOME_PORT: 'Corellia',
	        LAST_UPDATE: 1463014800000,
	        LOCATION: {
	          lat: 19.203333333333333,
	          lon: 121.91388888888889
	        }
	      }
	    },
	    CONSTANTS: {
	      CLASSIFICATION_CLASSES: [
	        'class-noclass',
	        'class-unclass',
	        'class-secret',
	        'class-top-secret'
	      ]
	    }
	  }
	};

	module.exports = Config;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ElementPkg module definition
	 * 
	 * @requires {Element}
	 * @requires {ElementFactory}
	 * @requires {ElementManager}
	 */

	var Element = __webpack_require__(7);
	var ElementFactory = __webpack_require__(10);
	var ElementManager = __webpack_require__(11);

	angular.module('ElementPkg', [])
	  .factory('Element', Element)
	  .service('ElementManager', ElementManager)
	  .service('ElementFactory', ElementFactory);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Dom Element wrapper
	 * 
	 * @requires {EventList}
	 * @param {string | object} type Element type | Element options
	 * @returns {Element}
	 */

	var ElementOptions = __webpack_require__(8);
	var EventList = __webpack_require__(9);

	function Element(options) {
	  'use strict';
	  this.options =
	    options ?
	      options :
	      this.options ?
	        this.options :
	        new ElementOptions();
	  this.assign(this.options);
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
	        document.createElement('div');
	  if(options.template) {
	    this.clearTemplate();
	    this.setTemplate(options.template);
	  } else if(options.textContent){
	    this.clearTextContent();
	    this.setTextContent(options.textContent);
	  }
	  if(options.events) {
	    this.clearEvents();
	    this.setEvents(options.events);
	  }
	  if(options.style) {
	    this.clearStyles();
	    this.setStyles(options.style);
	  }
	  if(options.classList) {
	    this.clearClasses();
	    this.addClasses(options.classList);
	  }
	  if(options.attributes) {
	    this.clearAttributes();
	    this.setAttributes(options.attributes);
	  }
	  return this;
	};
	// Element inner content modifiers
	Element.prototype.setTemplate = function(content) {
	  'use strict';
	  this.element.innerHTML = content;
	  return this;
	};
	Element.prototype.clearTemplate = function() {
	  'use strict';
	  this.element.innerHTML = '';
	  return this;
	};
	Element.prototype.setTextContent = function(content) {
	  'use strict';
	  this.element.textContent = content;
	  return this;
	};
	Element.prototype.clearTextContent = function() {
	  'use strict';
	  this.element.textContent = '';
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
	Element.prototype.hasEvent = function(key) {
	  'use strict';
	  return typeof this.element[key] === "function";
	};
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
	Element.prototype.hasStyle = function(style) {
	  'use strict';
	  return this.element.style[style] && this.element.style[style] !== '';
	};
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
	Element.prototype.removeClasses = function(_classList) {
	  'use strict';
	  var self = this;
	  _classList.forEach(function(_class) {
	    self.removeClass(_class);
	  });
	  return this;
	};
	Element.prototype.clearClasses = function() {
	  'use strict';
	  this.element.classList = "";
	  return this;
	};
	// Abstract Attribute modifiers
	Element.prototype.hasAttribute = function(attribute) {
	  'use strict';
	  return this.element.hasOwnProperty(attribute);
	};
	Element.prototype.setAttribute = function(name, value) {
	  'use strict';
	  this.element.setAttribute(name, value);
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
	    self.setAttribute(_attribute.name, _attribute.value);
	  });
	  return this;
	};
	Element.prototype.clearAttributes = function() {
	  'use strict';
	  var i = 0;
	  while(this.element.attributes.length > i) {
	    var key = this.element.attributes[0].name;
	    if(key === 'class' || key === 'style') {
	      i++;
	      continue;
	    }
	    this.removeAttribute(this.element.attributes[0].name);
	  }
	};

	module.exports = Element;

/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Options for Element element wrapper
	 * 
	 * @returns {ElementOptions}
	 */

	function ElementOptions() {
	  'use strict';
	  this.type = null;
	  this.textContent = null;
	  this.template = null;
	  this.events = null;
	  this.style = null;
	  this.attributes = [];
	  this.classList = [];
	}
	ElementOptions.prototype.getType = function() {
	  'use strict';
	  return this.type;
	};
	ElementOptions.prototype.setType = function(type) {
	  'use strict';
	  this.type = type;
	  return this;
	};
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
	ElementOptions.prototype.setClasses = function(classList) {
	  'use strict';
	  this.classList = classList;
	  return this;
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
	ElementOptions.prototype.setAttributes = function(_attributes) {
	  'use strict';
	  this.attributes = _attributes;
	  return this;
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
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Element Manager
	 * 
	 * @requires {AngularHelper}
	 * @requires {ElementFactory}
	 * @requires {Guid}
	 * @returns {ElementManager}
	 */

	var AngularHelper = __webpack_require__(12);
	var ElementFactory = __webpack_require__(10);

	var Element = __webpack_require__(7);
	var ElementOptions = __webpack_require__(8);
	var Guid = __webpack_require__(13);

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
	ElementManager.prototype.toArray = function(list) {
	  'use strict';
	  var array = [];
	  for (var i = list.length >>> 0; i--;) {
	    array[i] = list[i];
	  }
	  return array;
	};
	ElementManager.prototype.toObject = function(list) {
	  'use strict';
	  var obj = {};
	  for (var i = list.length >>> 0; i--;) { 
	    var key = list[i];
	    obj[key] = list[key];
	  }
	  return obj;
	};
	ElementManager.prototype.toFilterArray = function(list, excludes) {
	  'use strict';
	  var array = [];
	  for (var i = list.length >>> 0; i--;) {
	    if(excludes.includes(list[i])) {
	      continue;
	    }
	    array[i] = list[i];
	  }
	  return array;
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
	ElementManager.prototype.createFromTemplate = function(template) {
	  'use strict';
	  var self = this;
	  var container = document.createElement('container');
	  container.innerHTML = template;
	  var tmp = container.childNodes[0];
	  var options = this.createOptionsFromElement(tmp);
	  var element = new Element(options);
	  tmp.childNodes.forEach(function(child) {
	    var _template = '';
	    if(child.nodeType === 3) {
	      element.setTextContent(child.textContent.trim());
	    } else if(child.nodeType === 8) {
	      element.setTextContent('<!-- ' + child.textContent.trim() + ' -->');
	    } else {
	      _template = child.outerHTML;
	      element.addChild(self.createFromTemplate(_template));
	    }
	  });
	  return element;
	};
	ElementManager.prototype.createOptionsFromElement = function(element) {
	  'use strict';
	  var options = new ElementOptions();
	  options
	    .setType(element.tagName.toLowerCase())
	    .setAttributes(this.toFilterArray(element.attributes, ['class', 'style']))
	    .setStyle(this.toObject(element.style))
	    .setClasses(this.toArray(element.classList));
	  if(element.textContent && element.tagName === 'text') {
	    options.setTextContent(element.textContent);
	  }
	  return options;
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
	ElementManager.prototype.createElementType = function(options) {
	  'use strict';
	  function tmp() {
	    Element.call(this, this.options);
	  }
	  tmp.prototype = Object.create(Element.prototype);
	  tmp.prototype.options = options;
	  return tmp;
	};

	module.exports = ElementManager;

/***/ },
/* 12 */
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
	  var _content = this.compile ? this.compile(content)(this.scope) : content;
	  return _content;
	};

	module.exports = AngularHelper;

/***/ },
/* 13 */
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * TemplatePkg module definition
	 * 
	 * @requires {EventOptions}
	 */

	var Template = __webpack_require__(15);

	angular.module('TemplatePkg', [])
	  .service('Template', Template);

/***/ },
/* 15 */
/***/ function(module, exports) {

	function Template() {
	  'use strict';
	  this.cache = new Map();
	}
	Template.prototype.set = function(name, template) {
	  'use strict';
	  this.cache.set(name, template);
	  return this;
	};
	Template.prototype.get = function(name) {
	  'use strict';
	  return this.cache.get(name);
	};

	module.exports = Template;

/***/ }
/******/ ]);