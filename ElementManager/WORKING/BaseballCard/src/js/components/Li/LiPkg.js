/**
 * LiPkg module definition
 * 
 * @requires {Li}
 * @requires {LiOptions}
 */

var Li = require('./Li.js');
var LiOptions = require('./LiOptions.js');

angular.module('LiPkg', [])
  .factory('Li', function() {
    'use strict';
    return Li;
  })
  .factory('LiOptions',  function() {
    'use strict';
    return LiOptions;
  });