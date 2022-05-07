const ProductController = require('../controllers/ProductController');
const { Router } = require('express');

const ProductRouter = Router();

ProductRouter.get('/', ProductController.getProducts);

ProductRouter.post('/', ProductController.createProduct);

module.exports = ProductRouter;