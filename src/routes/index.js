const { Router } = require('express');
const LoginRouter = require('./LoginRoutes');
const ProductRouter = require('./ProductRoutes');
const UserRouter = require('./UserRoutes');
const SalesRouter = require('./SalesRoutes');

const routes = Router();

routes.use('/login', LoginRouter);

routes.use('/products', ProductRouter);

routes.use('/users', UserRouter);

routes.use('/sales', SalesRouter);

module.exports = routes;