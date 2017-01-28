/**
 * Info State Controller
 * 
 * @returns {InfoCtrl}
 */

function InfoCtrl($injector, $compile, $scope) {
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
  
  var _setTimeDelay = function() {
    $scope.TRACK.setTimeDelay();
  };
  service.startTimeDelayCaluculator(_setTimeDelay, 1000);
  service.popDataOnDelay();

  $scope.$on('$destroy', function() {
    service.stopTimeDelayCaluculator();
  });

  ElementManager
    .setUI('Info')
    .build();

}

module.exports = InfoCtrl;