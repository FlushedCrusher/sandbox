/**
 * Config Variables
 * 
 * @returns {Config}
 */

var TestData = require('../../../Test/data/TestData.js');

var Config = {
  BASEBALLCARD: {
    TEST: {
      VALUE: true,
      DATA: TestData,
    },
    CONSTANTS: {
      EYECON_ADD_TIP: 'Add to Watch List.',
      EYECON_REMOVE_TIP: 'Remove from Watch List.',
      CLASSIFICATION_CLASSES: [
        'class-noclass',
        'class-unclass',
        'class-secret',
        'class-top-secret'
      ]
    }
  }
};

module.exports = Config;