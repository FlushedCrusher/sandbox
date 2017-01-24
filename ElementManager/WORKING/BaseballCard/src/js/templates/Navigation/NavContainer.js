/**
 * Navigation Container UI Component
 * 
 * @returns NavContainer
 */

function NavContainer($injector) {
  'use strict';

  var self = this;

  var ElementManager = $injector.get('ElementManager');

  var Div = $injector.get('Div');
  var DivOptions = $injector.get('DivOptions');
  ElementManager.register('Div', Div);

  var StyleOptions = $injector.get('StyleOptions');

  /* ****************************************
   * Navigation Container
   **************************************** */
  var navContainerOptions = new DivOptions();
  var navContainerStyle = new StyleOptions();
  navContainerStyle
    .set('background-color', 'white');
  navContainerOptions
    .setStyle(navContainerStyle);

  self.component = ElementManager.construct('Div', navContainerOptions);
  self.new = function() {
    return ElementManager.construct('Div', navContainerOptions);
  };
}

module.exports = NavContainer;