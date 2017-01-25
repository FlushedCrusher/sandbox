/**
 * Info State Controller
 * 
 * @returns {InfoCtrl}
 */

function InfoCtrl($injector, $compile, $scope, $timeout) {
  'use strict';

  var ElementManager = $injector.get('ElementManager');
  ElementManager.bind($scope, $compile);

  var Config = $injector.get('Config');
  var CONST = Config.baseballcard.constants;

  ElementManager
    .setUI('info')
    .build();

  $scope.track = {};

  if(Config.baseballcard.constants.FAKEDATA) {

    $scope.flag_pic = CONST.FAKE.FLAG_PIC;
    $scope.country = CONST.FAKE.COUNTRY;

    $scope.track.flag = CONST.FAKE.FLAG;
    $scope.track.name = CONST.FAKE.NAME;
    $scope.track.home_port = CONST.FAKE.HOME_PORT;
    $scope.track.last_update = CONST.FAKE.LAST_UPDATE;
    $scope.track.image = CONST.FAKE.IMAGE;
    $scope.track.location = CONST.FAKE.LOCATION; 
    $scope.track.time_delay = 'Calculating time delay...';

		$timeout(popData, 500);
  }

  function popData() {
    $(document).ready(function(){
      $('.dynamic-color > p').each(function(){
        if ($(this).text().trim() !== 'No Data') {
          $(this).css('color','black');
        }
      });
    });
  }

}

module.exports = InfoCtrl;