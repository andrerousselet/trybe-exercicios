import { expect } from 'chai';
import sinon from 'sinon';
import Lens from '../../../models/Lens';
import { Model } from 'mongoose';
import { lensMock, lensMockWithId, lensWithIdListMock } from '../../mocks/lensMock';

describe('Lens Model', () => {
  const lensModel = new Lens();

	before(() => {
		sinon.stub(Model, 'create').resolves(lensMockWithId);
		sinon.stub(Model, 'findOne').resolves(lensMockWithId);
		sinon.stub(Model, 'find').resolves(lensWithIdListMock);
	});

	after(() => {
		sinon.restore();
	});

  describe('Creating a lens', () => {
    it('successfuly created', async () => {
      const createdLens = await lensModel.create(lensMock);
      expect(createdLens).to.deep.equal(lensMockWithId);
    });
  });

  describe('Searching a lens', () => {
    it('successfuly found', async () => {
      const foundLens = await lensModel.readOne('62cf1fc6498565d94eba52cd');
      expect(foundLens).to.deep.equal(lensMockWithId);
    });

    it('_id not found', async () => {
      try {
        await lensModel.readOne('qualquer_id_errado')
      } catch (error: any) {
        expect(error.message).to.equal('InvalidMongoId')
      }
    });
  });

  describe('Searching all lens', () => {
    it('successfuly found', async () => {
      const lensList = await lensModel.read();
      expect(lensList).to.deep.equal(lensWithIdListMock);
    });
  });

});