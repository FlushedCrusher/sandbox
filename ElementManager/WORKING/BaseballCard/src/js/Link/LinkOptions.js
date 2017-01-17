/**
 * Options for Link element wrapper
 * 
 * @requires {ElementOptions}
 * @augments {ElementOptions}
 * @returns {LinkOptions}
 */

var ElementOptions = require('../Element/ElementOptions.js');

function LinkOptions() {
  'use strict';
  ElementOptions.call(this);
  this.type = 'a';
}
LinkOptions.prototype = Object.create(ElementOptions.prototype);

module.exports = LinkOptions;