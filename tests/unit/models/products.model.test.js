const chai = require('chai');
const sinon = require('sinon');
const { expect } = chai;

const productsModel = require('../../../src/models/products.model');
const connection = require('../../../src/models/db/connection');
const mock = require('./mock/products.model.mock');

describe('Teste da camada model - rota /products', function () {

  afterEach(function () { sinon.restore() });

  describe('Teste da função getAllProducts', function () {
    it('retorna todos os produtos cadastrados', async function () {
      // Arrange -> configurações do teste
      sinon.stub(connection, 'execute').resolves([mock.productsDb]);

      // Act -> camada da função
      const response = await productsModel.getAllProducts();

      // Assert -> o que esperamos de retorno da função
      expect(response).to.be.equal(mock.productsDb);
    });
  });

  describe('Teste da função getProductById', function () {
    it('retorna o produto cadastrado com o respectivo Id', async function () {
      const id = 1;
      // Arrange -> configurações do teste
      sinon.stub(connection, 'execute').resolves([mock.productsDb]);

      // Act -> camada da função
      const response = await productsModel.getProductById(id);

      // Assert -> o que esperamos de retorno da função
      expect(response).to.be.equal(mock.productsDb[0]);
    });
  });

  describe('Teste da função insertProduct', function () {
    it('retorna o id do novo produto cadastrado', async function () {
      // Arrange -> configurações do teste
      sinon.stub(connection, 'execute').resolves([{ insertId: 5 }]);

      // Act -> camada da função
      const response = await productsModel.insertProduct("novo valor produto teste");

      // Assert -> o que esperamos de retorno da função
      expect(response).to.be.equal(5);
    });
  });

});