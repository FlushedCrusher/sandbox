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

  if(this._options.template) {
    this.setTemplate(this._options.template);
  } else if(this._options.textContent){
    this.setTextContent(this._options.textContent);
  }

  if(this._options.src) {
    this.setSrc(this._options.src);
  }
  if(this._options.angularSrc) {
    this.setAttribute('ng-src', this._options.angularSrc);
  }
}
Img.prototype = Object.create(Element.prototype);
Img.prototype.hasAngularTemplate = function() {
  'use strict';
  return (this._options.angularTemplate) ? true : false; // eslint-disable-line no-unneeded-ternary
};
Img.prototype.setTextContent = function(content) {
  'use strict';
  this.element.textContent = content;
  return this;
};
Img.prototype.setTemplate = function(content) {
  'use strict';
  this.element.innerHTML = content;
  return this;
};
Img.prototype.setSrc = function(src) {
  'use strict';
  this.element.src = src;
  return this;
};

module.exports = Img;