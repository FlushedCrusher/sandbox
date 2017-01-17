/**
 * Banner element wrapper
 * 
 * @requires {Element}
 * @requires {BannerOptions}
 * @augments {Element}
 * @param {BannerOptions} options
 * @returns {Banner}
 */

var Element = require('../Element/Element.js');
var BannerOptions = require('./BannerOptions.js');

function Banner(options) {
  'use strict';
  
  this._options = options ? options : new BannerOptions();
  Element.call(this, this._options);
  
  this._p = new Element('p');
  this.addElementChild(this._p.element);

  if(this._options.template) {
    this.setTemplate(this._options.template);
  } else if(this._options.textContent){
    this.setTextContent(this._options.textContent);
  }

}
Banner.prototype = Object.create(Element.prototype);
Banner.prototype.setTextContent = function(content) {
  'use strict';
  this._p.element.textContent = content;
  return this;
};
Banner.prototype.setTemplate = function(content) {
  'use strict';
  this._p.element.innerHTML = content;
  return this;
};

module.exports = Banner;