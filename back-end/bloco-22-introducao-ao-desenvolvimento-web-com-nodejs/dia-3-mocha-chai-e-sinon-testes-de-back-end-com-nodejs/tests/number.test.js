const { expect } = require('chai');
const { myNumber } = require('../exercises/number.js')

describe('A função myNumber()', () => {
  describe('retorna', () => {
    it('"positivo" quando o número for maior que 0', () => {
      const result = myNumber(1);
      expect(result).to.be.equal('positivo');
    });
    it('"negativo" quando o número for menor que 0', () => {
      const result = myNumber(-1);
      expect(result).to.be.equal('negativo');
    });
    it('"neutro" quando o número for igual a 0', () => {
      const result = myNumber(0);
      expect(result).to.be.equal('neutro');
    });
  });
});
