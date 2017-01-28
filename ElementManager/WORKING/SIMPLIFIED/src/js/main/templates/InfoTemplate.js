/**
 * Info State Templates
 * 
 * @param {Template} Template
 * @returns {BaseballCardTemplates}
 */

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
          { name: 'ltn', label: 'LTN', value: '{{TRACK.ltn}}'},
          { name: 'category', label: 'Category', value: '{{TRACK.category}}'},
          { name: 'display-name', label: 'Display Name', value: '{{TRACK.displayName}}'},
          { name: 'hull-num', label: 'Hull #', value: '{{TRACK.hullNumber}}' },
          { name: 'mmsi', label: 'MMSI', value: '{{TRACK.mmsi}}'},
          { name: 'sconum', label: 'SCONUM', value: '{{TRACK.sconum}}'},
          { name: 'call-sign', label: 'Call Sign', value: '{{TRACK.callSign}}'},
          { name: 'ship-class', label: 'Ship Class', value: '{{TRACK.shipClass}}'},
          { name: 'type-msn', label: 'Type/MSN', value: '{{TRACK.trackType}}'},
          { name: 'subordination', label: 'Subordination', value: '{{TRACK.subordination}}'},
          { name: 'be-num', label: 'BE #', value: '{{TRACK.beNumber}}'},
          { name: 'threat', label: 'Threat', value: '{{TRACK.threat}}'}
        ],
        maxCols: 4
      }) +
      createTabRow({
        header: {
          text: 'Last Contact',
          width: 4
        },
        cells: [
          { name: 'location', label: 'Location', value: '{{TRACK.location.lat}}<br>{{TRACK.location.lon}}'},
          { name: 'time-delay', label: 'Time Delay', value: '{{TRACK.timeDelay}}'},
          { name: 'source', label: 'Source', value: '{{TRACK.source}}'},
          { name: 'track-type', label: 'Track Type', value: '{{TRACK.trackType}}' },
          { name: 's2a-type', label: 'S2A Type', value: '{{TRACK.s2aType}}'},
          { name: 'vessel-type', label: 'Vessel Type', value: '{{TRACK.vesselType}}'},
          { name: 'days-deployed', label: 'Days Underway', value: '{{TRACK.daysDeployed}}'},
          { name: 'last-port', label: 'Last Port', value: '{{TRACK.lastPort}}'},
          { name: 'next-port', label: 'Next Port', value: '{{TRACK.nextPort}}'},
          { name: 'home-port', label: 'Home Port', value: '{{TRACK.homePort}}'},
        ],
        maxCols: 4
      }) +
      createTabRow({
        header: {
          text: 'Vessel Information',
          width: 4
        },
        cells: [
          { name: 'speed-capability', label: 'Speed Capability', value: '{{TRACK.speedCap}}'},
          { name: 'avg-reported-speed', label: 'Avg Reported Speed', value: '{{TRACK.averageSpeed}}'},
          { name: 'last-refuel', label: 'last Refuel', value: '{{TRACK.lastRefuel}}'},
          { name: 'readiness', label: 'Readiness', value: '{{TRACK.readiness}}' },
          { name: 'major-weapons', label: 'Major Weapons', value: '{{TRACK.majorWeapons}}'}
        ],
        maxCols: 4
      });
    '</div>';
}

module.exports = InfoTemplate;