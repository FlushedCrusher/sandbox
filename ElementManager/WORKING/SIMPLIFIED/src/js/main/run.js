/**
 * Run State Controller
 * 
 * @returns {run}
 */

var createBaseballCardTemplates = require('./templates/BaseballCardTemplates.js');

function run($injector, $compile, $templateCache, $rootScope) { // eslint-disable-line no-unused-vars
  'use strict';

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