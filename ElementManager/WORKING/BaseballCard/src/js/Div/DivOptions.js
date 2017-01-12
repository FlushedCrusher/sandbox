/**
 * Options for Div element wrapper
 * 
 * @requires {ElementOptions}
 * @augments {ElementOptions}
 * @returns {DivOptions}
 */

var ElementOptions = require('../Element/ElementOptions.js');

function DivOptions() {
  'use strict';
  ElementOptions.call(this);
  this.type = 'div';
}
DivOptions.prototype = Object.create(ElementOptions.prototype);

module.exports = DivOptions;