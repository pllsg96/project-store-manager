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

module.exports = {
  getProducts,
  getProductById,
};