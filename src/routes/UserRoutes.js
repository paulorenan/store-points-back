const userController = require('../controllers/UserController');
const { Router } = require('express');

const UserRouter = Router();

UserRouter.post('/', userController.createUser);

module.exports = UserRouter;