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
    root.Module2 = factory;
  }
}(this, function () {
  "use strict"
  var Module2 = {};
  Module2.name = 'Module 2';
  Module2.run = console.log('Module 2, running.');
  Module2.stop = console.log('Module 2, stopped.');
  return Module2;
}));