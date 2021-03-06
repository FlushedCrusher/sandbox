/**
 * Basic Img element wrapper
 * 
 * @requires {Element}
 * @requires {ImgOptions}
 * @augments {Element}
 * @param {ImgOptions} options
 * @returns {Img}
 */

var Element = require('../Element/Element.js');
var ImgOptions = require('./ImgOptions.js');

function Img(options) {
  'use strict';

  this._options = options ? options : new ImgOptions();
  Element.call(this, this._options);

  if(this._options.src) {
    this.setSrc(this._options.src);
  }
}
Img.prototype = Object.create(Element.prototype);
Img.prototype.setSrc = function(src) {
  'use strict';
  this.element.src = src;
  return this;
};

module.exports = Img;