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
ImgOptions.prototype.setAngularSrc = function(src)  {
  'use strict';
  this.angularSrc = src;
  return this;
};

module.exports = ImgOptions;