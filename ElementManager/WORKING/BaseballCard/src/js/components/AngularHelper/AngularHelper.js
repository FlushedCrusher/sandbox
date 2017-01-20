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
/*
 * Binds a scope and compile to the helper
 * 
 * @param {object} scope
 * @param {object} compile
 * @returns {AngularHelper}
 */
AngularHelper.prototype.bind = function(scope, compile) {
  'use strict';
  this.scope = scope;
  this.compile = compile;
  return this;
};
/*
 * Compile angular content to HTMLElement
 * 
 * @param {String | object} content
 * @returns {HTMLElement} _content
 */
AngularHelper.prototype.compileContent = function(content) {
  'use strict';
  var _content = this.compile(content)(this.scope);
  return _content;
};

module.exports = AngularHelper;