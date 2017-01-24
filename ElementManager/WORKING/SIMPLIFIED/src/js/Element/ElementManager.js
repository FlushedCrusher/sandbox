/**
 * Element Manager
 * 
 * @requires {AngularHelper}
 * @requires {ElementFactory}
 * @requires {Guid}
 * @returns {ElementManager}
 */

var AngularHelper = require('../AngularHelper/AngularHelper.js');
var ElementFactory = require('./ElementFactory.js');

var Element = require('./Element.js');
var ElementOptions = require('./ElementOptions.js');
var Guid = require('../Guid/Guid.js');

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