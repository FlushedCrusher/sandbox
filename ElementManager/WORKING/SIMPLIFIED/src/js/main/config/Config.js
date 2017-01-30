/**
 * Config Variables
 * 
 * @returns {CONFIG}
 */

var TestData = require('../../../Test/data/TestData.js');

var CONFIG = {
  TEST: {
    VALUE: true,
    DATA: TestData,
  },
  WATCHLIST_SVC: {
    KEY: 'dcgsn.watchlist-crud.uri',
    EYECON_ADD_TIP: 'Add to Watch List.',
    EYECON_REMOVE_TIP: 'Remove from Watch List.',
  },
  TRACK_SVC: {
    KEY: 'dcgsn.geoserver.track.uri'
  },
  CONFIGURATOR_SVC: {
    URL: '/ufs-configurator/rest/configuration/{{configKey}}/configuration'
  },
  BASEBALLCARD: {  
    CLASSIFICATION_CLASSES: [
      'class-noclass',
      'class-unclass',
      'class-secret',
      'class-top-secret'
    ]
  }
};

module.exports = CONFIG;