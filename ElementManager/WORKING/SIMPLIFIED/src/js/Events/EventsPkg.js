/**
 * EventsPkg module definition
 * 
 * @requires {EventOptions}
 */

var EventOptions = require('./EventOptions.js');

angular.module('EventsPkg', [])
  .factory('EventOptions', function() {
    'use strict';
    return EventOptions;
  });