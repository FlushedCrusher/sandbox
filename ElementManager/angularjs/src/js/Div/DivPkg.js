/**
 * DivPkg module definition
 */

var Div = require('./Div.js');
var DivOptions = require('./DivOptions.js');

angular.module('DivPkg', [])
  .factory('Div', function() {
    'use strict';
    return Div;
  })
  .factory('DivOptions',  function() {
    'use strict';
    return DivOptions;
  });