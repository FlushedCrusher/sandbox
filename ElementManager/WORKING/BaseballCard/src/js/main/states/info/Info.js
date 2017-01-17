/**
 * This is where we build out the info state UI
 */

function Info($injector, $compile) {  // eslint-disable-line no-unused-vars
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

  var Img = $injector.get('Img');
  var ImgOptions = $injector.get('ImgOptions');
  ElementManager.register('Img', Img);

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
   * Panel Content
   * 
   **************************************** */
  var panelOptions = new DivOptions();
  var panelStyle = new StyleOptions();
  panelStyle
    .set('margin-left', 'auto')
    .set('margin-right', 'auto')
    .set('max-width', '510px');
  panelOptions
    .addClass('scroll-content')
    .addClass('panel')
    .addClass('panel-default')
    .setStyle(panelStyle);

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
  var panelBodyTemplate =
    '<!-- Main Baseball Card Pic -->' +
    '<img class="ship-pic" ng-src="{{track.image}}" onerror="this.style.display=\'none\'"/>' +
    '<!-- End -->';
  panelBodyStyle
    .set('margin', '0')
    .set('padding', '5px 0 0 0');
  panelBodyOptions
    .addClass('panel-body')
    .addClass('main-content')
    .setStyle(panelBodyStyle)
    .setAngularTemplate(panelBodyTemplate);
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

  this.header = ElementManager.construct('Banner', headerOptions);
  this.panel = ElementManager.construct('Div', panelOptions);
  this.panelHeader = ElementManager.construct('Div', panelHeadingOptions);
  this.lastUpdated = ElementManager.construct('Span', lastUpdatedOptions);
  this.panelBody = ElementManager.construct('Div', panelBodyOptions);
  this.footer = ElementManager.construct('Banner', footerOptions);

  this.panelHeader.addChild(this.lastUpdated);
  this.panel.addChild(this.panelHeader);
  this.panel.addChild(this.panelBody);

}

module.exports = Info;