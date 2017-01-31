/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'; // eslint-disable-line strict

	var run = __webpack_require__(1);
	var InfoSvc = __webpack_require__(7);
	var TrackSvc = __webpack_require__(8);
	var WatchListSvc = __webpack_require__(9);
	var ConfiguratorSvc = __webpack_require__(10);
	var InfoCtrl = __webpack_require__(11);

	__webpack_require__(12);
	__webpack_require__(15);
	__webpack_require__(22);
	__webpack_require__(24);

	angular.module('app',
	  [
	    'ui.bootstrap',
	    'ConfigPkg',
	    'ElementPkg',
	    'TemplatePkg',
	    'TrackPkg'
	  ])
	  .run([
	    '$injector',
	    run
	  ])
	  .service('ex-configurator-service', [
	    '$injector',
	    ConfiguratorSvc
	  ])
	  .service('ex-track-service', [
	    '$injector',
	    TrackSvc
	  ])
	  .service('ex-watch-list-service', [
	    '$injector',
	    WatchListSvc
	  ])
	  .service('info-service', [
	    '$injector',
	    InfoSvc
	  ])
	  .controller('info-controller', [
	    '$injector',
	    '$scope',
	    InfoCtrl
	  ]);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Run State Controller
	 * 
	 * @returns {run}
	 */

	var createBaseballCardTemplates = __webpack_require__(2);

	function run($injector) {
	  'use strict';

	  var $templateCache = $injector.get('$templateCache');

	  var ElementManager = $injector.get('ElementManager');
	  var Template = $injector.get('Template');
	  createBaseballCardTemplates(Template);

	  var HeaderTemplate = Template.get('Header');
	  var Header = ElementManager.createFromTemplate(HeaderTemplate);
	  $templateCache.put('header.html', HeaderTemplate);

	  var FooterTemplate = Template.get('Footer');
	  var Footer = ElementManager.createFromTemplate(FooterTemplate);
	  $templateCache.put('footer.html', FooterTemplate);

	  var PanelTemplate = Template.get('Panel');
	  var Panel = ElementManager.createFromTemplate(PanelTemplate);
	  $templateCache.put('panel.html', PanelTemplate);

	  ElementManager
	    .addOrReplace('Header', Header)
	    .addOrReplace('Panel', Panel)
	    .addOrReplace('Footer', Footer)
	    .saveUI('Info');

	}

	module.exports = run;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * BaseballCardTemplates Implementation
	 * 
	 * @param {Template} Template
	 * @returns {BaseballCardTemplates}
	 */

	var InfoTemplate = __webpack_require__(3);
	var BaseballCardStyles = __webpack_require__(6);

	function BaseballCardTemplates(Template) {
	    'use strict';

	    var Styles = new BaseballCardStyles();

	    var createPanelBody = function(data) {
	      var PanelBody =
	        '<div class="panel-body" style="' + Styles.ZeroMarginZeroPadding + '">' +
	        '<img class="ship-pic" ng-src="{{TRACK.image}}" onerror="this.style.display=\'none\'">' +
	        PanelNavigation +
	        data +
	        '</div>';
	      return PanelBody;
	    };

	    var HeaderTemplate =
	      '<header class="header class-noclass">' +
	      '<p style="' + Styles.ZeroMarginZeroPadding + '">{{TRACK.classification}}</p>' +
	      '</header>';
	    Template.set('Header', HeaderTemplate);

	    var InfoTabContent = new InfoTemplate().tabContent;

	    var PanelHeading =
	      '<div class="panel-heading" style="' + Styles.PanelHeadingStyle + '">' +
	      '<img class="flag-pic" ng-src="{{TRACK.flagPic}}" onerror="this.style.display=\'none\'">' +
	      '<span class="ng-binding">' +
	      '<!-- Track Name -->' +
	      '{{" " + (TRACK.name | uppercase) + ", "}}' +
	      '</span>' +
	      '<span class="ng-binding">' +
	      '<!-- Country Code -->' +
	      '{{COUNTRY | uppercase}}' +
	      '</span>' +
	      '<span class="float-right ng-binding" style="' + Styles.FloatRight + '">' +
	      '<!-- Last Updated -->' +
	      'Last Updated - {{TRACK.lastUpdate | date:\'dd MMM yyyy HH:mm:ss\' : \'UTC\' | uppercase}}Z' +
	      '</span>' +
	      '</div>';

	    var PanelNavigationButtons =
	      '<div class="btn-group" role="group" aria-label="..." style="' + Styles.PanelNavigationButtonGroupStyle + '">' +
	      '<a href="" ng-click="onNavRefreshClick($event)">' +
	      '<span ' +
	      'id="nav-refresh"' +
	      'class="glyphicon glyphicon-refresh btn-hover" ' +
	      'uib-tooltip="Refresh" ' +
	      'style="' + Styles.PanelNavigationButtonStyle + '"></span>' +
	      '</a>' +
	      '<a href="" ng-click="onNavEyeconClick($event)">' +
	      '<span ' +
	      'id="nav-eyecon"' +
	      'class="glyphicon glyphicon-eye-close btn-hover" ' +
	      'ng-mouseover="getEyeConTip()" ' +
	      'data-uib-tooltip-html="eyeconTip" ' +
	      'style="' + Styles.PanelNavigationButtonStyle + '"></span>' +
	      '</a>' +
	      '</div>';

	    var PanelNavigation =
	      '<div style="' + Styles.PanelNavigationStyle + '">' +
	      '<ul id="navigation-tabs" class="nav nav-tabs" style="' + Styles.PanelNavigationTabStyle + '">' +
	      '<li role="navigation" class="active">' +
	      '<a href="" ng-click="onTabClick($event)" data-index="0">' +
	      'Track Info' +
	      '</a>' +
	      '</li>' +
	      '<li role="navigation">' +
	      '<a href="" ng-click="onTabClick($event)" data-index="1">' +
	      'Active Alerts' +
	      '</a>' +
	      '</li>' +
	      '<li role="navigation">' +
	      '<a href="" ng-click="onTabClick($event)" data-index="2">' +
	      'Notes' +
	      '</a>' +
	      '</li>' +
	      PanelNavigationButtons +
	      '</ul>' +
	      '</div>';

	    var PanelBody = createPanelBody(InfoTabContent);
	    var PanelTemplate =
	      '<div class="scroll-content">' +
	      '<div class="panel panel-default" style="' + Styles.PanelTemplateStyle + '">' +
	      PanelHeading +
	      PanelBody +
	      '</div>' +
	      '</div>';
	    Template.set('Panel', PanelTemplate);

	    var FooterTemplate =
	      '<footer class="footer class-noclass">' +
	      '<p style="' + Styles.ZeroMarginZeroPadding + '">{{TRACK.classification}}</p>' +
	      '</footer>';
	    Template.set('Footer', FooterTemplate);

	}

	module.exports = BaseballCardTemplates;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Info State Templates
	 * 
	 * @param {Template} Template
	 * @returns {BaseballCardTemplates}
	 */

	var InfoStyles = __webpack_require__(4);

	function InfoTemplate() {
	  'use strict';

	  var Styles = new InfoStyles();

	  var createTabRow = function (data) {
	    var TabRow =
	      '<div style="' + Styles.TabRowContainerStyle +'">' +
	      '<div class="panel panel-default" style="' + Styles.ZeroMarginZeroPadding + '">' +
	      '<div class="panel-body" style="' + Styles.ZeroMarginZeroPadding + '">' +
	      '<table class="table table-no-border" style="' + Styles.TabTableStyle + '">' +
	      '<tbody>';
	    if (data.header) {
	      TabRow += createTableHeader(data.header);
	    }
	    TabRow += createTableRows(data);
	    TabRow +=
	      '</tbody>' +
	      '</table>' +
	      '</div>' +
	      '</div>' +
	      '</div>';
	    return TabRow;
	  };
	  var createTableRows = function (data) {
	    var TableRowCount = Math.ceil(data.cells.length / data.maxCols);
	    var TableRows = '';
	    for (var i = 0; i < TableRowCount; i++) {
	      TableRows += createTableRow(data.cells.slice(i * data.maxCols, (i + 1) * data.maxCols));
	    }
	    return TableRows;
	  };
	  var createTableRow = function (data) {
	    var TableRow =
	      '<tr>';
	    data.forEach(function (cellData) {
	      TableRow += createTableCell(cellData);
	    });
	    TableRow +=
	      '</tr>';
	    return TableRow;
	  };
	  var createTableHeader = function (data) {
	    var TableHeader =
	      '<tr>' +
	      '<td colspan="' + data.width + '">' +
	      '<i>' + data.text + '</i>' +
	      '</td>' +
	      '</tr>';
	    return TableHeader;
	  };
	  var createTableCell = function (data) {
	    var TableCell =
	      '<td>' +
	      '<label for="' + data.name + '" style="' + Styles.TableCellLabelStyle + '">' + data.label + '</label>' +
	      '<div class="dynamic-color">' +
	      '<p id="' + data.name + '" style="' + Styles.TableCellTextStyle + '" name="' + data.name + '">' + data.value + '</p>' +
	      '</div>' +
	      '</td>';
	    return TableCell;
	  };

	  this.tabContent =
	    '<div style="' + Styles.TabContentContainerStyle + '">' +
	      createTabRow({
	        header: {
	          text: 'Identification Information',
	          width: 4
	        },
	        cells: [
	          { name: 'ltn', label: 'LTN', value: '{{TRACK.ltn}}'},
	          { name: 'category', label: 'Category', value: '{{TRACK.category}}'},
	          { name: 'display-name', label: 'Display Name', value: '{{TRACK.displayName}}'},
	          { name: 'hull-num', label: 'Hull #', value: '{{TRACK.hullNumber}}' },
	          { name: 'mmsi', label: 'MMSI', value: '{{TRACK.mmsi}}'},
	          { name: 'sconum', label: 'SCONUM', value: '{{TRACK.sconum}}'},
	          { name: 'call-sign', label: 'Call Sign', value: '{{TRACK.callSign}}'},
	          { name: 'ship-class', label: 'Ship Class', value: '{{TRACK.shipClass}}'},
	          { name: 'type-msn', label: 'Type/MSN', value: '{{TRACK.trackType}}'},
	          { name: 'subordination', label: 'Subordination', value: '{{TRACK.subordination}}'},
	          { name: 'be-num', label: 'BE #', value: '{{TRACK.beNumber}}'},
	          { name: 'threat', label: 'Threat', value: '{{TRACK.threat}}'}
	        ],
	        maxCols: 4
	      }) +
	      createTabRow({
	        header: {
	          text: 'Last Contact',
	          width: 4
	        },
	        cells: [
	          { name: 'location', label: 'Location', value: '{{TRACK.location.lat}}<br>{{TRACK.location.lon}}'},
	          { name: 'time-delay', label: 'Time Delay', value: '{{TRACK.timeDelay}}'},
	          { name: 'source', label: 'Source', value: '{{TRACK.source}}'},
	          { name: 'track-type', label: 'Track Type', value: '{{TRACK.trackType}}' },
	          { name: 's2a-type', label: 'S2A Type', value: '{{TRACK.s2aType}}'},
	          { name: 'vessel-type', label: 'Vessel Type', value: '{{TRACK.vesselType}}'},
	          { name: 'days-deployed', label: 'Days Underway', value: '{{TRACK.daysDeployed}}'},
	          { name: 'last-port', label: 'Last Port', value: '{{TRACK.lastPort}}'},
	          { name: 'next-port', label: 'Next Port', value: '{{TRACK.nextPort}}'},
	          { name: 'home-port', label: 'Home Port', value: '{{TRACK.homePort}}'},
	        ],
	        maxCols: 4
	      }) +
	      createTabRow({
	        header: {
	          text: 'Vessel Information',
	          width: 4
	        },
	        cells: [
	          { name: 'speed-capability', label: 'Speed Capability', value: '{{TRACK.speedCap}}'},
	          { name: 'avg-reported-speed', label: 'Avg Reported Speed', value: '{{TRACK.averageSpeed}}'},
	          { name: 'last-refuel', label: 'last Refuel', value: '{{TRACK.lastRefuel}}'},
	          { name: 'readiness', label: 'Readiness', value: '{{TRACK.readiness}}' },
	          { name: 'major-weapons', label: 'Major Weapons', value: '{{TRACK.majorWeapons}}'}
	        ],
	        maxCols: 4
	      });
	    '</div>';
	}

	module.exports = InfoTemplate;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	
	var GlobalStyles = __webpack_require__(5);

	function InfoStyles() {
	  'use strict';

	  GlobalStyles.call(this);

	  this.TabContentContainerStyle =
	    'background: rgb(238, 238, 238);' +
	    'padding: 3px;';
	  this.TabRowContainerStyle =
	    'padding: 4px 3px;';
	  this.TabTableStyle = 
	    'margin: 0;' + 
	    'padding: 2.5px 5px;' +
	    'table-layout: fixed;';
	  this.TableCellLabelStyle =
	    'margin: 0;' +
	    'padding: 0;' +
	    'color: #bfbfbf;';
	  this.TableCellTextStyle =
	    this.ZeroMarginZeroPadding +
	    'color: #666666;';

	}
	module.exports = InfoStyles;

