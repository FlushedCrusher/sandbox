/**
 * Config Variables
 * 
 * @returns {Config}
 */

var Config = {
  BASEBALLCARD: {
    TEST: {
      FLAG_PIC:'../src/Test/img/ra-flag.png',
      COUNTRY: 'RA',
      TRACK: {
        CLASSIFICATION: 'TOP SECRET',
        IMAGE: '../src/Test/img/ship.jpg',
        FLAG: 'RA',
        NAME: 'Millennium Falcon',
        HOME_PORT: 'Corellia',
        LAST_UPDATE: 1463014800000,
        LOCATION: {
          lat: 19.203333333333333,
          lon: 121.91388888888889
        }
      }
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