/**
 * Options for Li element wrapper
 * 
 * @requires {ElementOptions}
 * @augments {ElementOptions}
 * @returns {LiOptions}
 */

var ElementOptions = require('../Element/ElementOptions.js');

function LiOptions() {
  'use strict';
  ElementOptions.call(this);
  this.type = 'li';
}
LiOptions.prototype = Object.create(ElementOptions.prototype);

module.exports = LiOptions;