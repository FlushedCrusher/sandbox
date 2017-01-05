/**
 * EventsPkg module definition
 */

var EventOptions = require('./EventOptions.js');

angular.module('EventsPkg', [])
  .factory('EventOptions', function() {
    'use strict';
    return EventOptions;
  });