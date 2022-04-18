const myRemove = require('./myRemove')

describe('Tests function myRemove', () => {
  it('Tests if parameter item is removed from array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);//2.1
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);//2.2
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);//2.3
  });
});
