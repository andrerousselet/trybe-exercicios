import { expect } from 'chai';
import sinon from 'sinon';
import Frame from '../../../models/Frame';
import { Model } from 'mongoose';
import { frameMock, frameMockWithId } from '../../mocks/frameMock';

describe('Frame Model', () => {
  const frameModel = new Frame();

	before(() => {
		sinon.stub(Model, 'create').resolves(frameMockWithId);
		sinon.stub(Model, 'findOne').resolves(frameMockWithId);
	});

	after(() => {
		sinon.restore();
	});

  describe('Creating a frame', () => {
    it('successfuly created', async () => {
      const createdFrame = await frameModel.create(frameMock);
      expect(createdFrame).to.deep.equal(frameMockWithId);
    });
  });

  describe('Searching a frame', () => {
    it('successfuly found', async () => {
      const foundFrame = await frameModel.readOne('62cf1fc6498565d94eba52cd');
      expect(foundFrame).to.deep.equal(frameMockWithId);
    });

    it('_id not found', async () => {
      try {
        await frameModel.readOne('qualquer_id_errado')
      } catch (error: any) {
        expect(error.message).to.equal('InvalidMongoId')
      }
    });
  });

});