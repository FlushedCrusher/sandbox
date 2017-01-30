/**
 * Config Variables
 * 
 * @returns {CONFIG}
 */

var TestData = require('../../../Test/data/TestData.js');

var CONFIG = {
  BASEBALLCARD: {
    CLASSIFICATION_CLASSES: [
      'class-noclass',
      'class-unclass',
      'class-secret',
      'class-top-secret'
    ]
  },
  CONFIGURATOR_SVC: {
    URL: '/ufs-configurator/rest/configuration/{{configKey}}/configuration'
  },
  TEST: {
    VALUE: true,
    DATA: TestData,
  },
  TRACK_SVC: {
    KEY: 'dcgsn.geoserver.track.uri'
  },
  WATCHLIST_SVC: {
    KEY: 'dcgsn.watchlist-crud.uri',
    EYECON_ADD_TIP: 'Add to Watch List.',
    EYECON_REMOVE_TIP: 'Remove from Watch List.',
  }
};

module.exports = CONFIG;