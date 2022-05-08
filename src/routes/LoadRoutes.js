const LoadController = require('../controllers/LoadController');
const { Router } = require('express');

const LoadRouter = Router();

LoadRouter.get('/', LoadController.loadSession);

module.exports = LoadRouter;