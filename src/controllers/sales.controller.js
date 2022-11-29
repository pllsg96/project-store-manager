const salesService = require('../services/sales.service');

const getAllSales = async (_req, res) => {
  const { status, message, result } = await salesService.getAllSales();
  if (message) return res.status(status).json(message);

  return res.status(status).json(result);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const { status, message, result } = await salesService.getSaleById(id);
  if (message) return res.status(status).json({ message });

  return res.status(status).json(result);
};

module.exports = {
  getAllSales,
  getSaleById,
};