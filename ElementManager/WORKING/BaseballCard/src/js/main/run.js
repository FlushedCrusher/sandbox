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
    .addOrReplace('content', Info.scroll)
    .addOrReplace('footer', Info.footer)
    .saveUI('info');

}

module.exports = run;