/***/ },
/* 5 */
/***/ function(module, exports) {

	function GlobalStyles() {
	  'use strict';

	  this.FloatRight =
	    'float: right;';
	  this.ZeroMarginZeroPadding =
	    'margin: 0px;' +
	    'padding: 0px;';

	}

	module.exports = GlobalStyles;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	
	var GlobalStyles = __webpack_require__(5);

	function BaseballCardStyles() {
	  'use strict';

	  GlobalStyles.call(this);
	  
	  this.PanelTemplateStyle =
	    'margin-left: auto;' +
	    'margin-right: auto;' +
	    'max-width: 510px;';
	  this.PanelHeadingStyle =
	    'background-color: white;' +
	    'color: black;' +
	    'padding-top: 3px;' +
	    'padding-bottom: 3px;';
	  this.PanelNavigationStyle =
	    'background-color: white;';
	  this.PanelNavigationTabStyle =
	    'padding-top: 5px;';
	  this.PanelNavigationButtonGroupStyle =
	    'float: right;' +
	    'padding-right: 10px;';
	  this.PanelNavigationButtonStyle =
	    'padding-top: 10px;' +
	    'padding-right: 10px;' +
	    'font-size: 15px;' +
	    'color: gray;';
	}

	module.exports = BaseballCardStyles;

/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Info State Service
	 * 
	 * @returns {InfoSvc}
	 */

	/* global $ */

	function InfoSvc($injector) { // eslint-disable-line no-unused-vars
	  'use strict';
	  var CONFIG = $injector.get('Config');
	  var $timeout = $injector.get('$timeout');
	  var $interval = $injector.get('$interval');
	  var ElementManager = $injector.get('ElementManager');
	  var exTrackService = $injector.get('ex-track-service');
	  var exWatchListSvc = $injector.get('ex-watch-list-service');

	  var CONST = CONFIG.BASEBALLCARD;
	  var _timeDelayCalculator = undefined;

	  var _popData = function() {
	    // TODO: Refactor to use the new Element wrapper.
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
	    // nav.removeClassFromChildren('active')
	    nav.getChildren().removeClass('active');
	    // nav.addClassToChildAtIndex(_item.dataset.index);
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

/***/ },
/* 8 */
/***/ function(module, exports) {

	
	function TrackSvc($injector) {
	  'use strict';
	  this.CONFIG = $injector.get('Config');
	  this._http = $injector.get('$http');
	  this._q = $injector.get('$q');
	  this._track = $injector.get('GeoserverTrack');
	  var exConfiguratorSvc = $injector.get('ex-configurator-service');
	  
	  this.CONST = this.CONFIG.TRACK_SVC;
	  this.isTest = this.CONST.TEST || this.CONFIG.TEST.VALUE;
	  this.URL = exConfiguratorSvc.get(this.CONST.KEY);
	}
	TrackSvc.prototype.getTrackData = function(data) {
	  'use strict';
	  var _data = this.isTest ? this.CONFIG.TEST.DATA : data;
	  return new this._track(_data);
	};

	module.exports = TrackSvc;

/***/ },
/* 9 */
/***/ function(module, exports) {

	
	function WatchListSvc($injector) {
	  'use strict';
	  this.CONFIG = $injector.get('Config');
	  this._http = $injector.get('$http');
	  this._q = $injector.get('$q');
	  var exConfiguratorSvc = $injector.get('ex-configurator-service');

	  this.CONST = this.CONFIG.WATCHLIST_SVC;
	  this.isTest = this.CONST.TEST || this.CONFIG.TEST.VALUE;
	  this.URL = exConfiguratorSvc.get(this.CONST.KEY);
	  this.watched = false;
	  this.eyeConTip = this.CONST.EYECON_ADD_TIP;
	}
	WatchListSvc.prototype.getEyeConTip = function() {
	  'use strict';
	  return this.eyeConTip;
	};
	WatchListSvc.prototype.isWatched = function() {
	  'use strict';
	  return this.watched;
	};
	WatchListSvc.prototype.addToWatchList = function() {
	  'use strict';
	  this.eyeConTip = this.CONST.EYECON_REMOVE_TIP;
	  this.watched = true;
	  return this;
	};
	WatchListSvc.prototype.removeFromWatchList = function() {
	  'use strict';
	  this.eyeConTip = this.CONST.EYECON_ADD_TIP;
	  this.watched = false;
	  return this;
	};
	WatchListSvc.prototype.toggleWatched = function() {
	  'use strict';
	  this.eyeConTip = (this.eyeConTip === this.CONST.EYECON_ADD_TIP) ? this.CONST.EYECON_REMOVE_TIP : this.CONST.EYECON_ADD_TIP;
	  this.watched = !this.watched;
	  return this;
	};

	module.exports = WatchListSvc;

/***/ },
/* 10 */
/***/ function(module, exports) {

	
	function ConfiguratorSvc($injector) {
	  'use strict';
	  this.CONFIG = $injector.get('Config');
	  this._timeout = $injector.get('$timeout');
	  this._location = $injector.get('$location');
	  this._http = $injector.get('$http');
	  this._q = $injector.get('$q');

	  this.CONST = this.CONFIG.CONFIGURATOR_SVC;
	  this.isTest = this.CONST.TEST || this.CONFIG.TEST.VALUE;
	  this.baseURL = this._location.protocol() + '://' + this._location.host();
	  this.URL = this.baseURL + this.CONST.URL;
	  this.cache = new Map();
	}
	ConfiguratorSvc.prototype.get = function(key) {
	  'use strict';
	  if(this.isTest) {
	    return this._timeout(function() {
	      return key;
	    }, 5000);
	  }
	  var self = this, request = this._q.defer();
	  this._http.get(this.getRequestUrl(key))
	    .success(
	      function(response) {
	        self.set(key, response);
	        request.resolve('success');
	      }
	    )
	    .error(
	      function(error) {
	        request.resolve('error');
	      }
	    );
	  return request.promise;;
	};
	ConfiguratorSvc.prototype.all = function(keys) {
	  'use strict';
	  var self = this, results = [];
	  keys.forEach(function(key) {
	    results.push(self.getConfig(key));
	  });
	  return this_q.all(results);
	};
	ConfiguratorSvc.prototype.getRequestUrl = function(key) {
	  'use strict';
	  return this.URL.replace('{{configKey}}', key);
	};

	module.exports = ConfiguratorSvc;

/***/ },
/* 11 */
/***/ function(module, exports) {

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

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ConfigPkg module definition
	 */

	var Config = __webpack_require__(13);

	angular.module('ConfigPkg', [])
	  .constant('Config', Config);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Config Variables
	 * 
	 * @returns {CONFIG}
	 */

	var TestData = __webpack_require__(14);

	var CONFIG = {
	  BASEBALLCARD: {
	    CLASSIFICATION_CLASSES: [
	      'class-noclass',
	      'class-unclass',
	      'class-secret',
	      'class-top-secret'
	    ]
	  },
	  CONFIGURATOR_SVC: {
	    URL: '/ufs-configurator/rest/configuration/{{configKey}}/configuration'
	  },
	  TEST: {
	    VALUE: true,
	    DATA: TestData,
	  },
	  TRACK_SVC: {
	    KEY: 'dcgsn.geoserver.track.uri'
	  },
	  WATCHLIST_SVC: {
	    KEY: 'dcgsn.watchlist-crud.uri',
	    EYECON_ADD_TIP: 'Add to Watch List.',
	    EYECON_REMOVE_TIP: 'Remove from Watch List.',
	  }
	};

	module.exports = CONFIG;

/***/ },
/* 14 */
/***/ function(module, exports) {

	var TestData = {
	  totalFeatures: 1,
	  features: [{
	    geometry: {
	      coordinates: [121.91388888888889, 19.203333333333333],
	    },
	    properties: {
	      avg_speed: "averageSpeed",
	      beNumber: "beNumber",
	      blueprints: "blueprints",
	      callsign: "callSign",
	      cargo: "cargo",
	      charterOwner: "charterOwner",
	      CLASSIFICATION: "SECRET",
	      crewComp: "crewComp",
	      days_deployed: "daysDeployed",
	      DISPLAY_NAME: "displayName",
	      FLAG: "RA",
	      freeboard: "freeboard",
	      home_port: "Corellia",
	      HULL_NUMBER: "hullNumber",
	      last_port: "lastPort",
	      LAST_REFUEL: "lastRefuel",
	      length: "length",
	      LTN: "ltn",
	      MAJOR_WEAPONS: "majorWeapons",
	      MMSI: "mmsi",
	      next_port: "nextPort",
	      owner: "owner",
	      READINESS_LEVEL: "readiness",
	      S2A_TRACK_TYPE: "s2aType",
	      SCONUM: "sconum",
	      SHIP_CLASS: "shipClass",
	      source: "source",
	      speed_cap: "speedCap",
	      SUBORDINATION: "subordination",
	      THREAT: "threat",
	      TIME_STAMP: 1463014800000,
	      TRACK_GUID: "guid",
	      TRACK_ID: "trackNumber",
	      TRACK_TYPE: "trackType",
	      upRightRigSeq: "upRightRigSeq",
	      VESSEL_CATEGORY: "category",
	      VESSEL_NAME: "Millennium Falcon",
	      VESSEL_TYPE: "vesselType",
	      width: "width"
	    }
	  }],
	  FLAG_PIC:'../src/Test/data/img/ra-flag.png',
	  COUNTRY: 'RA',
	  IMAGE: '../src/Test/data/img/ship.jpg',
	};

	module.exports = TestData;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ElementPkg module definition
	 * 
	 * @requires {AngularHelper}
	 * @requires {Element}
	 * @requires {ElementManager}
	 * @requires {Guid}
	 */

	var Element = __webpack_require__(16);
	var ElementManager = __webpack_require__(17);

	__webpack_require__(18);
	__webpack_require__(20);

	angular.module('ElementPkg',
	  [
	    'AngularHelperPkg',
	    'GuidPkg'
	  ])
	  .factory('Element', function() {
	    'use strict';
	    return Element; 
	  })
	  .service('ElementManager', [
	    '$injector',  
	    ElementManager
	  ]);

/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * Dom Element wrapper
	 * 
	 * @param {string | Object | HTMLElement} template
	 * @returns {Element}
	 */
	function Element(template) {
	  'use strict';
	  this.template = template;
	  this.assign(this.template);
	}
	/**
	 * Assign object attributes
	 * 
	 * @param {string | Object | HTMLElement} template
	 * @returns {Element}
	 */
	Element.prototype.assign = function(template) {
	  'use strict';
	  this.children = [];
	  this.operator = angular.element(template);
	  this.element = this.operator[0];
	  return this;
	};
	/**
	 * Return single angular element of object element children
	 * 
	 * @returns {angular.element}
	 */
	Element.prototype.getChildren = function() {
	  'use strict';
	  return this.operator.children();
	};
	/**
	 * Add an angular element to object children array
	 * 
	 * @param {Element} component
	 * @returns {Element}
	 */
	Element.prototype.addChild = function(component) {
	  'use strict';
	  this.children.push(component);
	  return this;
	};
	/**
	 * Check if object element has a class
	 * 
	 * @param {string} _class
	 * @returns {boolean}
	 */
	Element.prototype.hasClass = function(_class) {
	  'use strict';
	  return this.operator.hasClass(_class);
	};
	/**
	 * Add a class to object element
	 * 
	 * @param {string} _class
	 * @returns {Element}
	 */
	Element.prototype.addClass = function(_class) {
	  'use strict';
	  this.operator.addClass(_class);
	  return this;
	};
	/**
	 * Remove a class from object element
	 * 
	 * @param {string} _class
	 * @returns {Element}
	 */
	Element.prototype.removeClass = function(_class) {
	  'use strict';
	  this.operator.removeClass(_class);
	  return this;
	};
	/**
	 * Add many calsses to object element
	 * 
	 * @param {string[]} _classList
	 * @returns {Element}
	 */
	Element.prototype.addClasses = function(_classList) {
	  'use strict';
	  var self = this;
	  _classList.forEach(function(_class) {
	    self.addClass(_class);
	  });
	  return this;
	};

	/**
	 * Remove many calsses from object element
	 * 
	 * @param {string[]} _classList
	 * @returns {Element}
	 */
	Element.prototype.removeClasses = function(_classList) {
	  'use strict';
	  var self = this;
	  _classList.forEach(function(_class) {
	    self.removeClass(_class);
	  });
	  return this;
	};
	/**
	 * Remove all classes from object element
	 * 
	 * @returns {Element}
	 */
	Element.prototype.clearClasses = function() {
	  'use strict';
	  this.element.classList = "";
	  return this;
	};
	/**
	 * Get an attribute from object element
	 * 
	 * @param {string} attribute
	 * @returns {string}
	 */
	Element.prototype.getAttribute = function(attribute) {
	  'use strict';
	  return this.operator.attr(attribute);
	};
	/**
	 * Check if attribute exists for object element
	 * 
	 * @param {string} attribute
	 * @returns {boolean}
	 */
	Element.prototype.hasAttribute = function(attribute) {
	  'use strict';
	  return this.getAttribute(attribute) ? true : false; // eslint-disable-line no-unneeded-ternary
	};
	/**
	 * Set object element attribute
	 * 
	 * @param {string} name
	 * @param {string} value
	 * @returns {Element}
	 */
	Element.prototype.setAttribute = function(name, value) {
	  'use strict';
	  this.operator.attr(name, value);
	  return this;
	};
	/**
	 * Remove object element attribute
	 * 
	 * @param {string} name
	 * @returns {Element}
	 */
	Element.prototype.removeAttribute = function(name) {
	  'use strict';
	  this.operator.removeAttr(name);
	  return this;
	};
	/**
	 * @typedef {Object} attribute
	 * @property {string} name Attribute name
	 * @property {string} value Sttribute value
	 */

	/**
	 * Set many object element attributes
	 * 
	 * @param {attribute[]} _attributes
	 * @returns {Element}
	 */
	Element.prototype.setAttributes = function(_attributes) {
	  'use strict';
	  var self = this;
	  _attributes.forEach(function(_attribute) {
	    self.setAttribute(_attribute.name, _attribute.value);
	  });
	  return this;
	};
	/**
	 * Remove all object element attributes
	 * 
	 * @returns {Element}
	 */
	Element.prototype.clearAttributes = function() {
	  'use strict';
	  var i = 0,
	    _attrs = this.element.attributes;
	  while(_attrs.length > i) {
	    var key = _attrs[i].name;
	    if(key === 'class' || key === 'style') {
	      i++;
	      continue;
	    }
	    this.removeAttribute(key);
	  }
	  return this;
	};
	/**
	 * Set object element text content
	 * 
	 * @param {string} content
	 * @returns {Element}
	 */
	Element.prototype.setTextContent = function(content) {
	  'use strict';
	  this.operator.text(content);
	  return this;
	};

	module.exports = Element;

/***/ },
/* 17 */
/***/ function(module, exports) {

	/**
	 * Element Manager 2
	 * 
	 * @requires {AngularHelper}
	 * @requires {ElementFactory}
	 * @requires {Guid}
	 * @returns {ElementManager}
	 */

	function ElementManager($injector) {
	  'use strict';

	  this.helper = $injector.get('AngularHelper');
	  this.guid = $injector.get('Guid');
	  this.element = $injector.get('Element');

	  this.elements = new Map();
	  this.elementsById = new Map();
	  this.UICache = {};

	  this.dom = document.body;
	  this.component = null;
	}
	ElementManager.prototype.bind = function(scope, compile) {
	  'use strict';
	  this.helper.bind(scope, compile);
	  return this;
	};
	ElementManager.prototype.get = function(key) {
	  'use strict';
	  return this.elements.get(key) || this.elementsById.get(key);
	};

	ElementManager.prototype.addToDom = function(component) {
	  'use strict';
	  this.dom.appendChild(component);
	  return this;
	};
	ElementManager.prototype.removeFromDom = function(component) {
	  'use strict';
	  if(this.dom.contains(component)) {
	    this.dom.removeChild(component);
	  }
	  return this;
	};
	ElementManager.prototype.clearDom = function() {
	  'use strict';
	  var self = this;
	  this.elements.forEach(function(n) {
	    self.removeFromDom(n.element);
	  });
	  return this;
	};
	ElementManager.prototype._build = function(context, elementMap, add) {
	  'use strict';
	  elementMap.forEach(function(e) {
	    add.call(context, e.element);
	  });
	};
	ElementManager.prototype.build = function() {
	  'use strict';
	  this.clearDom();
	  this._build(this, this.elements, this.addToDom);
	  this.compile();
	  return this;
	};
	ElementManager.prototype.compile = function() {
	  'use strict';
	  this.helper.compileContent(this.dom);
	  return this;
	};

	ElementManager.prototype.saveUI = function(name) {
	  'use strict';
	  var _name = name || this.guid.create();
	  this.UICache[_name] = this.getUI();
	  return this;
	};
	ElementManager.prototype.getUI = function() {
	  'use strict';
	  return new Map(this.elements);
	};
	ElementManager.prototype.setUI = function(name) {
	  'use strict';
	  this.clearUI();
	  this.elements = new Map(this.UICache[name]);
	  return this;
	};
	ElementManager.prototype.clearUI = function() {
	  'use strict';
	  delete this.elements;
	  this.elements = new Map();
	  return this;
	};

	ElementManager.prototype.addOrReplace = function(key, value) {
	  'use strict';
	  this.elements.set(key, value);
	  return this;
	};
	ElementManager.prototype.addIdReference = function(id, value) {
	  'use strict';
	  this.elementsById.set(id, value);
	  return this;
	};
	ElementManager.prototype.createFromTemplate = function(template) {
	  'use strict';
	  var self = this;
	  var element = new this.element(template);
	  var children = element.getChildren();
	  if(element.getAttribute('id')) {
	    this.addIdReference(element.getAttribute('id'), element);
	  }
	  children.each(function(idx) {
	    element.addChild(self.createFromTemplate(children[idx]));
	  });
	  return element;
	};

	module.exports = ElementManager;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Angular Package for AngularHelper modules
	 * 
	 * @requires {AngularHelper}
	 */
	var AngularHelper = __webpack_require__(19);

	/**
	 * AngularHelperPkg module definition
	 * @class {AngularHelperPkg}
	 */
	angular.module('AngularHelperPkg', [])
	/**
	 * AngularHelperPkg module definition
	 * @class {AngularHelper}
	 */
	.service('AngularHelper',  [AngularHelper]);

/***/ },
/* 19 */
/***/ function(module, exports) {

	/**
	 * AngularHelper wrapper
	 * 
	 * @returns {AngularHelper}
	 */
	function AngularHelper() {
	  'use strict';
	  this.scope;
	  this.compile;
	}
	/*
	 * Binds a scope and compile to the helper
	 * 
	 * @param {object} scope AngularJS $scope instance
	 * @param {object} compile AngularJS $compile
	 * @returns {AngularHelper}
	 */
	AngularHelper.prototype.bind = function(scope, compile) {
	  'use strict';
	  this.scope = scope;
	  this.compile = compile;
	  return this;
	};
	/*
	 * Compile angular content to HTMLElement
	 * 
	 * @param {String | object} content
	 * @returns {HTMLElement} _content
	 */
	AngularHelper.prototype.compileContent = function(content) {
	  'use strict';
	  var _content = this.compile ? this.compile(content)(this.scope) : content;
	  return _content;
	};

	module.exports = AngularHelper;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * GuidPkg module definition
	 * 
	 * @requires {Guid}
	 */

	var Guid = __webpack_require__(21);

	angular.module('GuidPkg', [])
	  .service('Guid', Guid);

/***/ },
/* 21 */
/***/ function(module, exports) {

	/**
	 * Guid generator and hash
	 * 
	 * @returns {Guid}
	 */

	function Guid() {
	  'use strict';
	  this.hash = new Map();
	}
	/*
	 * Generate a unique guid string
	 * 
	 * @returns {string} guid
	 */
	Guid.prototype.create = function() {
	  'use strict';
	  var guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8); // eslint-disable-line eqeqeq
	    return v.toString(16);
	  });
	  if(this.hash.has(guid)) {
	    guid = this.create();
	  } else {
	    this.hash.set(guid, guid);
	  }
	  return guid;
	};

	module.exports = Guid;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * TemplatePkg module definition
	 * 
	 * @requires {EventOptions}
	 */

	var Template = __webpack_require__(23);

	angular.module('TemplatePkg', [])
	  .service('Template', Template);

