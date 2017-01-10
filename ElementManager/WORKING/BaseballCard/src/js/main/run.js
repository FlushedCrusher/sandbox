/**
 * Run State Controller
 * 
 * @returns {run}
 */

function run($injector, $compile, $rootScope) {
  'use strict';

  var ElementManager = $injector.get('ElementManager');

  var AngularHelper = $injector.get('AngularHelper');
  AngularHelper.bind($rootScope, $compile);

  var Banner = $injector.get('Banner');
  var BannerOptions = $injector.get('BannerOptions');
  ElementManager.register('Banner', Banner);

  var Div = $injector.get('Div');
  var DivOptions = $injector.get('DivOptions');
  ElementManager.register('Div', Div);

  var StyleOptions = $injector.get('StyleOptions');

  /* ****************************************
   *
   * Header
   * 
   **************************************** */
  var headerOptions = new BannerOptions();
  headerOptions
    .setType('header')
    .addClass('header')
    .addClass('class-unclass')
    .setTextContent('UNCLASSIFIED');

  /* ****************************************
   *
   * Main Content
   * 
   **************************************** */
  var contentOptions = new DivOptions();
  var contentStyle = new StyleOptions();
  var contentTemplate = AngularHelper.getTemplate(
    '<span>{{track.name | uppercase}}</span>'
  );
  contentStyle
  .set('margin-left', 'auto')
  .set('margin-right', 'auto')
  .set('max-width', '510px');
  contentOptions
    .addClass('scroll-content')
    .setStyle(contentStyle)
    .setTemplate(contentTemplate);

  /* ****************************************
   *
   * Panel Heading
   * 
   **************************************** */
  var panelHeadingOptions = new DivOptions();
  var panelHeadingStyle = new StyleOptions();
  panelHeadingStyle
    .set('background-color', 'white')
    .set('color', 'black')
    .set('padding-top', '3px')
    .set('padding-bottom', '3px');
  panelHeadingOptions
    .addClass('panel-heading')
    .setStyle(panelHeadingStyle);

  /* ****************************************
   *
   * Footer
   * 
   **************************************** */
  var footerOptions = new BannerOptions();
  footerOptions
    .setType('footer')
    .addClass('footer')
    .addClass('class-unclass')
    .setTextContent('UNCLASSIFIED');

  /* ****************************************
   *
   * Build the UI
   * 
   **************************************** */
  ElementManager
    .create('Banner', headerOptions)
    .create('Div', contentOptions)
    .nest('Div', panelHeadingOptions)
    .create('Banner', footerOptions)
    .saveUI('info');

}

module.exports = run;