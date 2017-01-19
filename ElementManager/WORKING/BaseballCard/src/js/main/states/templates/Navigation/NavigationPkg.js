/**
 * Navigation module definition
 */

var NavContainer = require('./NavContainer.js');
var NavTabs = require('./NavTabs.js');
var NavBtns = require('./NavBtns.js');

angular.module('NavigationPkg', [])
  .service('NavContainer', NavContainer)
  .service('NavTabs', NavTabs)
  .service('NavBtns', NavBtns);