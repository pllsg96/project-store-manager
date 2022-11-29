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
  const { status, message, result } = await productService.updateProduct(id, name);
  if (message) return res.status(status).json({ message });

  return res.status(status).json(result);
};

const deleteProduct = async (req, res) => { 
  const { id } = req.params;
  const { status, message, result } = await productService.deleteProduct(id);

  if (message) return res.status(status).json({ message });

  return res.status(status).json(result);
};

module.exports = {
  getAllProducts,
  getProductById,
  insertProduct,
  updateProduct,
  deleteProduct,
};