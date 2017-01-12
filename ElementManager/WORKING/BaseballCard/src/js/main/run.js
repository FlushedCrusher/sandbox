/**
 * Run State Controller
 * 
 * @returns {run}
 */

function run($injector, $compile, $rootScope) { // eslint-disable-line no-unused-vars
  'use strict';

  var ElementManager = $injector.get('ElementManager');

  var Banner = $injector.get('Banner');
  var BannerOptions = $injector.get('BannerOptions');
  ElementManager.register('Banner', Banner);

  var Div = $injector.get('Div');
  var DivOptions = $injector.get('DivOptions');
  ElementManager.register('Div', Div);

  var Span = $injector.get('Span');
  var SpanOptions = $injector.get('SpanOptions');
  ElementManager.register('Span', Span);

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
    .addClass('panel')
    .addClass('panel-default')
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
    '<!-- END -->';
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
   * Last Updated Info
   * 
   **************************************** */
  var lastUpdatedOptions = new SpanOptions();
  var lastUpdatedStyle = new StyleOptions();
  var lastUpdatedTemplate = 
    '<!-- Last Updated -->' +
    'Last Updated - {{track.last_update | date:\'dd MMM yyyy HH:mm:ss\' : \'UTC\' | uppercase}}Z' +
    '<!-- END -->';
  lastUpdatedStyle
    .set('float', 'right');
  lastUpdatedOptions
    .addClass('float-right')
    .setStyle(lastUpdatedStyle)
    .setAngularTemplate(lastUpdatedTemplate);

  /* ****************************************
   *
   * Panel Body
   * 
   **************************************** */
  var panelBodyOptions = new DivOptions();
  var panelBodyStyle = new StyleOptions();
  panelBodyStyle
    .set('margin', '0')
    .set('padding', '5px 0 0 0');
  panelBodyOptions
    .addClass('panel-body')
    .addClass('main-content')
    .setStyle(panelBodyStyle);
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
        .nest('Span', lastUpdatedOptions, true)
      .parent()
      .nest('Div', panelBodyOptions)
    .create('Banner', footerOptions)
    .saveUI('info');

}

module.exports = run;