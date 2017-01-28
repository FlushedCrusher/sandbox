/**
 * Config Variables
 * 
 * @returns {Config}
 */

var Config = {
  BASEBALLCARD: {
    TEST: {
      VALUE: false,
      DATA: {
        totalFeatures: 1,
        features: [{
          geometry: {
            coordinates: [121.91388888888889, 19.203333333333333],
          },
          properties: {
            avg_speed: "averageSpeed",
            beNumber: "beNumber",
            blueprints: "blueprints",
            callsign: "callSign",
            cargo: "cargo",
            charterOwner: "charterOwner",
            CLASSIFICATION: "SECRET",
            crewComp: "crewComp",
            days_deployed: "daysDeployed",
            DISPLAY_NAME: "displayName",
            FLAG: "RA",
            freeboard: "freeboard",
            home_port: "Corellia",
            HULL_NUMBER: "hullNumber",
            last_port: "lastPort",
            LAST_REFUEL: "lastRefuel",
            length: "length",
            LTN: "ltn",
            MAJOR_WEAPONS: "majorWeapons",
            MMSI: "mmsi",
            next_port: "nextPort",
            owner: "owner",
            READINESS_LEVEL: "readiness",
            S2A_TRACK_TYPE: "s2aType",
            SCONUM: "sconum",
            SHIP_CLASS: "shipClass",
            source: "source",
            speed_cap: "speedCap",
            SUBORDINATION: "subordination",
            THREAT: "threat",
            TIME_STAMP: 1463014800000,
            TRACK_GUID: "guid",
            TRACK_ID: "trackNumber",
            TRACK_TYPE: "trackType",
            upRightRigSeq: "upRightRigSeq",
            VESSEL_CATEGORY: "category",
            VESSEL_NAME: "Millennium Falcon",
            VESSEL_TYPE: "vesselType",
            width: "width"
          }
        }],
        FLAG_PIC:'../src/Test/img/ra-flag.png',
        COUNTRY: 'RA',
        IMAGE: '../src/Test/img/ship.jpg',
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