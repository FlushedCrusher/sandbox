'use strict'; // eslint-disable-line strict

require('./states/StatePkg.js');

var run = require('./run.js');
var InfoCtrl = require('./controllers/InfoCtrl.js');

angular.module('app',
  [
    'StatePkg'
  ])
  .run([
    '$injector',
    '$compile',
    '$rootScope',
    run
  ])
  .controller('info', [
    '$injector',
    '$compile',
    '$scope',
    InfoCtrl
  ]);