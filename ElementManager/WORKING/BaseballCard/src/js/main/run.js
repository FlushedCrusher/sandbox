/**
 * Run State Controller
 * 
 * @returns {run}
 */

function run($injector, $compile, $rootScope) {
  'use strict';

  var ElementManager = $injector.get('ElementManager');

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
  contentStyle
  .set('margin-left', 'auto')
  .set('margin-right', 'auto')
  .set('max-width', '510px');
  contentOptions
    .addClass('scroll-content')
    .setStyle(contentStyle);

  /* ****************************************
   *
   * Panel Heading
   * 
   **************************************** */
  var panelHeadingOptions = new DivOptions();
  var panelHeadingStyle = new StyleOptions();
  var panelHeaderTemplate = 
    '<!-- Ship Flag pic -->' +
		'<img ng-src="{{flag_pic}}" class="flag-pic" onerror="this.style.display=\'none\'" />' +
		'<!-- Track Name -->' +
		'{{track.name | uppercase}},' +
		'<!-- Country Code -->' +
		'{{country | uppercase}}' +
		'<span class="float-right">' +
		'Last Updated - {{track.last_update | date:\'dd MMM yyyy HH:mm:ss\' : \'UTC\' | uppercase}}Z' +
		'</span>';
  panelHeadingStyle
    .set('background-color', 'white')
    .set('color', 'black')
    .set('padding-top', '3px')
    .set('padding-bottom', '3px');
  panelHeadingOptions
    .addClass('panel-heading')
    .setStyle(panelHeadingStyle)
    .setAngularTemplate(panelHeaderTemplate);

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
   * Save the UI
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