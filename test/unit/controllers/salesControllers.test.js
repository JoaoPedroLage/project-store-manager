const { expect } = require('chai');
const sinon = require('sinon');
const salesController = require('../../../controllers/salesControllers')
const salesService = require('../../../services/salesServices');

describe('SALES CONTROLLERS TESTS', () => {
  describe('List all sales in the database', () => {
    const request = {};
    const response = {};
    let next = () => {};
    
    before(() => {
      const serviceResponse = {
        code: 200,
        data: [
          {
            "saleId": 1,
            "date": "2021-09-09T04:54:29.000Z",
            "productId": 1,
            "quantity": 2
          },
          {
            "saleId": 1,
            "date": "2021-09-09T04:54:54.000Z",
            "productId": 2,
            "quantity": 2
          }
        ]};
      
      sinon.stub(salesService, 'getAll').resolves(serviceResponse);

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      next = sinon.stub().returns();
      });


    after(()=>{
      salesService.getAll.restore();
    })

    it('Returns 200 status when requesting', async() => {
      await salesController.getAll(request, response, next);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });
});
