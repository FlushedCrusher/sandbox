/**
 * NavPkg module definition
 */

var Nav = require('./Nav.js');
var NavOptions = require('./NavOptions.js');

angular.module('NavPkg', [])
  .factory('Nav', function() {
    'use strict';
    return Nav;
  })
  .factory('NavOptions',  function() {
    'use strict';
    return NavOptions;
  });