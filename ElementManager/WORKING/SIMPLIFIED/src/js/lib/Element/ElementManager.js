/**
 * Element Manager 2
 * 
 * @requires {AngularHelper}
 * @requires {ElementFactory}
 * @requires {Guid}
 * @returns {ElementManager}
 */

function ElementManager($injector) {
  'use strict';

  this.helper = $injector.get('AngularHelper');
  this.guid = $injector.get('Guid');
  this.element = $injector.get('Element');

  this.elements = new Map();
  this.elementsById = new Map();
  this.UICache = {};

  this.dom = document.body;
  this.component = null;
}
ElementManager.prototype.bind = function(scope, compile) {
  'use strict';
  this.helper.bind(scope, compile);
  return this;
};
ElementManager.prototype.get = function(key) {
  'use strict';
  return this.elements.get(key) || this.elementsById.get(key);
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
  return this;
};
ElementManager.prototype._build = function(context, elementMap, add) {
  'use strict';
  elementMap.forEach(function(e) {
    add.call(context, e.element);
  });
};
ElementManager.prototype.build = function() {
  'use strict';
  this.clearDom();
  this._build(this, this.elements, this.addToDom);
  this.compile();
  return this;
};
ElementManager.prototype.compile = function() {
  'use strict';
  this.helper.compileContent(this.dom);
  return this;
};

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

ElementManager.prototype.addOrReplace = function(key, value) {
  'use strict';
  this.elements.set(key, value);
  return this;
};
ElementManager.prototype.addIdReference = function(id, value) {
  'use strict';
  this.elementsById.set(id, value);
  return this;
};
ElementManager.prototype.createFromTemplate = function(template) {
  'use strict';
  var self = this;
  var element = new this.element(template);
  var children = element.getChildren();
  if(element.getAttribute('id')) {
    this.addIdReference(element.getAttribute('id'), element);
  }
  children.each(function(idx) {
    element.addChild(self.createFromTemplate(children[idx]));
  });
  return element;
};

module.exports = ElementManager;