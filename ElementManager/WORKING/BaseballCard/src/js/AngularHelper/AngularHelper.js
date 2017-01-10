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
AngularHelper.prototype.getTemplate = function(template) {
  'use strict';
  var content = this.compile(template)(this.scope);
  return content[0];
};

module.exports = AngularHelper;