const { Router } = require('express');
const LoginRouter = require('./LoginRoutes');
const ProductRouter = require('./ProductRoutes');

const routes = Router();

routes.use('/login', LoginRouter);

routes.use('/products', ProductRouter);

module.exports = routes;