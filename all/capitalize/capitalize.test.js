const capitalize = require('./capitalize');

test('check if first letter is uppercase', () => {
  expect(capitalize('hello')).toBe('Hello');
})