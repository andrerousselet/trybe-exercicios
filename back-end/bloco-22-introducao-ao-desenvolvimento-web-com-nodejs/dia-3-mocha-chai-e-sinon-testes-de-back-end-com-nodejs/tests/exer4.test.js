const { expect } = require("chai");
const sinon = require('sinon');
const fs = require('fs/promises')
const { write } = require("../exercises/exer4");

describe('Verifica se a função write()', () => {

  beforeEach(() => {
    sinon.restore();
  });

  describe('retorna', () => {
    it('"ok" quando for executada', async () => {
      sinon.stub(fs, 'writeFile');
      const filePath = './exercises/test.txt';
      const fileContent = 'Testing with mocha, chai and sinon!';
      const result = await write(filePath, fileContent);
      expect(result).to.be.equal('ok');
    });
  });
});
