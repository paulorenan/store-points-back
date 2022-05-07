const SaleController = require('../controllers/SaleController');
const { Router } = require('express');

const SaleRoute = Router();

SaleRoute.get('/', SaleController.getSales);

SaleRoute.post('/', SaleController.createSale);

module.exports = SaleRoute;