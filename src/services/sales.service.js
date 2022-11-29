const salesModel = require('../models/sales.models');

const getAllSales = async () => {
  const allSales = await salesModel.getAllSales();

  if (!allSales) return { status: 404, message: 'No sales were found' };

  return { status: 200, result: allSales };
};

const getSaleById = async (id) => {
  const sale = await salesModel.getSaleById(id);
  if (sale.length === 0) return { status: 404, message: 'Sale not found' };

  return { status: 200, result: sale };
};

module.exports = {
  getAllSales,
  getSaleById,
};