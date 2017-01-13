/**
 * Run State Controller
 * 
 * @returns {run}
 */

function run($injector, $compile, $rootScope) { // eslint-disable-line no-unused-vars
  'use strict';

  var ElementManager = $injector.get('ElementManager');
  var Info = $injector.get('Info');

  ElementManager
    .addOrReplace('header', Info.header)
    .addOrReplace('panel', Info.panel)
    .addOrReplace('footer', Info.footer)
    .saveUI('info');

}

module.exports = run;