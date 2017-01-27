/**
 * Info State Controller
 * 
 * @returns {InfoCtrl}
 */

function InfoCtrl($injector, $compile, $templatecache, $timeout, $scope) {
  'use strict';

  var ElementManager = $injector.get('ElementManager');
  ElementManager.bind($scope, $compile);

  var service = $injector.get('info-service');
  var Config = $injector.get('Config');
  var TEST = Config.BASEBALLCARD.TEST;

  $scope.DATA = TEST;

  $scope.$watch('DATA.TRACK.CLASSIFICATION', service.onClassificationChanged);

  $scope.onTabClick = service.onTabClick;
  $scope.onNavRefreshClick = service.onNavRefreshClick;
  $scope.onNavEyeconClick = service.onNavEyeconClick;
  $timeout(service.popData, 500);

  ElementManager
    .setUI('Info')
    .build();

}

module.exports = InfoCtrl;