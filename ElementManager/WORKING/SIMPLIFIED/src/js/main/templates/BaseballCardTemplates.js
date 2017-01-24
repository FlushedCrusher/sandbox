/**
 * BaseballCardTemplates Implementation
 * 
 * @param {Template} Template
 * @returns {BaseballCardTemplates}
 */

function BaseballCardTemplates(Template) {
  'use strict';

  var HeaderTemplate =
    '<header class="header class-unclass">' +
    ' <p>{{DATA.TRACK.CLASSIFICATION}}</p>' +
    '</header>';
  Template.set('Header', HeaderTemplate);

  var FooterTemplate =
    '<footer class="footer class-unclass">' +
    ' <p>{{DATA.TRACK.CLASSIFICATION}}</p>' +
    '</footer>';
  Template.set('Footer', FooterTemplate);

  var PanelTemplate =
    '<div class="scroll-content">' +
    ' <div class="panel panel-default" style="margin-left: auto; margin-right: auto; max-width: 510px;">' +
    '   <div class="panel-heading" style="background-color: white; color: black; padding-top: 3px; padding-bottom: 3px;">' +
    '     <img class="flag-pic" ng-src="{{DATA.FLAG_PIC}}">' +
    '     <span class="ng-binding">' +
    '       <!-- Track Name -->' +
		'       {{DATA.TRACK.NAME | uppercase}}, ' +
    '     </span>' +
    '     <span class="ng-binding">' +
    '       <!-- Country Code -->' +
		'       {{DATA.COUNTRY | uppercase}}' +
    '     </span>' +
    '     <span class="float-right ng-binding" style="float: right;">' +
    '       <!-- Last Updated -->' +
    '       Last Updated - {{DATA.TRACK.LAST_UPDATE | date:\'dd MMM yyyy HH:mm:ss\' : \'UTC\' | uppercase}}Z' +
    '     </span>' +
    '   </div>' +
    ' </div>' +
    '</div>';
  Template.set('Panel', PanelTemplate);

}

module.exports = BaseballCardTemplates;