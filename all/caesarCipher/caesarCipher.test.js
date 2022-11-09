import caesarCipher from "./caesarCipher";


test('test caesar', () => {
  expect(caesarCipher('attack')).toBe('buubdl')
});
