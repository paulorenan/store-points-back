const SaleController = require('../controllers/SaleController');
const { Router } = require('express');

const SaleRoute = Router();

SaleRoute.get('/', SaleController.getSales);

SaleRoute.get('/:userId', SaleController.getSalesByUser);

SaleRoute.post('/', SaleController.createSale);

module.exports = SaleRoute;