/**
 * Navigation Button Group UI Component
 * 
 * @returns NavBtns
 */

function NavBtns($injector) {
  'use strict';

  var self = this;

  var ElementManager = $injector.get('ElementManager');

  var Div = $injector.get('Div');
  var DivOptions = $injector.get('DivOptions');
  ElementManager.register('Div', Div);

  var StyleOptions = $injector.get('StyleOptions');

  /* ****************************************
  * Nav-Button Group
  ***************************************** */
  var navBtnGroupOptions = new DivOptions();
  var navBtnGroupStyle = new StyleOptions();
  navBtnGroupStyle
    .set('float', 'right')
    .set('padding-right', '10px');
  navBtnGroupOptions
    .addClass('btn-group')
    .setAttribute({
      key: 'role',
      value: 'group'
    })
    .setAttribute({
      key: 'aria-label',
      value: '...'
    })
    .setStyle(navBtnGroupStyle);

  self.component = ElementManager.construct('Div', navBtnGroupOptions);
  self.new = function() {
    return ElementManager.construct('Div', navBtnGroupOptions);
  };
}

module.exports = NavBtns;