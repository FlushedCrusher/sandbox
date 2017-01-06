/**
 * Options for Banner element wrapper
 * 
 * @requires {ElementOptions}
 * @augments {ElementOptions}
 * @returns {BannerOptions}
 */

var ElementOptions = require('../Element/ElementOptions.js');

function BannerOptions() {
  'use strict';
  ElementOptions.call(this);
  this.type = 'div';
}
BannerOptions.prototype = Object.create(ElementOptions.prototype);
BannerOptions.prototype.setType = function(type) {
  'use strict';
  this.type = type;
  return this;
};
BannerOptions.prototype.getType = function() {
  'use strict';
  return this.type;
};

module.exports = BannerOptions;