/** COMMENT*/
;(function (root, factory) {
  /* CommonJS */
  if (typeof module == 'object' && module.exports) {
    module.exports = factory;
  /* AMD module */
  } else if (typeof define == 'function' && define.amd) {
    define(factory);
  /* Browser global */
  } else {
    root.Module1 = factory;
  }
}(this, function () {
  "use strict"
  var Module1 = {};
  Module1.name = 'Module 1';
  Module1.run = console.log('Module 1, running.');
  Module1.stop = console.log('Module 1, stopped.');
  return Module1;
}));