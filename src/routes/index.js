const { Router } = require('express');
const LoginRouter = require('./LoginRoutes');

const routes = Router();
routes.use('/login', LoginRouter);

module.exports = routes;