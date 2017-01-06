/**
 * Info State Controller
 * 
 * @returns {info}
 */

function info($injector) {
  'use strict';

  var ElementManager = $injector.get('ElementManager');

  var Banner = $injector.get('Banner');
  var BannerOptions = $injector.get('BannerOptions');
  ElementManager.register('Banner', Banner);

  var Div = $injector.get('Div');
  var DivOptions = $injector.get('DivOptions');
  ElementManager.register('Div', Div);

  var StyleOptions = $injector.get('StyleOptions');

  var headerOptions = new BannerOptions();
  headerOptions
    .setType('header')
    .addClass('header')
    .addClass('class-unclass')
    .setTextContent('UNCLASSIFIED');


  var contentOptions = new DivOptions();
  var contentStyle = new StyleOptions();
  contentStyle
  .set('margin-left', 'auto')
  .set('margin-right', 'auto')
  .set('max-width', '510px');
  contentOptions
    .addClass('scroll-content')
    .setStyle(contentStyle);

  var footerOptions = new BannerOptions();
  footerOptions
    .setType('footer')
    .addClass('footer')
    .addClass('class-unclass')
    .setTextContent('UNCLASSIFIED');

  ElementManager
    .create('Banner', headerOptions)
    .create('Div', contentOptions)
    .create('Banner', footerOptions)
    .build();

}

module.exports = info;