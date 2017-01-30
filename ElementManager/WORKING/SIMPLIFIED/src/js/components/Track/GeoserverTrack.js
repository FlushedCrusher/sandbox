/**
 * GeoserverTrack
 * 
 * @returns {GeoserverTrack}
 */

function GeoserverTrack(data) {
  'use strict';
   this.new(data);
}
GeoserverTrack.prototype.new = function(data) {
  'use strict';

  var idx = (data && data.totalFeatures) ? data.totalFeatures - 1 : undefined;
  var feature = (data && data.features) ? data.features[idx] : undefined;
  var properties = (feature && feature.properties) ? feature.properties : {};

  var flagPicUrl = '';
  var shipPicUrl = '';

  this.geometry =  (feature && feature.geometry) ? feature.geometry : undefined;
  this.lat =  (this.geometry && this.geometry.coordinates) ? this.geometry.coordinates[1] : undefined;
  this.lon =  (this.geometry && this.geometry.coordinates) ? this.geometry.coordinates[0] : undefined;
  this.location =  (this.lat && this.lon) ? this.getLocation(this.lat, this.lon) : {
    lat: 'No Data',
    lon: 'No Data'
  };

  this.assetInfo =  properties.CURRENT_ASSESSMENT || 'No Data';
  this.averageSpeed =  properties.avg_speed || 'No Data';
  this.beNumber =  properties.beNumber || 'No Data';
  this.blueprints =  properties.blueprints || 'No Data';
  this.callSign =  properties.callsign || 'No Data';
  this.cargo =  properties.cargo || 'No Data';
  this.category =  properties.VESSEL_CATEGORY || 'No Data';
  this.charterOwner =  properties.charterOwner || 'No Data';
  this.classification =  properties.CLASSIFICATION || 'No Data';
  this.crewComp =  properties.crewComp || 'No Data';
  this.daysDeployed =  properties.days_deployed || 'No Data';
  this.displayName =  properties.DISPLAY_NAME || 'No Data';
  this.flag =  properties.FLAG || 'No Data';
  this.flagPic =  flagPicUrl + properties.flag;
  this.freeboard =  properties.freeboard || 'No Data';
  this.guid =  properties.TRACK_GUID || 'No Data';
  this.homePort =  properties.home_port || 'No Data';
  this.hullNumber =  properties.HULL_NUMBER || 'No Data';
  this.image =  shipPicUrl + properties.stockPhotoUrl;
  this.lastPort =  properties.last_port || 'No Data';
  this.lastRefuel =  properties.LAST_REFUEL || 'No Data';
  this.lastUpdate =  properties.TIME_STAMP || 'No Data';
  this.length =  properties.length || 'No Data';
  this.ltn =  properties.LTN || 'No Data';
  this.majorWeapons =  properties.MAJOR_WEAPONS || 'No Data';
  this.mmsi =  properties.MMSI || 'No Data';
  this.name =  properties.VESSEL_NAME || 'No Data';
  this.nextPort =  properties.next_port || 'No Data';
  this.owner =  properties.owner || 'No Data';
  this.readiness =  properties.READINESS_LEVEL || 'No Data';
  this.s2aType =  properties.S2A_TRACK_TYPE || 'No Data';
  this.sconum =  properties.SCONUM || 'No Data';
  this.shipClass =  properties.SHIP_CLASS || 'No Data';
  this.source =  properties.source || 'No Data';
  this.speedCap =  properties.speed_cap || 'No Data';
  this.subordination =  properties.SUBORDINATION || 'No Data';
  this.threat =  properties.THREAT || 'No Data';
  this.timeDelay =  'Calculating time delay...';
  this.trackNumber =  properties.TRACK_ID || 'No Data';
  this.trackType =  properties.TRACK_TYPE || 'No Data';
  this.upRightRigSeq =  properties.upRightRigSeq || 'No Data';
  this.vesselType =  properties.VESSEL_TYPE || 'No Data';
  this.width =  properties.width || 'No Data';

};
GeoserverTrack.prototype.setTimeDelay = function() {
  'use strict';
  var milliseconds = Date.now() - this.lastUpdate;
  var newDate = new Date(milliseconds);
	var seconds = newDate.getUTCSeconds();
	var minutes = newDate.getUTCMinutes();
	var hours   = newDate.getUTCHours();
	var days   = newDate.getUTCDate() - 1;
	var months = newDate.getUTCMonth();
	var years = newDate.getUTCFullYear() - 1970;
	var result = '';

	if(years > 0) {
		result = years + ' Y ' + months + ' M ' + days + ' D ' + hours + ':' + minutes + ':' + seconds;
	} else if(months > 0) {
		result = months + ' M ' + days + ' D ' + hours + ':' + minutes + ':' + seconds;
	}else if(days > 0) {
		result = days + ' D ' + hours + ':' + minutes + ':' + seconds;
	} else {
		result = hours + ':' + minutes + ':' + seconds;
	}

	this.timeDelay = result;
	
  return result;
};
GeoserverTrack.prototype.getLocation = function(lat, lon) {
  'use strict';

  // Creating a variable to store the degree symbol.
  var ds = String.fromCharCode(parseInt("00B0", 16));
  
  var location = {}, tmp = '',
    lat_hem = '', lat_d = '', lat_m = '', lat_s = '',
    lon_hem = '', lon_d = '', lon_m = '', lon_s = '';
  
  if(lat > 0){
    lat_hem = 'N';
  }
  else if(lat < 0) {
    lat_hem = 'S';
  }
  
  if(lon > 0){
    lon_hem = 'E';
  }
  else if(lon < 0) {
    lon_hem = 'W';
  }
  
  var _lat = Math.abs(lat);
  var _lon = Math.abs(lon);
  
  /* -- Latitude --*/
  lat_d = Math.floor(_lat);
  tmp = (_lat % 1) * 60;
  
  lat_m = Math.floor(tmp);
  lat_s = ((tmp % 1) * 60).toFixed();
  
  /* -- Longitude --*/
  lon_d = Math.floor(_lon);
  tmp = (_lon % 1) * 60;
  
  lon_m = Math.floor(tmp);
  lon_s = ((tmp % 1) * 60).toFixed();
  
  /*
   * We need to correct for the rounding that is done with tofixed(2)
   * Since this may result in seconds value of 60.
   */
  if(lat_s === "60.00") { lat_s = "0.00"; lat_m += 1; }
  if(lon_s === "60.00") { lon_s = "0.00"; lon_m += 1; }

  location.lat = lat_d + ds + lat_m + '\'' + lat_s + '"' + lat_hem;
  location.lon = lon_d + ds + lon_m + '\'' + lon_s + '"' + lon_hem;
  
  return location;
};

module.exports = GeoserverTrack;