const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const salesModel = require('../../../models/salesModels');

describe('PRODUCTS SALES TESTS', () => {
  describe('Get all sales in database (/salesModels/getAll)', () => {
    describe('No product has been registered in the bank yet', () => {
      before(()=>{ 
        sinon.stub(connection, 'execute').resolves([[]]);
      });

      after(()=>{
        connection.execute.restore();
      });

      it('Returns an array as a response', async () => {
        const result = await salesModel.getAll();

        expect(result).to.be.an('array');
      });
      it('The array is empty', async () => {
        const result = await salesModel.getAll();
        
        expect(result).to.be.empty;
      });
    });
  })
})