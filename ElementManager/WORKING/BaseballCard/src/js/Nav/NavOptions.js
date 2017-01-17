/**
 * Options for Nav element wrapper
 * 
 * @requires {ElementOptions}
 * @augments {ElementOptions}
 * @returns {NavOptions}
 */

var ElementOptions = require('../Element/ElementOptions.js');

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