const UserService = require('../services/UserService');
const auth = require('../schemas/authentication');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await UserService.createUser({ name, email, password });
  if (!user) {
    return res.status(401).json({
      message: 'Email already exists'
    });
  }
  const newUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    coins: user.coins,
    role: user.role
  }
  const token = auth.generateToken(user);
  return res.status(200).json({ 
    user: newUser,
    token
  });
};

const getAllUsers = async (req, res) => {
  const users = await UserService.getAllUsers();
  return res.status(200).json({ users });
};

const updateUserRoleAndCoins = async (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  const user = auth.verifyToken(token);
  if (!user) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  if (user.role !== 'admin') {
    return res.status(403).json({ message: 'Not authorized' });
  }
  const { userId } = req.params;
  const { role, coins } = req.body;
  const updatedUser = await UserService.updateUserRoleAndCoins(userId, role, coins);
  if (!updatedUser) {
    return res.status(401).json({ message: 'Invalid user' });
  }
  return res.status(200).json({ message: 'User updated' });
}

module.exports = {
  createUser,
  getAllUsers,
  updateUserRoleAndCoins,
};