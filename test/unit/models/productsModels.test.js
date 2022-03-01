const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const productsModel = require('../../../models/productsModels');

describe('PRODUCTS MODELS TESTS', () => {
  describe('Get all products in database (/productsModels/getAll)', () => {
    describe('No product has been registered in the bank yet', () => {
      before(()=>{ 
        sinon.stub(connection, 'execute').resolves([[]]);
      });

      after(()=>{
        connection.execute.restore();
      });

      it('Returns an array as a response', async () => {
        const result = await productsModel.getAll();

        expect(result).to.be.an('array');
      });
    
      it('The array is empty', async () => {
        const result = await productsModel.getAll();
        
        expect(result).to.be.empty;
      });
    });
  })
})