var _context = __dirname;
var _entry = './src/js/main/app.js';
var _outputPath = './bin/';
var _outputFilename = 'bundle.js';

var _pathTocomponents = _context + '/src/js/components/';
var _pathToLib = _context + '/src/js/lib/';
var _pathToMain = _context + '/src/js/main/';
var _pathToConfig = _pathToMain + 'config/';
var _pathToControllers = _pathToMain + 'controllers/';
var _pathToServices = _pathToMain + 'services/';

module.exports = {
  context: _context,
  entry: _entry,
  output: {
    path: _outputPath,
    filename: _outputFilename
  },
  resolve: {
    alias: {
      components: _pathTocomponents,
      lib: _pathToLib,
      main: _pathToMain,
      config: _pathToConfig,
      controllers: _pathToControllers,
      services: _pathToServices
    }
  }
};