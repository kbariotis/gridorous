const stateGrid = require('./');

test('It can create a row', () => {
  expect(stateGrid.makeRow()).toEqual({
    textAlign: 'left'
  });
});

test('It can create a container', () => {
  expect(stateGrid.makeContainer()).toEqual({
    textAlign: 'left'
  });
});

test('It can create a column', () => {
  expect(stateGrid.makeColXs(2)).toEqual({
    textAlign: 'left'
  });
});

test('It can create a column offset', () => {
  expect(stateGrid.makeColXsOffset(2)).toEqual({
    textAlign: 'left'
  });
});
