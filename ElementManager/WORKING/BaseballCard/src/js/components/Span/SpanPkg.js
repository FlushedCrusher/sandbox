/**
 * SpanPkg module definition
 * 
 * @requires {Span}
 * @requires {SpanOptions}
 */

var Span = require('./Span.js');
var SpanOptions = require('./SpanOptions.js');

angular.module('SpanPkg', [])
  .factory('Span', function() {
    'use strict';
    return Span;
  })
  .factory('SpanOptions',  function() {
    'use strict';
    return SpanOptions;
  });