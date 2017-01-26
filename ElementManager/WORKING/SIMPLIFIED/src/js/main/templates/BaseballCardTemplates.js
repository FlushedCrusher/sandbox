/**
 * BaseballCardTemplates Implementation
 * 
 * @param {Template} Template
 * @returns {BaseballCardTemplates}
 */

function BaseballCardTemplates(Template) {
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

    var HeaderTemplate =
        '<header class="header class-unclass">' +
        '<p>{{DATA.TRACK.CLASSIFICATION}}</p>' +
        '</header>';
    Template.set('Header', HeaderTemplate);

    var FooterTemplate =
        '<footer class="footer class-unclass">' +
        '<p>{{DATA.TRACK.CLASSIFICATION}}</p>' +
        '</footer>';
    Template.set('Footer', FooterTemplate);

    var InfoTabContent =
        '<div style="background: rgb(238, 238, 238); padding: 3px;">' +
        createTabRow({
            header: {
                width: 4,
                text: 'Row One'
            },
            cells: [{
                name: 'ltn',
                label: 'LTN',
                value: 'No Data'
            }, {
                name: 'category',
                label: 'Category',
                value: 'No Data'
            }, {
                name: 'display-name',
                label: 'Display Name',
                value: 'No Data'
            }, {
                name: 'hull-num',
                label: 'Hull #',
                value: 'No Data'
            }, {
                name: 'mmsi',
                label: 'MMSI',
                value: 'No Data'
            }, {
                name: 'sconum',
                label: 'SCONUM',
                value: 'No Data'
            }, {
                name: 'call-sign',
                label: 'Call Sign',
                value: 'No Data'
            }, {
                name: 'ship-class',
                label: 'Ship Class',
                value: 'No Data'
            }, {
                name: 'type-msn',
                label: 'Type/MSN',
                value: 'No Data'
            }, {
                name: 'subordination',
                label: 'Subordination',
                value: 'No Data'
            }, {
                name: 'be-num',
                label: 'BE #',
                value: 'No Data'
            }, {
                name: 'threat',
                label: 'Threat',
                value: 'No Data'
            }],
            maxCols: 4
        });
    '</div>';

    var PanelHeading =
        '<div class="panel-heading" style="background-color: white; color: black; padding-top: 3px; padding-bottom: 3px;">' +
        '<img class="flag-pic" ng-src="{{DATA.FLAG_PIC}}" onerror="this.style.display=\'none\'">' +
        '<span class="ng-binding">' +
        '<!-- Track Name -->' +
        '{{" " + (DATA.TRACK.NAME | uppercase) + ", "}}' +
        '</span>' +
        '<span class="ng-binding">' +
        '<!-- Country Code -->' +
        '{{DATA.COUNTRY | uppercase}}' +
        '</span>' +
        '<span class="float-right ng-binding" style="float: right;">' +
        '<!-- Last Updated -->' +
        'Last Updated - {{DATA.TRACK.LAST_UPDATE | date:\'dd MMM yyyy HH:mm:ss\' : \'UTC\' | uppercase}}Z' +
        '</span>' +
        '</div>';

    var PanelNavigationButtons =
        '<div class="btn-group" role="group" aria-label="..." style="float: right; padding-right: 10px;">' +
        '<a href="" ng-click="onNavRefreshClick($event)">' +
        '<span ' +
        'class="glyphicon glyphicon-refresh" ' +
        'uib-tooltip="Refresh" ' +
        'style="padding-top: 10px; padding-right: 10px; font-size: 15px; color: gray;"></span>' +
        '</a>' +
        '<a href="" ng-click="onNavEyeconClick($event)">' +
        '<span ' +
        'class="glyphicon glyphicon-eye-close" ' +
        'uib-tooltip="Add to Watch List" ' +
        'style="padding-top: 10px; padding-right: 10px; font-size: 15px; color: gray;"></span>' +
        '</a>' +
        '</div>';

    var PanelNavigation =
        '<div style="background-color: white;">' +
        '<ul id="navigation-tabs" class="nav nav-tabs" style="padding-top: 5px;">' +
        '<li role="navigation" class="active">' +
        '<a href="" ng-click="onTabClick($event)" data-index="0">' +
        'Track Info' +
        '</a>' +
        '</li>' +
        '<li role="navigation">' +
        '<a href="" ng-click="onTabClick($event)" data-index="1">' +
        'Active Alerts' +
        '</a>' +
        '</li>' +
        '<li role="navigation">' +
        '<a href="" ng-click="onTabClick($event)" data-index="2">' +
        'Notes' +
        '</a>' +
        '</li>' +
        PanelNavigationButtons +
        '</ul>' +
        '</div>';

    var PanelBody =
        '<div class="panel-body" style="margin: 0px; padding: 0px;">' +
        '<img class="ship-pic" ng-src="{{DATA.TRACK.IMAGE}}">' +
        PanelNavigation +
        InfoTabContent +
        '</div>';

    var PanelTemplate =
        '<div class="scroll-content">' +
        '<div class="panel panel-default" style="margin-left: auto; margin-right: auto; max-width: 510px;">' +
        PanelHeading +
        PanelBody +
        '</div>' +
        '</div>';
    Template.set('Panel', PanelTemplate);

}

module.exports = BaseballCardTemplates;