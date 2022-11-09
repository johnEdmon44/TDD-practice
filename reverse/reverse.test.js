const reverseString = require('./reverse');

test('reverse string', () => {
  expect(reverseString('hello')).toBe('olleh');
});
