const productsModel = require('../models/products.model');

const getAllProducts = async () => {
  const allProducts = await productsModel.getAllProducts();
  if (!allProducts.length) return { status: 404, message: 'Product not found' };

  return { status: 200, result: allProducts };
};

const getProductById = async (id) => {
  const productById = await productsModel.getProductById(id);
  if (!productById) return { status: 404, message: 'Product not found' }; 

  return { status: 200, result: productById };
};

const insertProduct = async (name) => {
  const id = await productsModel.insertProduct(name);
  const insertNewProduct = await productsModel.getProductById(id);
  if (!insertNewProduct) return { status: 404, message: 'Product does not exist' };

  return { status: 201, result: insertNewProduct };
};

const updateProduct = async (id, name) => {
  const doesProductExist = await productsModel.getProductById(id);
  if (!doesProductExist) {
    return { status: 404, message: 'Product not found' }; 
  }
  await productsModel.updateProduct(id, name);
  const updatedProduct = await productsModel.getProductById(id);

  return { status: 200, result: updatedProduct };
};

const deleteProduct = async (id) => {
  const doesProductExist = await productsModel.getProductById(id);
  if (!doesProductExist) {
    return { status: 404, message: 'Product not found' };
  }

  await productsModel.deleteProduct(id);

  return { status: 204, result: '' };
};

module.exports = {
  getAllProducts,
  getProductById,
  insertProduct,
  updateProduct,
  deleteProduct,
};