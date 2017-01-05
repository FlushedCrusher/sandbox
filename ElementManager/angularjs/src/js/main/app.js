'use strict'; // eslint-disable-line strict

require('../Div/DivPkg.js');
require('../Element/ElementPkg.js');
require('../Events/EventsPkg.js');
require('../Style/StylePkg.js');

var main = require('./controllers/main.js');

angular.module('app',
  [
    'DivPkg',
    'ElementPkg',
    'EventsPkg',
    'StylePkg'
  ])
  .controller('main', [
    '$injector',
    main
  ]);