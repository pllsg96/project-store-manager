const chai = require('chai');
const sinon = require('sinon');
const { expect } = chai;

const productsModel = require('../../../src/models/products.model');
const productsService = require('../../../src/services/products.service');
const mock = require('../services/mock/products.service.mock');

describe('Teste da camada service - rota /products', function () {

  afterEach(function () { sinon.restore() });

  describe('Teste da função getAll', function () {
    it('Retorna todos os produtos existentes', async function () {
      // Arrange -> configurações do teste
      sinon.stub(productsModel, 'getAll').resolves(mock.productDb);

      // Act -> camada da função
      const response = await productsService.getAll();

      // Assert -> o que esperamos de retorno da função
      expect(response).to.be.deep.equal({ type: null, message: mock.productDb });
    });
  });

  describe('Teste da função getById', function () {
    it('Retorna o respectivo produto através do ID', async function () {
      // Arrange -> configurações do teste
      const id = 1;
      sinon.stub(productsModel, 'getAll').resolves(mock.productDb);

      // Act -> camada da função
      const response = await productsService.getById(id);

      // Assert -> o que esperamos de retorno da função
      expect(response).to.be.deep.equal({ type: null, message: mock.productsDb[0] });
    });

    it('Retorna status 404 quando houver erro', async function () {
      // Arrange -> configurações do teste
      const id = 4;
      sinon.stub(productsModel, 'getAll').resolves(mock.productDb);

      // Act -> camada da função
      const response = await productsService.getById(id);
      console.log(response);


      // Assert -> o que esperamos de retorno da função
      expect(response).to.be.deep.equal({ type: '404', message: 'Product not found' });
    });

  });

});