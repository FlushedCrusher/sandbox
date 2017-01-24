/**
 * Info State Controller
 * 
 * @returns {InfoCtrl}
 */

function InfoCtrl($injector, $compile, $templatecache, $timeout, $scope) {
  'use strict';

  var ElementManager = $injector.get('ElementManager');
  ElementManager.bind($scope, $compile);

  var Config = $injector.get('Config');
  var TEST = Config.BASEBALLCARD.TEST;
  var CONST = Config.BASEBALLCARD.CONSTANTS;

  $scope.DATA = TEST;

  $scope.$watch('title', function(newValue, oldValue) {
    if(newValue !== oldValue) {
      var thisClass = '';
			if(newValue.length > 0) {
				if(newValue.charAt(0).toUpperCase() === "U") {
					thisClass = "class-unclass";
				} else if (newValue.charAt(0).toUpperCase() === "S"){
					thisClass = "class-secret";
				} else if (newValue.charAt(0).toUpperCase() === "T"){
					thisClass = "class-top-secret";
				}
			} else {
				thisClass = "class-noclass";
			}
      ElementManager.get('Header').removeClasses(CONST.CLASSIFICATION_CLASSES);
      ElementManager.get('Header').addClass(thisClass);
      ElementManager.get('Header').setTextContent(newValue);
      ElementManager.get('Footer').removeClasses(CONST.CLASSIFICATION_CLASSES);
      ElementManager.get('Footer').addClass(thisClass);
      ElementManager.get('Footer').setTextContent(newValue);
    }
  });

  ElementManager
    .setUI('Info')
    .build();

}

module.exports = InfoCtrl;