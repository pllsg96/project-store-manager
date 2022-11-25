const productsModel = require('../models/products.model');

const getAll = async () => {
  const allProducts = await productsModel.getAll();

  return { type: null, message: allProducts };
};

const getById = async (id) => {
  const productById = await productsModel.getById(id);
  if (!productById) return { type: '404', message: 'Product not found' }; 

  return { type: null, message: productById };
};

const insertProduct = async (name) => {
  const id = await productsModel.insertProduct(name);
  const insertNewProduct = await productsModel.getById(id);
  if (!insertNewProduct) return { type: 'NOT_FOUND', message: 'Product does not exist' };

  return { type: null, message: insertNewProduct };
};

module.exports = {
  getAll,
  getById,
  insertProduct,
};