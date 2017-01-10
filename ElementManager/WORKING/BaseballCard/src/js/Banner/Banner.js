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
  
  var _options = options ? options : new BannerOptions();
  Element.call(this, _options);
  
  this._p = new Element('p');
  this.addChild(this._p.element);

  if(_options.template && typeof _options.template === 'object') {
    this.append(_options.template);
  } else if(_options.template){
    this.setTemplate(_options.template);
  } else if(_options.textContent){
    this.setTextContent(_options.textContent);
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