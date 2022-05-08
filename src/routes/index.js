const { Router } = require('express');
const LoginRouter = require('./LoginRoutes');
const ProductRouter = require('./ProductRoutes');
const UserRouter = require('./UserRoutes');
const SalesRouter = require('./SalesRoutes');
const LoadRouter = require('./LoadRoutes');

const routes = Router();

routes.use('/login', LoginRouter);

routes.use('/products', ProductRouter);

routes.use('/users', UserRouter);

routes.use('/sales', SalesRouter);

routes.use('/load', LoadRouter);

module.exports = routes;