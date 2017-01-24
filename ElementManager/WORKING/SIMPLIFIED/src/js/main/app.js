'use strict'; // eslint-disable-line strict

var ElementManager = require('../Element/ElementManager.js');
// var ElementOptions = require('../Element/ElementOptions.js');
// var Style = require('../Style/StyleOptions.js');

var elementManager = new ElementManager();
window.ElementManager = elementManager;

var Header = elementManager.createFromTemplate(
  '<header class="header class-top-secret">' +
    '<p>TOP SECRET</p>' +
  '</header>'
);
var Footer = elementManager.createFromTemplate(
  '<footer class="footer class-top-secret">' +
    '<p>TOP SECRET</p>' +
  '</footer>'
);
Header.setClassification = _setClassification.bind(Header);
Footer.setClassification = _setClassification.bind(Footer);

function _setClassification(classification) {
  'use strict';
  var thisClass = '';
  if(classification.length > 0) {
    if(classification.charAt(0).toUpperCase() === "U") {
      thisClass = "class-unclass";
    } else if (classification.charAt(0).toUpperCase() === "S"){
      thisClass = "class-secret";
    } else if (classification.charAt(0).toUpperCase() === "T"){
      thisClass = "class-top-secret";
    }
  } else {
    thisClass = "class-noclass";
  }
  this.removeClasses(classificationClasses);
  this.addClass(thisClass);
  this.children[0].setTextContent(classification);
  return this;
}

function setClassification(classification) {
  'use strict';
  Header.setClassification(classification);
  Footer.setClassification(classification);
}

var classificationClasses = [
  'class-noclass',
  'class-unclass',
  'class-secret',
  'class-top-secret'
];

var classifications = [
  'UNCLASSIFIED',
  'SECRET',
  'TOP SECRET',
  ''
];
var idx = -1;
setInterval(function() {
  'use strict';
  idx = (idx + 1) % classifications.length;
  setClassification(classifications[idx]);
}, 5000);

elementManager
  .addOrReplace('Header', Header)
  .addOrReplace('Footer', Footer)
  .build();