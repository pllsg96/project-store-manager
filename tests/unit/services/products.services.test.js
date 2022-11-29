const chai = require('chai');
const sinon = require('sinon');
const { expect } = chai;

const productsModel = require('../../../src/models/products.model');
const productsService = require('../../../src/services/products.service');
const mock = require('../services/mock/products.service.mock');

describe('Teste da camada service - rota /products', function () {

  afterEach(function () { sinon.restore() });

  describe('Teste da função getAllProducts', function () {
    it('Retorna todos os produtos existentes', async function () {
      // Arrange -> configurações do teste
      sinon.stub(productsModel, 'getAllProducts').resolves(mock.productsDb);

      // Act -> camada da função
      const response = await productsService.getAllProducts();

      // Assert -> o que esperamos de retorno da função
      expect(response).to.be.deep.equal({ status: 200, result: mock.productsDb });
    });
  });

  describe('Teste da função getProductById', function () {
    it('Retorna o respectivo produto através do ID', async function () {
      // Arrange -> configurações do teste
      const id = 1;
      sinon.stub(productsModel, 'getProductById').resolves(mock.productsDb[0]);

      // Act -> camada da função
      const response = await productsService.getProductById(id);

      // Assert -> o que esperamos de retorno da função
      expect(response).to.be.deep.equal({ status: 200, result: mock.productsDb[0] });
    });

    it('Retorna status 404 quando houver erro', async function () {
      // Arrange -> configurações do teste
      const id = 4;
      sinon.stub(productsModel, 'getProductById').resolves(mock.productsDb[4]);

      // Act -> camada da função
      const response = await productsService.getProductById(id);

      // Assert -> o que esperamos de retorno da função
      expect(response).to.be.deep.equal({ status: 404, message: 'Product not found' });
    });

  });

    describe('Teste da função insertProduct', function () {
    it('Retorna produto cadastrado', async function () {
      // Arrange -> configurações do teste
      const newProduct = {
        "id": 4,
        "name": "ProdutoX"
      };

      sinon.stub(productsModel, 'insertProduct').resolves(4);
      sinon.stub(productsModel, 'getProductById').resolves(newProduct);

      // Act -> camada da função
      const response = await productsService.insertProduct("ProdutoX");

      // Assert -> o que esperamos de retorno da função
      expect(response).to.be.deep.equal({ status: 201, result: newProduct });
    });
  });

});