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

module.exports = {
  getAll,
  getById,
};