/**
 * Info State Controller
 * 
 * @returns {InfoCtrl}
 */

function InfoCtrl($injector, $scope) {
  'use strict';

  var CONFIG = $injector.get('Config');
  var $compile = $injector.get('$compile');
  var $sce = $injector.get('$sce');
  var ElementManager = $injector.get('ElementManager');
  var service = $injector.get('info-service');
  var isTest = CONFIG.TEST.VALUE;

  ElementManager.bind($scope, $compile);

  $scope.TRACK = service.getTrackData();

  if(isTest) {
    var TEST = CONFIG.TEST.DATA;
    $scope.TRACK.image = TEST.IMAGE;
    $scope.TRACK.flagPic = TEST.FLAG_PIC;
    $scope.COUNTRY = TEST.COUNTRY;
  }

  $scope.$watch('TRACK.classification', service.onClassificationChanged);

  $scope.onTabClick = service.onTabClick;
  $scope.onNavRefreshClick = service.onNavRefreshClick;
  $scope.onNavEyeconClick = service.onNavEyeconClick;
  $scope.eyeconTip = '';
  $scope.getEyeConTip = function() {
    $scope.eyeconTip = $sce.trustAsHtml(service.getEyeConTip());
  };
  
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