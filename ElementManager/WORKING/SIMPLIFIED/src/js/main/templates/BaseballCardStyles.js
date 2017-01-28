
var GlobalStyles = require('./GlobalStyles.js');

function BaseballCardStyles() {
  'use strict';

  GlobalStyles.call(this);
  
  this.PanelTemplateStyle =
    'margin-left: auto;' +
    'margin-right: auto;' +
    'max-width: 510px;';
  this.PanelHeadingStyle =
    'background-color: white;' +
    'color: black;' +
    'padding-top: 3px;' +
    'padding-bottom: 3px;';
  this.PanelNavigationStyle =
    'background-color: white;';
  this.PanelNavigationTabStyle =
    'padding-top: 5px;';
  this.PanelNavigationButtonGroupStyle =
    'float: right;' +
    'padding-right: 10px;';
  this.PanelNavigationButtonStyle =
    'padding-top: 10px;' +
    'padding-right: 10px;' +
    'font-size: 15px;' +
    'color: gray;';
}

module.exports = BaseballCardStyles;