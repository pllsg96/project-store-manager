const productService = require('../services/products.service');

const HTTP_NOT_FOUND_STATUS = 404;
const HTTP_SUCCESS_STATUS = 200;

const getProducts = async (_req, res) => {
  const { type, message } = await productService.getAll();
  if (type) return res.status(type).json(message);

  return res.status(HTTP_SUCCESS_STATUS).json(message);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.getById(id);
  if (type) return res.status(HTTP_NOT_FOUND_STATUS).json({ message });

  return res.status(HTTP_SUCCESS_STATUS).json(message);
};

const insertProduct = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await productService.insertProduct(name);
  if (type) return res.status(type).json(message);

  return res.status(201).json(message);
};

const updateProduct = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const { type, message } = await productService.updateProduct(id, name);
  // console.log(type, { message }, 'aqui');
  // PERGUNTAR
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
  getProducts,
  getProductById,
  insertProduct,
  updateProduct,
  deleteProduct,
};