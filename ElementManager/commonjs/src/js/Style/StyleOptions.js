/**
 * Style options object
 * 
 * @returns {StyleOptions}
 */

function StyleOptions() {
  'use strict';
}
StyleOptions.prototype.get = function(key) {
  'use strict';
  var style = this[key];
  return style;
};
StyleOptions.prototype.set = function(key, style) {
  'use strict';
  this[key] = style;
  return this;
};

module.exports = StyleOptions;