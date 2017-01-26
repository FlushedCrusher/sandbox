function InfoTemplate() {
  'use strict';

  var createTabRow = function (data) {
    var TabRow =
      '<div style="padding: 4px 3px;">' +
      '<div class="panel panel-default" style="margin-left: auto; margin-right: auto; max-width: 510px;">' +
      '<div class="panel-body" style="margin: 0px; padding: 0px;">' +
      '<table class="table-no-border" style="margin: 0px 5px; padding: 2.5px 5px; table-layout: fixed; width: 100%;">' +
      '<tbody>';
    if (data.header) {
      TabRow += createTableHeader(data.header);
    }
    TabRow += createTableRows(data);
    TabRow +=
      '</tbody>' +
      '</table>' +
      '</div>' +
      '</div>' +
      '</div>';
    return TabRow;
  };
  var createTableRows = function (data) {
    var TableRowCount = Math.ceil(data.cells.length / data.maxCols);
    var TableRows = '';
    for (var i = 0; i < TableRowCount; i++) {
      TableRows += createTableRow(data.cells.slice(i * data.maxCols, (i + 1) * data.maxCols));
    }
    return TableRows;
  };
  var createTableRow = function (data) {
    var TableRow =
      '<tr>';
    data.forEach(function (cellData) {
      TableRow += createTableCell(cellData);
    });
    TableRow +=
      '</tr>';
    return TableRow;
  };
  var createTableHeader = function (data) {
    var TableHeader =
      '<tr>' +
      '<td colspan="' + data.width + '">' +
      '<i>' + data.text + '</i>' +
      '</td>' +
      '</tr>';
    return TableHeader;
  };
  var createTableCell = function (data) {
    var TableCell =
      '<td>' +
      '<label for="' + data.name + '" style="color: #bfbfbf;">' + data.label + '</label>' +
      '<div class="dynamic-color">' +
      '<p id="' + data.name + '" name="' + data.name + '">' + data.value + '</p>' +
      '</div>' +
      '</td>';
    return TableCell;
  };

  this.tabContent =
    '<div style="background: rgb(238, 238, 238); padding: 3px;">' +
      createTabRow({
        header: {
          width: 4, text: 'Row One'
        },
        cells: [
          { name: 'ltn', label: 'LTN', value: 'No Data'},
          { name: 'category', label: 'Category', value: 'No Data'},
          { name: 'display-name', label: 'Display Name', value: 'No Data'},
          { name: 'hull-num', label: 'Hull #', value: 'No Data' },
          { name: 'mmsi', label: 'MMSI', value: 'No Data'},
          { name: 'sconum', label: 'SCONUM', value: 'No Data'},
          { name: 'call-sign', label: 'Call Sign', value: 'No Data'},
          { name: 'ship-class', label: 'Ship Class', value: 'No Data'},
          { name: 'type-msn', label: 'Type/MSN', value: 'No Data'},
          { name: 'subordination', label: 'Subordination', value: 'No Data'},
          { name: 'be-num', label: 'BE #', value: 'No Data'},
          { name: 'threat', label: 'Threat', value: 'No Data'}
        ],
        maxCols: 4
      });
    '</div>';
}

module.exports = InfoTemplate;