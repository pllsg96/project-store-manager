const chai = require('chai');
const sinon = require('sinon');
const { expect } = chai;

const productsModel = require('../../../src/models/products.model');
const connection = require('../../../src/models/db/connection');
const mock = require('./mock/products.model.mock');

describe('Teste da camada model - rota /products', function () {

  afterEach(function () { sinon.restore() });

  describe('Teste da função getAll', function () {
    it('retorna todos os produtos cadastrados', async function () {
      // Arrange -> configurações do teste
      sinon.stub(connection, 'execute').resolves([mock.productsDb]);

      // Act -> camada da função
      const response = await productsModel.getAll();

      // Assert -> o que esperamos de retorno da função
      expect(response).to.be.equal(mock.productsDb);
    });
  });

  describe('Teste da função getById', function () {
    it('retorna o produto cadastrado com o respectivo Id', async function () {
      const id = 1;
      // Arrange -> configurações do teste
      sinon.stub(connection, 'execute').resolves([mock.productsDb]);

      // Act -> camada da função
      const response = await productsModel.getById(id);

      // Assert -> o que esperamos de retorno da função
      expect(response).to.be.equal(mock.productsDb[0]);
    });
  });

});