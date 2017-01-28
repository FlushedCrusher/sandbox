
var GlobalStyles = require('../GlobalStyles.js');

function InfoStyles() {
  'use strict';

  GlobalStyles.call(this);

  this.TabContentContainerStyle =
    'background: rgb(238, 238, 238);' +
    'padding: 3px;';
  this.TabRowContainerStyle =
    'padding: 4px 3px;';
  this.TabTableStyle = 
    'margin: 0;' + 
    'padding: 2.5px 5px;' +
    'table-layout: fixed;';
  this.TableCellLabelStyle =
    'margin: 0;' +
    'padding: 0;' +
    'color: #bfbfbf;';
  this.TableCellTextStyle =
    this.ZeroMarginZeroPadding +
    'color: #666666;';

}
module.exports = InfoStyles;