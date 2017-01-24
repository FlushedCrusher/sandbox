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