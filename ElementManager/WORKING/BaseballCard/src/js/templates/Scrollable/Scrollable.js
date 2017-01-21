/**
 * Scrollable Container UI Component
 * 
 * @returns Scrollable
 */

function Scrollable($injector) {
  'use strict';

  var self = this;

  var ElementManager = $injector.get('ElementManager');

  var Div = $injector.get('Div');
  var DivOptions = $injector.get('DivOptions');
  ElementManager.register('Div', Div);

  /* ****************************************
   * Scrollable Options
   **************************************** */
   var scrollOptions = new DivOptions();
  scrollOptions
    .addClass('scroll-content');

  self.component = ElementManager.construct('Div', scrollOptions);
  self.new = function() {
    return ElementManager.construct('Div', scrollOptions);
  };
}

module.exports = Scrollable;