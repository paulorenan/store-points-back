const userController = require('../controllers/UserController');
const { Router } = require('express');

const UserRouter = Router();

UserRouter.get('/', userController.getAllUsers);

UserRouter.post('/', userController.createUser);

UserRouter.put('/:userId', userController.updateUserRoleAndCoins);

module.exports = UserRouter;