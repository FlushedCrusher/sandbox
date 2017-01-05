'use strict'; // eslint-disable-line strict

var ElementManager = require('../Element/ElementManager.js');
var elementManager = new ElementManager();

var EventOptions = require('../Events/EventOptions.js');
var StyleOptions = require('../Style/StyleOptions.js');

var DivOptions = require('../Div/DivOptions.js');
var Div = require('../Div/Div.js');
elementManager.register('Div', Div);

var l1 = new DivOptions();
l1.setTextContent('Level 1');

var l2 = new DivOptions();
var styles2 = new StyleOptions();
styles2.set('cssText',
  "color: white;" +
  "background-color: red;" +
  'border: 1px solid black;'
).set('color', 'blue');
l2.setTextContent('Level 2')
.setStyle(styles2);

var l3 = new DivOptions();
var styles3 = new StyleOptions();
styles3.set('cssText',
  'color: green;' +
  'background-color: yellow;' +
  'border: 1px solid black;'
);
l3.setTextContent('Level 3')
.setStyle(styles3);

var l4 = new DivOptions();
var events4 = new EventOptions();
events4.set('onclick', function() {
  'use strict';
  alert('Clicked level 4!');
});
l4.setTemplate("<div>I am a template div!</div>")
.setEvents(events4);

elementManager
  .create('Div', l1)
  .nest('Div', l2)
  .nest('Div', l3)
  .after('Div', l3, true)
  .nest('Div', l4)
  .build();

elementManager
  .create('Div', l1)
  .nest('Div', l2, true)
  .nest('Div', l2)
  .nest('Div', l3, true)
  .after('Div', l2)
  .build();