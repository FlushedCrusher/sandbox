'use strict'; // eslint-disable-line strict

var Reduxish = require('../Reduxish/Reduxish.js');
var counter = require('../Reduxish/Reducers/Counter/Counter.js');
var Render = require('../Reduxish/Reducers/Render/Render.js');
var Log = require('../Reduxish/Reducers/Log/Log.js');

var WindowListeners = require('../WindowListeners/WindowListeners.js');
var KeyDown = require('../Reduxish/Reducers/KeyDown/KeyDown.js');

var Redux = new Reduxish();
var store = Redux.createStore(counter);

var render = new Render(store);
store.subscribe(render.execute.bind(render));

var log = new Log(store);
store.subscribe(log.execute.bind(log));

var keyDown = new KeyDown(store);

render.execute();

var listeners = new WindowListeners();
listeners.add('keydown', keyDown.execute.bind(keyDown));