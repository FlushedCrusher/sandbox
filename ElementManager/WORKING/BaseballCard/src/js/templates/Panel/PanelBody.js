/**
 * Panel Body UI Component
 * 
 * @returns PanelBody
 */

function PanelBody($injector) {
  'use strict';

  var self = this;

  var ElementManager = $injector.get('ElementManager');

  var Div = $injector.get('Div');
  var DivOptions = $injector.get('DivOptions');
  ElementManager.register('Div', Div);

  var StyleOptions = $injector.get('StyleOptions');

  /* ****************************************
   * Panel Body
   **************************************** */
  var panelBodyOptions = new DivOptions();
  var panelBodyStyle = new StyleOptions();
  panelBodyStyle
    .set('margin', '0')
    .set('padding', '0');
  panelBodyOptions
    .addClass('panel-body')
    .setStyle(panelBodyStyle);

  self.component = ElementManager.construct('Div', panelBodyOptions);
  self.new = function() {
    return ElementManager.construct('Div', panelBodyOptions);
  };
}

module.exports = PanelBody;