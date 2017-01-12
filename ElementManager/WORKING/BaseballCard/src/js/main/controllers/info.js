/**
 * Info State Controller
 * 
 * @returns {info}
 */

function info($injector, $compile, $scope, $interval) {
  'use strict';

  var ElementManager = $injector.get('ElementManager');
  ElementManager.bind($scope, $compile);

  var Stubs = $injector.get('Stubs');
  $scope.track = Stubs.FULL_TRACKDATA;

  var Config = $injector.get('Config');

  if(Config.baseballcard.constants.FAKEDATA) {
    // Set any variables that need to be tested.
    $scope.flag_pic = 'C:/Users/dmontane/Documents/DCGS-N/tmp/img/ra-flag.png';
    $scope.track.flag = 'RA';
    $scope.country = 'RA';
    $scope.track.name = 'Millennium Falcon';
    $scope.track.home_port = 'Corellia';
    $scope.track.last_update = 1463014800000;
    $scope.track.image = 'C:/Users/dmontane/Documents/DCGS-N/tmp/img/ship.jpg';
    
    var testloc = {
      lat: 19.203333333333333,
      lon: 121.91388888888889
    };
    //testloc = getLocation(testloc.lat, testloc.lon);
    $scope.track.location = testloc;
    
    $scope.track.time_delay = 'Calculating time delay...';
    var tock = function() {
      $scope.track.time_delay = $scope.track.last_update + 1; // getDelay(Date.now() - $scope.track.last_update);
    };			
    $interval(tock, 1000);
    // $timeout(popData, 500);
  }
  ElementManager
    .setUI('info')
    .build();

}

module.exports = info;