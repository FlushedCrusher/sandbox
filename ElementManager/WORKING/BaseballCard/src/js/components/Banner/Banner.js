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
    
  this._p = new Element('p');

  this._options = options ? options : new BannerOptions();
  Element.call(this, this._options);

  this.addElementChild(this._p.element);

}
Banner.prototype = Object.create(Element.prototype);
/*
 * Set the text content of the inner most element
 * 
 * @override
 * @returns {Banner}
 */
Banner.prototype.setTextContent = function(content) {
  'use strict';
  this._p.element.textContent = content;
  return this;
};
/*
 * Set the template of the inner most element
 * 
 * @override
 * @returns {Banner}
 */
Banner.prototype.setTemplate = function(content) {
  'use strict';
  this._p.element.innerHTML = content;
  return this;
};

module.exports = Banner;