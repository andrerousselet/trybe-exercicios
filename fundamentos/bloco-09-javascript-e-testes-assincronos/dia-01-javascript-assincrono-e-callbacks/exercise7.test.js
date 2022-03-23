const { it, expect } = require('@jest/globals');
const { doesNotMatch, doesNotReject } = require('assert');
const uppercase = require('./exercise7');

// 7 - Escreva um teste que verifique a chamada da callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.
it('Verfica se "test" vira "TEST"', (done) => {
  uppercase('test', (str) => {
    try {
      expect(str).toBe('TEST');
      done();
    } catch (e) {
      done(e);
    }
  });
});