import { expect } from 'chai';
import sinon from 'sinon';
import Frame from '../../../models/Frame';
import { Model } from 'mongoose';
import { frameMock, frameMockWithId, framesWithIdListMock } from '../../mocks/frameMock';

describe('Frame Model', () => {
  const frameModel = new Frame();

	before(() => {
		sinon.stub(Model, 'create').resolves(frameMockWithId);
		sinon.stub(Model, 'findOne').resolves(frameMockWithId);
		sinon.stub(Model, 'find').resolves(framesWithIdListMock);
		sinon.stub(Model, 'findByIdAndDelete').resolves(frameMockWithId);
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

    it('invalid _id', async () => {
      let err: any;
      try {
        await frameModel.readOne('qualquer_id_errado')
      } catch (error: any) {
        err = error;
      }
      expect(err).not.to.be.undefined;
      expect(err.message).to.equal('InvalidMongoId')
    });
  });

  describe('Searching all frames', () => {
    it('successfuly found', async () => {
      const framesList = await frameModel.read();
      expect(framesList).to.deep.equal(framesWithIdListMock);
    });
  });

  describe('Deleting a frame', () => {
    it('successfuly deleted', async () => {
      const deletedFrame = await frameModel.destroy('62cf1fc6498565d94eba52cd');
      expect(deletedFrame).to.deep.equal(frameMockWithId);
    });

    it('invalid _id', async () => {
      let err: any;
      try {
        await frameModel.destroy('qualquer_id_errado')
      } catch (error: any) {
        err = error;
      }
      expect(err).not.to.be.undefined;
      expect(err.message).to.equal('InvalidMongoId')
    });
  });

});