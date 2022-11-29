const productService = require('../services/products.service');

const getAllProducts = async (_req, res) => {
  const { status, message, result } = await productService.getAllProducts();
  if (message) return res.status(status).json(message);

  return res.status(status).json(result);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const { status, message, result } = await productService.getProductById(id);
  if (message) return res.status(status).json({ message });

  return res.status(status).json(result);
};

const insertProduct = async (req, res) => {
  const { name } = req.body;
  const { status, message, result } = await productService.insertProduct(name);
  if (message) return res.status(status).json(message);

  return res.status(status).json(result);
};

const updateProduct = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const { type, message } = await productService.updateProduct(id, name);
  if (type) return res.status(type).json({ message });

  return res.status(200).json(message);
};

const deleteProduct = async (req, res) => { 
  const { id } = req.params;
  const { type, message } = await productService.deleteProduct(id);

  if (type) return res.status(type).json({ message });

  return res.status(204).json(message);
};

module.exports = {
  getAllProducts,
  getProductById,
  insertProduct,
  updateProduct,
  deleteProduct,
};