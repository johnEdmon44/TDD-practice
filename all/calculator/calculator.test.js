import calculator from "./calculator";

test('add 1 + 2 = 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('divide 4 / 2 = 2', () => {
  expect(calculator.divide(4, 2)).toBe(2);
});


test('subtract 4 - 2 = 2', () => {
  expect(calculator.subtract(4, 2)).toBe(2);
});


test('multiply 4 * 2 = 8', () => {
  expect(calculator.multiply(4, 2)).toBe(8);
});