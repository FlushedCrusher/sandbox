/**
 * AngularHelper wrapper
 * 
 * @returns {AngularHelper}
 */

function AngularHelper() {
  'use strict';
  this.scope;
  this.compile;
}
AngularHelper.prototype.bind = function(scope, compile) {
  'use strict';
  this.scope = scope;
  this.compile = compile;
  return this;
};
AngularHelper.prototype.compileContent = function(content) {
  'use strict';
  var _content = this.compile(content)(this.scope);
  return _content;
};

module.exports = AngularHelper;