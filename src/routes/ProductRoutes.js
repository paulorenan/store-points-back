const ProductController = require('../controllers/ProductController');
const AdmMiddleware = require('../middlewares/AdmMiddleware');
const { Router } = require('express');

const ProductRouter = Router();

ProductRouter.get('/', ProductController.getProducts);

ProductRouter.post('/', 
  AdmMiddleware.isAdmin,
  ProductController.createProduct
);

ProductRouter.put('/:productId',
  AdmMiddleware.isAdmin,
  ProductController.updateProduct
);

ProductRouter.delete('/:productId',
  AdmMiddleware.isAdmin,
  ProductController.deleteProduct
);

module.exports = ProductRouter;