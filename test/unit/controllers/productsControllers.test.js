const { expect } = require('chai');
const sinon = require('sinon');
const productsController = require('../../../controllers/productsControllers')
const productsService = require('../../../services/productsServices');

describe('PRODUCTS CONTROLLERS TESTS', () => {
  describe('List all products in the database', () => {    
    const request = {};
    const response = {};
    let next = () => {};

    before(() => {
      const serviceResponse = {
        code: 200,
        data: [
          {
          "id": 1,
          "name": "Martelo de Thor",
          "quantity": 10
          },{
            "id": 2,
            "name": "Traje de encolhimento",
            "quantity": 20
          },{
            "id": 2,
            "name": "Escudo do Capitão América",
            "quantity": 30
          }
        ]};
      
      sinon.stub(productsService, 'getAll').resolves(serviceResponse);

      request.body = {};
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      });


    after(()=>{
      productsService.getAll.restore();
    })

    it('Returns 200 status when requesting', async() => {
      await productsController.getAll(request, response, next);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    describe('Search by id when there is a product registered in the database', () => {
      const request = {};
      const response = {};
      let next = () => {};
  
      before(() => {
        const serviceResponse = {
          code: 200, 
          data: [
            { 
              id: 1,
              name: 'Martelo de Thor',
              quantity: 10
            }
          ] 
        };
        request.params = { id: 1 };
        sinon.stub(productsService, 'getById').resolves(serviceResponse);
  
        request.body = {};
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
      });
  
      after(() => {
        productsService.getById.restore();
      });
  
      it('Returns 200 status when requesting', async () => {
        await productsController.getById(request, response, next);
      
        expect(response.status.calledWith(200)).to.be.true;
      });
    });
  });
});
