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
  var isTest = Config.BASEBALLCARD.TEST.VALUE;

  $scope.TRACK = service.getTrackData();

  if(isTest) {
    var TEST = Config.BASEBALLCARD.TEST.DATA;
    $scope.TRACK.image = TEST.IMAGE;
    $scope.TRACK.flagPic = TEST.FLAG_PIC;
    $scope.COUNTRY = TEST.COUNTRY;
  }

  $scope.$watch('TRACK.classification', service.onClassificationChanged);

  $scope.onTabClick = service.onTabClick;
  $scope.onNavRefreshClick = service.onNavRefreshClick;
  $scope.onNavEyeconClick = service.onNavEyeconClick;
  $timeout(service.popData, 500);
  service.startTimeDelayCaluculator($scope.TRACK.setTimeDelay.bind($scope.TRACK), 1000);

  $scope.$on('$destroy', function() {
    service.stopTimeDelayCaluculator();
  });

  ElementManager
    .setUI('Info')
    .build();

}

module.exports = InfoCtrl;