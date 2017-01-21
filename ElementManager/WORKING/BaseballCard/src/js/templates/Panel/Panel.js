/**
 * Panel UI Component
 * 
 * @returns Panel
 */

function Panel($injector) {
  'use strict';

  var self = this;

  var ElementManager = $injector.get('ElementManager');

  var Div = $injector.get('Div');
  var DivOptions = $injector.get('DivOptions');
  ElementManager.register('Div', Div);

  var StyleOptions = $injector.get('StyleOptions');

  /* ****************************************
   * Panel Content
   **************************************** */
  var panelOptions = new DivOptions();
  var panelStyle = new StyleOptions();
  panelStyle
    .set('margin-left', 'auto')
    .set('margin-right', 'auto')
    .set('max-width', '510px');
  panelOptions
    .addClass('panel')
    .addClass('panel-default')
    .setStyle(panelStyle);

  self.component = ElementManager.construct('Div', panelOptions);
  self.new = function() {
    return ElementManager.construct('Div', panelOptions);
  };
}

module.exports = Panel;