/**
 * TablePkg module definition
 * 
 * @requires {Table}
 * @requires {TableOptions}
 */

var Table = require('./Table.js');
var TableOptions = require('./TableOptions.js');

angular.module('TablePkg', [])
  .factory('Table', function() {
    'use strict';
    return Table;
  })
  .factory('TableOptions',  function() {
    'use strict';
    return TableOptions;
  });