'use strict'; // eslint-disable-line strict

var ElementManager = require('../Element/ElementManager.js');
var elementManager = new ElementManager();

var DivOptions = require('../Div/DivOptions.js');
var Div = require('../Div/Div.js');
elementManager.register('Div', Div);

var l1 = new DivOptions();
l1.setTextContent('Level 1');
var l2 = new DivOptions();
l2.setTextContent('Level 2');
var l3 = new DivOptions();
l3.setTextContent('Level 3');
var l4 = new DivOptions();
l4.setTextContent('Level 4')
.events.set('onclick', function() {
  'use strict';
  alert('Clicked level 4!');
}).set('onmouseover', function() {
  'use strict';
  alert('Moused over level 4!');
});

elementManager
  .create('Div', l1)
  .nest('Div', l2)
  .nest('Div', l3)
  .after('Div', l3, true)
  .nest('Div', l4)
  .end();

elementManager
  .create('Div', l1)
  .nest('Div', l2, true)
  .nest('Div', l2)
  .nest('Div', l3, true)
  .after('Div', l2)
  .build();

// window.ElementManager = elementManager;