/***/ },
/* 23 */
/***/ function(module, exports) {

	/**
	 * Template Map
	 * 
	 * @returns {Template}
	 */

	function Template() {
	  'use strict';
	  this.cache = new Map();
	}
	Template.prototype.set = function(name, template) {
	  'use strict';
	  this.cache.set(name, template);
	  return this;
	};
	Template.prototype.get = function(name) {
	  'use strict';
	  return this.cache.get(name);
	};

	module.exports = Template;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Angular Package for Track modules
	 * 
	 * @requires {GeoserverTrack}
	 */
	var GeoserverTrack = __webpack_require__(25);

	/**
	 * TrackPkg module definition
	 * @class TrackPkg
	 */
	angular.module('TrackPkg', [])
	/**
	 * Geoserver Implementation of a Track
	 * @class GeoserverTrack
	 */
	.factory('GeoserverTrack', [function() {
	  'use strict';
	  return GeoserverTrack;
	}]);

/***/ },
/* 25 */
/***/ function(module, exports) {

	/**
	 * GeoserverTrack
	 * 
	 * @param {Object} data JSON Response from Geoserver
	 * @returns {GeoserverTrack}
	 */
	function GeoserverTrack(data) {
	  'use strict';
	   this.new(data);
	}
	/**
	 * Assign data to the Object
	 * 
	 * @param {Object} data JSON Response from Geoserver
	 * @returns {GeoserverTrack}
	 */
	GeoserverTrack.prototype.new = function(data) {
	  'use strict';

	  var idx = (data && data.totalFeatures) ? data.totalFeatures - 1 : undefined;
	  var feature = (data && data.features) ? data.features[idx] : undefined;
	  var properties = (feature && feature.properties) ? feature.properties : {};

	  var flagPicUrl = 'https://dcgsn-a-portal1.sd.spawar.navy.mil/weaver/pm/apps/flags/render?_accept=image/png&dataSource=iso3&nationality=';
	  var shipPicUrl = 'https://dcgsn-d-portal1.sd.spawar.navy.mil/images';

	  this.geometry =  (feature && feature.geometry) ? feature.geometry : undefined;
	  this.lat =  (this.geometry && this.geometry.coordinates) ? this.geometry.coordinates[1] : undefined;
	  this.lon =  (this.geometry && this.geometry.coordinates) ? this.geometry.coordinates[0] : undefined;
	  this.location =  (this.lat && this.lon) ? this.getLocation(this.lat, this.lon) : {
	    lat: 'No Data',
	    lon: 'No Data'
	  };

	  this.assetInfo =  properties.CURRENT_ASSESSMENT || 'No Data';
	  this.averageSpeed =  properties.avg_speed || 'No Data';
	  this.beNumber =  properties.beNumber || 'No Data';
	  this.blueprints =  properties.blueprints || 'No Data';
	  this.callSign =  properties.callsign || 'No Data';
	  this.cargo =  properties.cargo || 'No Data';
	  this.category =  properties.VESSEL_CATEGORY || 'No Data';
	  this.charterOwner =  properties.charterOwner || 'No Data';
	  this.classification =  properties.CLASSIFICATION || 'No Data';
	  this.crewComp =  properties.crewComp || 'No Data';
	  this.daysDeployed =  properties.days_deployed || 'No Data';
	  this.displayName =  properties.DISPLAY_NAME || 'No Data';
	  this.flag =  properties.FLAG || 'No Data';
	  this.flagPic =  flagPicUrl + properties.flag;
	  this.freeboard =  properties.freeboard || 'No Data';
	  this.guid =  properties.TRACK_GUID || 'No Data';
	  this.homePort =  properties.home_port || 'No Data';
	  this.hullNumber =  properties.HULL_NUMBER || 'No Data';
	  this.image =  shipPicUrl + properties.stockPhotoUrl;
	  this.lastPort =  properties.last_port || 'No Data';
	  this.lastRefuel =  properties.LAST_REFUEL || 'No Data';
	  this.lastUpdate =  properties.TIME_STAMP || 'No Data';
	  this.length =  properties.length || 'No Data';
	  this.ltn =  properties.LTN || 'No Data';
	  this.majorWeapons =  properties.MAJOR_WEAPONS || 'No Data';
	  this.mmsi =  properties.MMSI || 'No Data';
	  this.name =  properties.VESSEL_NAME || 'No Data';
	  this.nextPort =  properties.next_port || 'No Data';
	  this.owner =  properties.owner || 'No Data';
	  this.readiness =  properties.READINESS_LEVEL || 'No Data';
	  this.s2aType =  properties.S2A_TRACK_TYPE || 'No Data';
	  this.sconum =  properties.SCONUM || 'No Data';
	  this.shipClass =  properties.SHIP_CLASS || 'No Data';
	  this.source =  properties.source || 'No Data';
	  this.speedCap =  properties.speed_cap || 'No Data';
	  this.subordination =  properties.SUBORDINATION || 'No Data';
	  this.threat =  properties.THREAT || 'No Data';
	  this.timeDelay =  'Calculating time delay...';
	  this.trackNumber =  properties.TRACK_ID || 'No Data';
	  this.trackType =  properties.TRACK_TYPE || 'No Data';
	  this.upRightRigSeq =  properties.upRightRigSeq || 'No Data';
	  this.vesselType =  properties.VESSEL_TYPE || 'No Data';
	  this.width =  properties.width || 'No Data';

	  return this;
	};
	/**
	 * Set the time delay field
	 * 
	 * @returns {string} result Human readable time delay
	 */
	GeoserverTrack.prototype.setTimeDelay = function() {
	  'use strict';
	  var milliseconds = Date.now() - this.lastUpdate;
	  var newDate = new Date(milliseconds);
		var seconds = newDate.getUTCSeconds();
		var minutes = newDate.getUTCMinutes();
		var hours   = newDate.getUTCHours();
		var days   = newDate.getUTCDate() - 1;
		var months = newDate.getUTCMonth();
		var years = newDate.getUTCFullYear() - 1970;
		var result = '';

		if(years > 0) {
			result = years + ' Y ' + months + ' M ' + days + ' D ' + hours + ':' + minutes + ':' + seconds;
		} else if(months > 0) {
			result = months + ' M ' + days + ' D ' + hours + ':' + minutes + ':' + seconds;
		}else if(days > 0) {
			result = days + ' D ' + hours + ':' + minutes + ':' + seconds;
		} else {
			result = hours + ':' + minutes + ':' + seconds;
		}

		this.timeDelay = result;
		
	  return result;
	};
	/**
	 * @typedef {Object} location
	 * @property {string} lat Latitude
	 * @property {string} lon Longitude
	 */

	/**
	 * Get location in DMS format
	 * 
	 * @param {number} lat
	 * @param {number} lon
	 * @returns {location} Location in Human Readable Format
	 */
	GeoserverTrack.prototype.getLocation = function(lat, lon) {
	  'use strict';

	  // Creating a variable to store the degree symbol.
	  var ds = String.fromCharCode(parseInt("00B0", 16));
	  
	  var location = {}, tmp = '',
	    lat_hem = '', lat_d = '', lat_m = '', lat_s = '',
	    lon_hem = '', lon_d = '', lon_m = '', lon_s = '';
	  
	  if(lat > 0){
	    lat_hem = 'N';
	  }
	  else if(lat < 0) {
	    lat_hem = 'S';
	  }
	  
	  if(lon > 0){
	    lon_hem = 'E';
	  }
	  else if(lon < 0) {
	    lon_hem = 'W';
	  }
	  
	  var _lat = Math.abs(lat);
	  var _lon = Math.abs(lon);
	  
	  /* -- Latitude --*/
	  lat_d = Math.floor(_lat);
	  tmp = (_lat % 1) * 60;
	  
	  lat_m = Math.floor(tmp);
	  lat_s = ((tmp % 1) * 60).toFixed();
	  
	  /* -- Longitude --*/
	  lon_d = Math.floor(_lon);
	  tmp = (_lon % 1) * 60;
	  
	  lon_m = Math.floor(tmp);
	  lon_s = ((tmp % 1) * 60).toFixed();
	  
	  /*
	   * We need to correct for the rounding that is done with tofixed(2)
	   * Since this may result in seconds value of 60.
	   */
	  if(lat_s === "60.00") { lat_s = "0.00"; lat_m += 1; }
	  if(lon_s === "60.00") { lon_s = "0.00"; lon_m += 1; }

	  location.lat = lat_d + ds + lat_m + '\'' + lat_s + '"' + lat_hem;
	  location.lon = lon_d + ds + lon_m + '\'' + lon_s + '"' + lon_hem;
	  
	  return location;
	};

	module.exports = GeoserverTrack;

/***/ }
/******/ ]);