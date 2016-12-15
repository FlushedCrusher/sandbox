test('adds 1 + 2 to equal 3', () => {
  var Math = require('../js/util/Math.js');
  Math = Math.getInstance();
  expect(Math.add(1, 2)).toBe(3);
});