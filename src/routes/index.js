const { Router } = require('express');
const LoginRouter = require('./LoginRoutes');
const ProductRouter = require('./ProductRoutes');
const UserRouter = require('./UserRoutes');

const routes = Router();

routes.use('/login', LoginRouter);

routes.use('/products', ProductRouter);

routes.use('/users', UserRouter);

module.exports = routes;