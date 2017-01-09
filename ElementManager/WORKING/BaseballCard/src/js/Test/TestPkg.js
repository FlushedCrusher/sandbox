/**
 * TestPkg module definition
 */

var Stubs = require('./Stubs.js');

angular.module('TestPkg', [])
  .constant('Stubs', Stubs);