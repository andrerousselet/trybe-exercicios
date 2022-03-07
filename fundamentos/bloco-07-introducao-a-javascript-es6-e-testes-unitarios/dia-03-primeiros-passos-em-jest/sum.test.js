//1.1
const sum = require('./sum');

it('Expect sum(4, 5) to equal 9', () => {
  expect(sum(4, 5)).toBe(9)
});

//1.2
it('Expect sum(0, 0) to equal 0', () => {
  expect(sum(0, 0)).toBe(0)
});

//1.3 e 1.4
it('Expect sum(4, "5") to throw Error', () => {
  expect(() => sum(4, '5')).toThrow('parameters must be numbers')
});
