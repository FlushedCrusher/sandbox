/**
 * This is where we build out the info state UI
 */

function Info($injector) {
  'use strict';

  var self = this;

  var ElementManager = $injector.get('ElementManager');

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
  var EventOptions = $injector.get('EventOptions');

  /* ****************************************
   * Templeted Components
   **************************************** */
  var Header = $injector.get('Header');
  var Scrollable = $injector.get('Scrollable');
  var Panel = $injector.get('Panel');
  var PanelHeader = $injector.get('PanelHeader');
  var PanelBody = $injector.get('PanelBody');
  var NavContainer = $injector.get('NavContainer');
  var NavTabs = $injector.get('NavTabs');
  var NavBtns = $injector.get('NavBtns');
  var Glyph = $injector.get('Glyph');

  /* ****************************************
   * Flag Pic
   **************************************** */
  var flagPicOptions = new ImgOptions();
  var flagPicEvents = new EventOptions();
  flagPicEvents
    .set('onerror', function() {
      this.style.display = 'none';
    });
  flagPicOptions
    .addClass('flag-pic')
    .setAttribute({
      key: 'ng-src',
      value: '{{flag_pic}}'
    })
    .setEvents(flagPicEvents);

  /* ****************************************
   * Track Name
   **************************************** */
  var trackNameOptions = new SpanOptions();
  var trackNameTemplate =
    '<!-- Track Name -->' +
		' {{track.name | uppercase}}, ';
  trackNameOptions
    .setTemplate(trackNameTemplate);

  /* ****************************************
   * Country Abbreviation
   **************************************** */
  var countryOptions = new SpanOptions();
  var countryTemplate = 
		'<!-- Country Code -->' +
		'{{country | uppercase}}';
  countryOptions
    .setTemplate(countryTemplate);

  /* ****************************************
   * Last Updated Info
   **************************************** */
  var lastUpdatedOptions = new SpanOptions();
  var lastUpdatedStyle = new StyleOptions();
  var lastUpdatedTemplate = 
    '<!-- Last Updated -->' +
    'Last Updated - {{track.last_update | date:\'dd MMM yyyy HH:mm:ss\' : \'UTC\' | uppercase}}Z';
  lastUpdatedStyle
    .set('float', 'right');
  lastUpdatedOptions
    .addClass('float-right')
    .setStyle(lastUpdatedStyle)
    .setTemplate(lastUpdatedTemplate);

  /* ****************************************
   * Ship Pic
   **************************************** */
  var shipPicOptions = new ImgOptions();
  var shipPicEvents = new EventOptions();
  shipPicEvents
    .set('onerror', function() {
      this.style.display = 'none';
    });
  shipPicOptions
    .addClass('ship-pic')
    .setAttribute({
      key: 'ng-src',
      value: '{{track.image}}'
    })
    .setEvents(shipPicEvents);

  /* ****************************************
   * Tab Content
   **************************************** */
  var tabContentOptions = new DivOptions();
  var tabContentStyle = new StyleOptions();
  tabContentStyle
    .set('background', '#eeeeee')
    .set('padding', '3px');
  tabContentOptions
    .setStyle(tabContentStyle);

  /* ****************************************
   * Info Row
   **************************************** */
  var infoRowOptions = new DivOptions();
  var infoRowStyle = new StyleOptions();
  infoRowStyle
    .set('padding', '4px 3px 4px 3px');
  infoRowOptions
    .setStyle(infoRowStyle);

  /* ****************************************
   * Footer
   **************************************** */ 
  var Footer = $injector.get('Footer');

  /* ****************************************
   * Create the UI
   **************************************** */
  // Create the pieces
  this.header = Header.component;
  this.panel = Panel.component;
  this.panelHeader = PanelHeader.component;
  this.flag_pic = ElementManager.construct('Img', flagPicOptions);
  this.track_name = ElementManager.construct('Img', trackNameOptions);
  this.country = ElementManager.construct('Img', countryOptions);
  this.lastUpdated = ElementManager.construct('Span', lastUpdatedOptions);
  this.scroll = Scrollable.component;
  this.panelBody = PanelBody.component;
  this.ship_pic = ElementManager.construct('Img', shipPicOptions);
  this.navigation = NavContainer.component;
  this.nav_tabs = NavTabs.component;
  this.nav_btns = NavBtns.component;
  this.refresh_btn = Glyph.new();
  this.watch_btn = Glyph.new();
  this.tab_content = ElementManager.construct('Div', tabContentOptions);
  this.row_one = ElementManager.construct('Div', infoRowOptions);
  this.row_two = ElementManager.construct('Div', infoRowOptions);
  this.row_three = ElementManager.construct('Div', infoRowOptions);
  this.footer = Footer.component;

  this.nav_tabs
    .addItems([
      {
        text: 'Track Info',
        ngClick: '',
        active: true,
        onClick: function() {
          console.debug('Clicked - Info');
          self.nav_tabs.setActive(this);
        }
      }, {
        text: 'Active Alerts',
        ngClick: '',
        onClick: function() {
          console.debug('Clicked - Alerts');
          self.nav_tabs.setActive(this);
        }
      }, {
        text: 'Notes',
        ngClick: '',
        onClick: function() {
          console.debug('Clicked - Notes');
          self.nav_tabs.setActive(this);
        }
      }
    ]);

  var btn_style = [
    {
      key: 'padding-top',
      value: '10px'
    }, {
      key: 'padding-right',
      value: '10px'
    }, {
      key: 'font-size',
      value: '15px'
    }, {
      key: 'color',
      value: 'gray'
    }
  ];
  var btn_events = [
    {
      key: 'onmouseover',
      value: function() {
        this.classList.add('btn-hover');
      }
    }, {
      key: 'onmouseout',
      value: function() {
        this.classList.remove('btn-hover');
      }
    }, {
      key: 'onclick',
      value: function() {
        console.debug('This is an unscoped click event.');
      }
    }
  ];
  this.refresh_btn
    .create({
      add: [
        {
          key: 'uib-tooltip',
          value: 'Refresh'
        }
      ],
      style: btn_style,
      events: btn_events,
      icon_package: 'glyphicon',
      icon: 'glyphicon-refresh'
    });

  this.watch_btn
    .create({
      add: [
        {
          key: 'uib-tooltip',
          value: 'Add to Watch List'
        }
      ],
      style: btn_style,
      events: btn_events,
      callback: function () {
        if(this.hasClass('glyphicon-eye-close')) {
          this.removeClass('glyphicon-eye-close');
          this.addClass('glyphicon-eye-open');
        } else {
          this.addClass('glyphicon-eye-close');
          this.removeClass('glyphicon-eye-open');
        }
      },
      icon_package: 'glyphicon',
      icon: 'glyphicon-eye-close'
    });

  // Put the pieces together
  this.panelHeader
    .addChild(this.flag_pic)
    .addChild(this.track_name)
    .addChild(this.country)
    .addChild(this.lastUpdated);

  this.nav_btns
    .addChild(this.refresh_btn)
    .addChild(this.watch_btn);

  this.nav_tabs
    .addChild(this.nav_btns);

  this.navigation
    .addChild(this.nav_tabs);

  this.tab_content
    .addChild(this.row_one)
    .addChild(this.row_two)
    .addChild(this.row_three);

  this.panelBody
    .addChild(this.ship_pic)
    .addChild(this.navigation)
    .addChild(this.tab_content);

  this.panel
    .addChild(this.panelHeader)
    .addChild(this.panelBody);

  this.scroll
    .addChild(this.panel);

}

module.exports = Info;