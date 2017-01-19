/**
 * Navigation Tabs UI Component
 * 
 * @returns NavTabs
 */

function NavTabs($injector) {
  'use strict';

  var self = this;

  var ElementManager = $injector.get('ElementManager');

  var Nav = $injector.get('Nav');
  var NavOptions = $injector.get('NavOptions');
  ElementManager.register('Nav', Nav);

  var StyleOptions = $injector.get('StyleOptions');

  /* ****************************************
   * Navigation Tabs
   **************************************** */
  var navTabOptions = new NavOptions();
  var navTabStyle = new StyleOptions();
  navTabStyle
    .set('padding-top', '5px');
  navTabOptions
    .addClass('nav')
    .addClass('nav-tabs')
    .setStyle(navTabStyle);

  self.component = ElementManager.construct('Nav', navTabOptions);

}

module.exports = NavTabs;