/**
 * BaseballCardTemplates Implementation
 * 
 * @param {Template} Template
 * @returns {BaseballCardTemplates}
 */

var InfoTemplate = require('./Info/InfoTemplate.js');
var BaseballCardStyles = require('./BaseballCardStyles.js');

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