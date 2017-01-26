/**
 * Info State Service
 * 
 * @returns {InfoSvc}
 */

function InfoSvc($injector, $http, $timeout) { // eslint-disable-line no-unused-vars
  'use strict';

  var ElementManager = $injector.get('ElementManager');
  var Config = $injector.get('Config');
  var CONST = Config.BASEBALLCARD.CONSTANTS;

  var onClassificationChanged = function(newValue, oldValue) { // eslint-disable-line no-unused-vars
    //'use strict';
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
  };

  var onTabClick = function(e) {
    var nav = ElementManager.get('navigation-tabs');
    var _item = e.toElement;
    nav.children.forEach(function(child) {
      if(child.options.type !== 'li') {
        return;
      }
      child.removeClass('active');
    });
    nav.children[_item.dataset.index].addClass('active');
    console.debug('Clicked: ' + _item.textContent.trim());
  };

  var onNavRefreshClick = function(e) { // eslint-disable-line no-unused-vars
    console.debug('Refreshing data...');
  };

  var onNavEyeconClick = function(e) { // eslint-disable-line no-unused-vars
    console.debug('Toggling eyecon / watch list...');
  };

  return {
    onClassificationChanged: onClassificationChanged,
    onTabClick: onTabClick,
    onNavRefreshClick: onNavRefreshClick,
    onNavEyeconClick: onNavEyeconClick
  };

}

module.exports = InfoSvc;