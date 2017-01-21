/**
 * Classification Footer UI Component
 * 
 * @returns Footer
 */

function Footer($injector) {
  'use strict';

  var self = this;

  var ElementManager = $injector.get('ElementManager');

  var Banner = $injector.get('Banner');
  var BannerOptions = $injector.get('BannerOptions');
  ElementManager.register('Banner', Banner);

  /* ****************************************
   * Footer Options
   **************************************** */
  var footerOptions = new BannerOptions();
  footerOptions
    .setType('footer')
    .addClass('footer')
    .addClass('class-top-secret')
    .setTextContent('TOP SECRET');

  self.component = ElementManager.construct('Banner', footerOptions);
  self.new = function() {
    return ElementManager.construct('Banner', footerOptions);
  };
}

module.exports = Footer;