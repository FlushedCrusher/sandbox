var ElementFactory = require('./ElementFactory.js');
var Guid = require('../Guid/Guid.js');

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
  this.dom.remove(component);
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
  // this.clearDom();
  this.elements.forEach(function(n) {
    self.addToDom(n.element);
  });
  return this;
};

module.exports = ElementManager;