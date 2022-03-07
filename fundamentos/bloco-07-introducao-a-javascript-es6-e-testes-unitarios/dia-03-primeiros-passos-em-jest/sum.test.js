//1.1
const sum = require('./sum');

describe('Tests function sum', () => {
  it('Expect sum(a, b) to equal a + b', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);//1.2
  });  
  //1.3 e 1.4
  it('Expect to throw Error if one parameter is string', () => {
    expect(() => sum(4, '5')).toThrow();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });
});
