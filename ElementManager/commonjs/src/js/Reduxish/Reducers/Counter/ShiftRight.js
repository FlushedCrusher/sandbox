function ShiftRight(num) {
  'use strict';
  var str = num.toString();
  var pre = "";
  if(str.length > 1 && str[0] === "-") {
    pre = "-";
    str = str.substr(1);
  }
  return parseInt(pre + str[str.length-1] + str.substr(0,str.length - 1));
}

module.exports = ShiftRight;