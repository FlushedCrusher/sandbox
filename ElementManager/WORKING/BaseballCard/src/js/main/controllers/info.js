/**
 * Info State Controller
 * 
 * @returns {info}
 */

function info($injector, $compile, $scope, $interval) {
  'use strict';

  var ElementManager = $injector.get('ElementManager');
  ElementManager.bind($scope, $compile);

  var Config = $injector.get('Config');
  var CONST = Config.baseballcard.constants;

  $scope.track = {};

  if(Config.baseballcard.constants.FAKEDATA) {
    // Set any variables that need to be tested.
    $scope.flag_pic = CONST.FAKE.FLAG_PIC;
    $scope.track.flag = CONST.FAKE.FLAG;
    $scope.country = CONST.FAKE.COUNTRY;
    $scope.track.name = CONST.FAKE.NAME;
    $scope.track.home_port = CONST.FAKE.HOME_PORT;
    $scope.track.last_update = CONST.FAKE.LAST_UPDATE;
    $scope.track.image = CONST.FAKE.IMAGE;
    $scope.track.location = CONST.FAKE.LOCATION;
    
    $scope.track.time_delay = 'Calculating time delay...';
    var tock = function() {
      $scope.track.time_delay = $scope.track.last_update + 1;
    };			
    $interval(tock, 1000);
  }
  
  ElementManager
    .setUI('info')
    .build();

}

module.exports = info;