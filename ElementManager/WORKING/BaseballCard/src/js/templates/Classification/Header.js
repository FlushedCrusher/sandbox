/**
 * Classification Header UI Component
 * 
 * @returns Header
 */

function Header($injector) {
  'use strict';

  var self = this;

  var ElementManager = $injector.get('ElementManager');

  var Banner = $injector.get('Banner');
  var BannerOptions = $injector.get('BannerOptions');
  ElementManager.register('Banner', Banner);

  /* ****************************************
   * Header Options
   **************************************** */
  var headerOptions = new BannerOptions();
  headerOptions
    .setType('header')
    .addClass('header')
    .addClass('class-top-secret')
    .setTextContent('TOP SECRET');

  self.component = ElementManager.construct('Banner', headerOptions);
  self.new = function() {
    return ElementManager.construct('Banner', headerOptions);
  };
}

module.exports = Header;