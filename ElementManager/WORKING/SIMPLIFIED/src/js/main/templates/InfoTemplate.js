function InfoTemplate() {
  'use strict';

  var createTabRow = function (data) {
    var TabRow =
      '<div style="padding: 4px 3px;">' +
      '<div class="panel panel-default" style="margin: 0px; padding: 0px;">' +
      '<div class="panel-body" style="margin: 0px; padding: 0px;">' +
      '<table class="table table-no-border" style="margin: 0; padding: 2.5px 5px; table-layout: fixed;">' +
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
      '<label for="' + data.name + '" style="margin: 0; padding: 0; color: #bfbfbf;">' + data.label + '</label>' +
      '<div class="dynamic-color">' +
      '<p id="' + data.name + '" style="margin: 0; padding: 0; color: #666666;" name="' + data.name + '">' + data.value + '</p>' +
      '</div>' +
      '</td>';
    return TableCell;
  };

  this.tabContent =
    '<div style="background: rgb(238, 238, 238); padding: 3px;">' +
      createTabRow({
        header: {
          text: 'Identification Information',
          width: 4
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
      }) +
      createTabRow({
        header: {
          text: 'Last Contact',
          width: 4
        },
        cells: [
          { name: 'location', label: 'Location', value: 'No Data'},
          { name: 'time-late', label: 'Time Late', value: 'No Data'},
          { name: 'source', label: 'Source', value: 'No Data'},
          { name: 'track-type', label: 'Track Type', value: 'No Data' },
          { name: 's2a-type', label: 'S2A Type', value: 'No Data'},
          { name: 'vessel-type', label: 'Vessel Type', value: 'No Data'},
          { name: 'days-underway', label: 'Days Underway', value: 'No Data'},
          { name: 'last-port', label: 'Last Port', value: 'No Data'},
          { name: 'next-port', label: 'Next Port', value: 'No Data'},
          { name: 'home-port', label: 'Home Port', value: 'No Data'},
        ],
        maxCols: 4
      }) +
      createTabRow({
        header: {
          text: 'Vessel Information',
          width: 4
        },
        cells: [
          { name: 'speed-capability', label: 'Speed Capability', value: 'No Data'},
          { name: 'avg-reported-speed', label: 'Avg Reported Speed', value: 'No Data'},
          { name: 'last-refuel', label: 'last Refuel', value: 'No Data'},
          { name: 'readiness', label: 'Readiness', value: 'No Data' },
          { name: 'major-weapons', label: 'Major Weapons', value: 'No Data'}
        ],
        maxCols: 4
      });
    '</div>';
}

module.exports = InfoTemplate;