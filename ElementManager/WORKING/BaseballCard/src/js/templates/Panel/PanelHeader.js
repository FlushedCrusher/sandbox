/**
 * Panel Header UI Component
 * 
 * @returns PanelHeader
 */

function PanelHeader($injector) {
  'use strict';

  var self = this;

  var ElementManager = $injector.get('ElementManager');

  var Div = $injector.get('Div');
  var DivOptions = $injector.get('DivOptions');
  ElementManager.register('Div', Div);

  var StyleOptions = $injector.get('StyleOptions');

  /* ****************************************
   * Panel Header
   **************************************** */
  var panelHeaderOptions = new DivOptions();
  var panelHeaderStyle = new StyleOptions();
  panelHeaderStyle
    .set('background-color', 'white')
    .set('color', 'black')
    .set('padding-top', '3px')
    .set('padding-bottom', '3px');
  panelHeaderOptions
    .addClass('panel-heading')
    .setStyle(panelHeaderStyle);

  self.component = ElementManager.construct('Div', panelHeaderOptions);
  self.new = function() {
    return ElementManager.construct('Div', panelHeaderOptions);
  };
}

module.exports = PanelHeader;