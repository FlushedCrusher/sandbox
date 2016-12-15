/* JEST Workaround */
var define = (define) ? define : function(func) {
  return module.exports(func);
};
/* --------------- */
define(function() {
  
  'use strict';
  
  var instance;
  function createInstance() {
    return new Math();
  }
  function getInstance() {
    instance = (instance) ? instance : new Math();
    return instance;
  }
  
  function Math() {}
    
  Math.prototype.add = function(a, b) {
    return a + b;
  };
  Math.prototype.subtract = function(a, b) {
    return a - b;
  };
  Math.prototype.multiply = function(a, b) {
    return a * b;
  };
  Math.prototype.divide = function(a, b) {
    return a / b;
  };
  
  return {
    getInstance: getInstance
  };
  
});