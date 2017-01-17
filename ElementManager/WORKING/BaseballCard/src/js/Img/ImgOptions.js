/**
 * Options for Img element wrapper
 * 
 * @requires {ElementOptions}
 * @augments {ElementOptions}
 * @returns {ImgOptions}
 */

var ElementOptions = require('../Element/ElementOptions.js');

function ImgOptions() {
  'use strict';
  ElementOptions.call(this);
  this.type = 'img';
}
ImgOptions.prototype = Object.create(ElementOptions.prototype);

module.exports = ImgOptions;