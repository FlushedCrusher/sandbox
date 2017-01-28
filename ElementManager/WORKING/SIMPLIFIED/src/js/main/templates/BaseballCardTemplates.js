/**
 * BaseballCardTemplates Implementation
 * 
 * @param {Template} Template
 * @returns {BaseballCardTemplates}
 */

var InfoTemplate = require('./InfoTemplate.js');

function BaseballCardTemplates(Template) {
    'use strict';

    var createPanelBody = function(data) {
      var PanelBody =
        '<div class="panel-body" style="margin: 0px; padding: 0px;">' +
        '<img class="ship-pic" ng-src="{{TRACK.image}}" onerror="this.style.display=\'none\'">' +
        PanelNavigation +
        data +
        '</div>';
      return PanelBody;
    };

    var HeaderTemplate =
      '<header class="header class-noclass">' +
      '<p style="margin: 0; padding: 0;">{{TRACK.classification}}</p>' +
      '</header>';
    Template.set('Header', HeaderTemplate);

    var InfoTabContent = new InfoTemplate().tabContent;

    var PanelHeading =
      '<div class="panel-heading" style="background-color: white; color: black; padding-top: 3px; padding-bottom: 3px;">' +
      '<img class="flag-pic" ng-src="{{TRACK.flagPic}}" onerror="this.style.display=\'none\'">' +
      '<span class="ng-binding">' +
      '<!-- Track Name -->' +
      '{{" " + (TRACK.name | uppercase) + ", "}}' +
      '</span>' +
      '<span class="ng-binding">' +
      '<!-- Country Code -->' +
      '{{COUNTRY | uppercase}}' +
      '</span>' +
      '<span class="float-right ng-binding" style="float: right;">' +
      '<!-- Last Updated -->' +
      'Last Updated - {{TRACK.lastUpdate | date:\'dd MMM yyyy HH:mm:ss\' : \'UTC\' | uppercase}}Z' +
      '</span>' +
      '</div>';

    var PanelNavigationButtons =
      '<div class="btn-group" role="group" aria-label="..." style="float: right; padding-right: 10px;">' +
      '<a href="" ng-click="onNavRefreshClick($event)">' +
      '<span ' +
      'class="glyphicon glyphicon-refresh" ' +
      'uib-tooltip="Refresh" ' +
      'style="padding-top: 10px; padding-right: 10px; font-size: 15px; color: gray;"></span>' +
      '</a>' +
      '<a href="" ng-click="onNavEyeconClick($event)">' +
      '<span ' +
      'class="glyphicon glyphicon-eye-close" ' +
      'uib-tooltip="Add to Watch List" ' +
      'style="padding-top: 10px; padding-right: 10px; font-size: 15px; color: gray;"></span>' +
      '</a>' +
      '</div>';

    var PanelNavigation =
      '<div style="background-color: white;">' +
      '<ul id="navigation-tabs" class="nav nav-tabs" style="padding-top: 5px;">' +
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
      '<div class="panel panel-default" style="margin-left: auto; margin-right: auto; max-width: 510px;">' +
      PanelHeading +
      PanelBody +
      '</div>' +
      '</div>';
    Template.set('Panel', PanelTemplate);

    var FooterTemplate =
      '<footer class="footer class-noclass">' +
      '<p style="margin: 0; padding: 0;">{{TRACK.classification}}</p>' +
      '</footer>';
    Template.set('Footer', FooterTemplate);

}

module.exports = BaseballCardTemplates;