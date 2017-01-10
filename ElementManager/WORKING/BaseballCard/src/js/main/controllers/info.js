/**
 * Info State Controller
 * 
 * @returns {info}
 */

function info($injector, $compile, $scope) {
  'use strict';

  var ElementManager = $injector.get('ElementManager');

  var Stubs = $injector.get('Stubs');
  $scope.track = Stubs.FULL_TRACKDATA;

  ElementManager
    .setUI('info')
    .build();

}

module.exports = info;