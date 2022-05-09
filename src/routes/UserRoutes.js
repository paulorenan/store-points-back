const userController = require('../controllers/UserController');
const AdmMiddleware = require('../middlewares/AdmMiddleware');
const { Router } = require('express');

const UserRouter = Router();

UserRouter.get('/', userController.getAllUsers);

UserRouter.post('/', userController.createUser);

UserRouter.put('/:userId',
  AdmMiddleware.isAdmin,
  userController.updateUserRoleAndCoins
);

module.exports = UserRouter;