import { expect } from 'chai';
import sinon from 'sinon';
import Lens from '../../../models/Lens';
import { Model } from 'mongoose';
import { lensMock, lensMockWithId } from '../../mocks/lensMock';

describe('Lens Model', () => {
  const lensModel = new Lens();

	before(() => {
		sinon.stub(Model, 'create').resolves(lensMockWithId);
		sinon.stub(Model, 'findOne').resolves(lensMockWithId);
	});

	after(() => {
		sinon.restore();
	});

  describe('Creating a lens', () => {
    it('successfuly created', async () => {
      const createdFrame = await lensModel.create(lensMock);
      expect(createdFrame).to.deep.equal(lensMockWithId);
    });
  });

  describe('Searching a lens', () => {
    it('successfuly found', async () => {
      const foundFrame = await lensModel.readOne('62cf1fc6498565d94eba52cd');
      expect(foundFrame).to.deep.equal(lensMockWithId);
    });

    it('_id not found', async () => {
      try {
        await lensModel.readOne('qualquer_id_errado')
      } catch (error: any) {
        expect(error.message).to.equal('InvalidMongoId')
      }
    });
  });

});