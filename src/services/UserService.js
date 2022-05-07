const { User } = require('../models');

const userLogin = async (user) => {
  const { email, password } = user;
  const userData = await User.findOne({
    where: {
      email,
      password
    },
    attributes: { exclude: ['password'] }
  });
  return userData;
};

const getUsersRoleUser = async () => {
  const userData = await User.findAll({
    where: {
      role: 'user'
    },
    attributes: { exclude: ['password'] }
  });
  return userData;
}

const updateCoins = async (userId, coins) => {
  const userData = await User.update({
    coins
  }, {
    where: {
      id: userId
    }
  });
  return userData;
};

const createUser = async (user) => {
  const { name, email, password } = user;
  try {
    const userData = await User.create({
      name,
      email,
      password,
      role: 'user',
      coins: 1000
    });
    return userData;
  } catch (e) {
    return null;
  }
}

module.exports = {
  userLogin,
  getUsersRoleUser,
  updateCoins,
  createUser
};