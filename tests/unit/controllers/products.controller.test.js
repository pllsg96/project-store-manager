const chai = require('chai');
const sinon = require('sinon');
const { expect } = chai;
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const productsService = require('../../../src/services/products.service');
const productsController = require('../../../src/controllers/products.controller');
const mock = require('./mock/products.controller.mock');

describe('Teste da camada controller - rota /products', function () {

  afterEach(function () { sinon.restore() });

  describe('Teste da função getAllProducts', function () {
    it('retorna todos os produtos cadastrados', async function () {
      // Arrange -> configurações do teste
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productsService, 'getAllProducts').resolves( { status: 200, result: mock.productsDb } );

      // Act -> camada da função
      await productsController.getAllProducts(req, res);

      // Assert -> o que esperamos de retorno da função
      expect(res.status).to.have.be.calledWith(200);
      expect(res.json).to.have.be.calledWith(mock.productsDb);
    });

    it('retorna NOT FOUND STATUS', async function () {
      // Arrange -> configurações do teste
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productsService, 'getAllProducts').resolves( { status: 404, message: mock.productsDb } );

      // Act -> camada da função
      await productsController.getAllProducts(req, res);

      // Assert -> o que esperamos de retorno da função
      expect(res.status).to.have.be.calledWith(404);
      expect(res.json).to.have.be.calledWith(mock.productsDb);
    });
  });

  describe('Teste da função getProductById', function () {
    it('retorna apenas o produto com o respectivo id', async function () {
      // Arrange -> configurações do teste
      const req = { params: { id: 1 }};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productsService, 'getProductById').resolves( { status: 200, result: mock.productsDb } );

      // Act -> camada da função
      await productsController.getProductById(req, res);

      // Assert -> o que esperamos de retorno da função
      expect(res.status).to.have.be.calledWith(200);
      expect(res.json).to.have.be.calledWith(mock.productsDb);
    });
  });

});