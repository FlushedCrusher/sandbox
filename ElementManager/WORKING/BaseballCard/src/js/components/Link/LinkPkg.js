/**
 * LinkPkg module definition
 * 
 * @requires {Link}
 * @requires {LinkOptions}
 */

var Link = require('./Link.js');
var LinkOptions = require('./LinkOptions.js');

angular.module('LinkPkg', [])
  .factory('Link', function() {
    'use strict';
    return Link;
  })
  .factory('LinkOptions',  function() {
    'use strict';
    return LinkOptions;
  });