/**
 * Info State Controller
 * 
 * @returns {info}
 */

function info($injector, $scope) {
  'use strict';

  var ElementManager = $injector.get('ElementManager');

  var Banner = $injector.get('Banner');
  var BannerOptions = $injector.get('BannerOptions');
  ElementManager.register('Banner', Banner);

  var Div = $injector.get('Div');
  var DivOptions = $injector.get('DivOptions');
  ElementManager.register('Div', Div);

  var StyleOptions = $injector.get('StyleOptions');
  var Stubs = $injector.get('Stubs');
  $scope.track = Stubs.FULL_TRACKDATA;

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
  contentStyle
  .set('margin-left', 'auto')
  .set('margin-right', 'auto')
  .set('max-width', '510px');
  contentOptions
    .addClass('scroll-content')
    .setStyle(contentStyle)
    .setTemplate($scope.track.name);

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
    .build();

}

module.exports = info;