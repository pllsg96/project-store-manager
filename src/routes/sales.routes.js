const express = require('express');
const salesController = require('../controllers/sales.controller');

const salesRouter = express.Router();

salesRouter.get('/', salesController.getAllSales);
salesRouter.get('/:id', salesController.getSaleById);

// salesRouter.get('/:id', salesController.getSaleById);

// salesRouter.post('/', validateName, salesController.insertProduct);

module.exports = salesRouter;