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