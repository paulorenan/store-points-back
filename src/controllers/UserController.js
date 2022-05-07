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
  return res.status(200).json({ newUser, token });
};

module.exports = {
  createUser
};