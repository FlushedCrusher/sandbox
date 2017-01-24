/**
 * StylePkg module definition
 * 
 * @requires {StyleOptions}
 */

var StyleOptions = require('./StyleOptions.js');

angular.module('StylePkg', [])
  .factory('StyleOptions', function() {
    'use strict';
    return StyleOptions;
  });