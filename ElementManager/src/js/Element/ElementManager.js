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
ElementManager.prototype.register = function(key, value) {
  'use strict';
  this.factory.registerElement(key, value);
  return this;
};
ElementManager.prototype.create = function(key, options) {
  'use strict';
  var element = this.factory.create(key, options);
  var id = this.guid.create();
  this.elements.set(id, element);
  this.component = element;
  return this;
};
ElementManager.prototype.createChain = function(key, options) {
  'use strict';
  return this.factory.create(key, options);
};
ElementManager.prototype.nest = function (key, options) {
  'use strict';
  var tmp = this.createChain(key, options);
  this.component.appendChild(tmp.element);
  return this;
};
ElementManager.prototype.addToDom = function(component) {
  'use strict';
  this.dom.appendChild(component);
};
ElementManager.prototype.build = function() {
  'use strict';
  var self = this;
  this.elements.forEach(function(n) {
    self.addToDom(n.element);
  });
};

module.exports = ElementManager;