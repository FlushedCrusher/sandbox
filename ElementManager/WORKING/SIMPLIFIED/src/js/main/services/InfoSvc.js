/**
 * Info State Service
 * 
 * @returns {InfoSvc}
 */

/* global $ */

function InfoSvc($injector, $timeout, $interval) { // eslint-disable-line no-unused-vars
  'use strict';

  var ElementManager = $injector.get('ElementManager');
  var Config = $injector.get('Config');
  var exTrackService = $injector.get('ex-track-service');
  var exWatchListSvc = $injector.get('ex-watch-list-service');
  var CONST = Config.BASEBALLCARD.CONSTANTS;

  var _timeDelayCalculator = undefined;

  var _popData = function() {
    $(document).ready(function(){
      $('.dynamic-color > p').each(function(){
        if ($(this).text().trim() !== 'No Data') {
          $(this).css('color', 'black');
        }
      });
    });
  };
  var isWatched = function() {
    return exWatchListSvc.isWatched();
  };
  var _toggleWatched = function() {
    exWatchListSvc.toggleWatched();
  };

  var getTrackData = function() {
    return exTrackService.getTrackData();
  };
  var onClassificationChanged = function(newValue, oldValue) { // eslint-disable-line no-unused-vars
    //'use strict';
    var thisClass = 'class-noclass';
    if(newValue.length > 0) {
      if(newValue.charAt(0).toUpperCase() === 'U') {
        thisClass = 'class-unclass';
      } else if (newValue.charAt(0).toUpperCase() === 'S'){
        thisClass = 'class-secret';
      } else if (newValue.charAt(0).toUpperCase() === 'T'){
        thisClass = 'class-top-secret';
      }
    }
    ElementManager.get('Header').removeClasses(CONST.CLASSIFICATION_CLASSES);
    ElementManager.get('Header').addClass(thisClass);
    ElementManager.get('Header').setTextContent(newValue);
    ElementManager.get('Footer').removeClasses(CONST.CLASSIFICATION_CLASSES);
    ElementManager.get('Footer').addClass(thisClass);
    ElementManager.get('Footer').setTextContent(newValue);
  };
  var startTimeDelayCaluculator = function(toDo, every) {
    if(_timeDelayCalculator) {
      return;
    }
    _timeDelayCalculator = $interval(toDo, every);
  };
  var stopTimeDelayCaluculator = function() {
    if(_timeDelayCalculator) {
      $interval.cancel(_timeDelayCalculator);
      _timeDelayCalculator = undefined;
    }
  };
  var popDataOnDelay = function() {
    $timeout(_popData, 500);
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
    _toggleWatched();
    setEyeCon();
  };
  var setEyeCon = function() {
    if(isWatched()) {
      ElementManager.get('nav-eyecon').removeClass('glyphicon-eye-close');
      ElementManager.get('nav-eyecon').addClass('glyphicon-eye-open');
    } else {
      ElementManager.get('nav-eyecon').removeClass('glyphicon-eye-open');
      ElementManager.get('nav-eyecon').addClass('glyphicon-eye-close');
    }

  };
  var getEyeConTip = function() {
    return exWatchListSvc.getEyeConTip();
  };

  return {
    onClassificationChanged: onClassificationChanged,
    onTabClick: onTabClick,
    onNavRefreshClick: onNavRefreshClick,
    onNavEyeconClick: onNavEyeconClick,
    popDataOnDelay: popDataOnDelay,
    getTrackData: getTrackData,
    startTimeDelayCaluculator: startTimeDelayCaluculator,
    stopTimeDelayCaluculator: stopTimeDelayCaluculator,
    isWatched: isWatched,
    setEyeCon: setEyeCon,
    getEyeConTip: getEyeConTip
  };

}

module.exports = InfoSvc;