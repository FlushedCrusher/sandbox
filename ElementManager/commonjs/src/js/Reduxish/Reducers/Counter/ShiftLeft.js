function ShiftLeft(num) {
  'use strict';
  var str = num.toString();
  var pre = "";
  if(str.length > 1 && str[0] === "-") {
    pre = "-";
    str = str.substr(1);
  }
  return parseInt(pre + str.substr(1) + str[0]);
}

module.exports = ShiftLeft;