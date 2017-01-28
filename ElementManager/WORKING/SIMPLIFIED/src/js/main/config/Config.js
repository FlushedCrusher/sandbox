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