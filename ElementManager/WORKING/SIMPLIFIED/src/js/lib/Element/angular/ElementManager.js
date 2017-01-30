/**
 * Element Manager 2
 * 
 * @requires {AngularHelper}
 * @requires {ElementFactory}
 * @requires {Guid}
 * @returns {ElementManager}
 */

var AngularHelper = require('../../AngularHelper/AngularHelper.js');
var Element = require('./Element.js');
var Guid = require('../../Guid/Guid.js');

function ElementManager2() {
  'use strict';

  this.helper = new AngularHelper();
  this.guid = new Guid();

  this.elements = new Map();
  this.elementsById = new Map();
  this.UICache = {};

  this.dom = document.body;
  this.component = null;
}
ElementManager2.prototype.bind = function(scope, compile) {
  'use strict';
  this.helper.bind(scope, compile);
  return this;
};
ElementManager2.prototype.get = function(key) {
  'use strict';
  return this.elements.get(key) || this.elementsById.get(key);
};

ElementManager2.prototype.addToDom = function(component) {
  'use strict';
  this.dom.appendChild(component);
  return this;
};
ElementManager2.prototype.removeFromDom = function(component) {
  'use strict';
  if(this.dom.contains(component)) {
    this.dom.removeChild(component);
  }
  return this;
};
ElementManager2.prototype.clearDom = function() {
  'use strict';
  var self = this;
  this.elements.forEach(function(n) {
    self.removeFromDom(n.element);
  });
  return this;
};
ElementManager2.prototype._build = function(context, elementMap, add) {
  'use strict';
  elementMap.forEach(function(e) {
    add.call(context, e.element);
  });
};
ElementManager2.prototype.build = function() {
  'use strict';
  this.clearDom();
  this._build(this, this.elements, this.addToDom);
  this.compile();
  return this;
};
ElementManager2.prototype.compile = function() {
  'use strict';
  this.helper.compileContent(this.dom);
  return this;
};

ElementManager2.prototype.saveUI = function(name) {
  'use strict';
  var _name = name || this.guid.create();
  this.UICache[_name] = this.getUI();
  return this;
};
ElementManager2.prototype.getUI = function() {
  'use strict';
  return new Map(this.elements);
};
ElementManager2.prototype.setUI = function(name) {
  'use strict';
  this.clearUI();
  this.elements = new Map(this.UICache[name]);
  return this;
};
ElementManager2.prototype.clearUI = function() {
  'use strict';
  delete this.elements;
  this.elements = new Map();
  return this;
};

ElementManager2.prototype.addOrReplace = function(key, value) {
  'use strict';
  this.elements.set(key, value);
  return this;
};
ElementManager2.prototype.addIdReference = function(id, value) {
  'use strict';
  this.elementsById.set(id, value);
  return this;
};
ElementManager2.prototype.createFromTemplate = function(template) {
  'use strict';
  var self = this;
  var element = new Element(template);
  var children = element.getChildren();
  if(element.getAttribute('id')) {
    this.addIdReference(element.getAttribute('id'), element);
  }
  children.each(function(idx) {
    element.addChild(self.createFromTemplate(children[idx]));
  });
  return element;
};

module.exports = ElementManager2;