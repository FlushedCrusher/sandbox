var webpack = require('webpack');
var path = require('path');
var _context = __dirname;
var _outputPath = __dirname + '/compiled/';
/** Alias Variables */
var _pathToShared = _context;
var _pathToEntries = _pathToShared + '/entry-points/'
/** Entry Locations */
var _entry = {
    testEntry1: _pathToEntries + 'testentry-1',
};
module.exports = {
    context: _context,
    entry: _entry,
    output: {
        path: _outputPath,
        filename: '[name].js'
    },
    resolve: {
        alias: {
            shared: _pathToShared
        }
    }
};