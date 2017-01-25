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

  $scope.$watch('DATA.TRACK.CLASSIFICATION', function(newValue, oldValue) { // eslint-disable-line no-unused-vars
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
  });

  $scope.tabClick = function(e) {
    var nav = ElementManager.get('navigation-tabs');
    var _item = e.toElement;
    nav.children.forEach(function(child) {
      if(child.options.type !== 'li') {
        return;
      }
      child.removeClass('active');
    });
    nav.children[_item.dataset.index].addClass('active');
  };

  ElementManager
    .setUI('Info')
    .build();

}

module.exports = InfoCtrl;