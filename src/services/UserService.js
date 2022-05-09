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
};

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
  };
};

const getUserById = async (userId) => {
  const userData = await User.findOne({
    where: {
      id: userId
    },
    attributes: { exclude: ['password'] }
  });
  return userData;
};

const getUserCoins = async (userId) => {
  const userData = await User.findOne({
    where: {
      id: userId
    },
    attributes: ['coins']
  });
  return userData.coins;
};

const getAllUsers = async () => {
  const userData = await User.findAll({
    attributes: { exclude: ['password'] },
    order: [['createdAt', 'DESC']]
  });
  return userData;
};

const getUserByIdAndEmail = async (userId, email) => {
  const userData = await User.findOne({
    where: {
      id: userId,
      email
    },
    attributes: { exclude: ['password'] }
  });
  return userData;
};

const updateUserRoleAndCoins = async (userId, role, coins) => {
  const userData = await User.update({
    role,
    coins
  }, {
    where: {
      id: userId
    }
  });
  return userData;
}

module.exports = {
  userLogin,
  getUsersRoleUser,
  updateCoins,
  createUser,
  getUserById,
  getUserCoins,
  getAllUsers,
  getUserByIdAndEmail,
  updateUserRoleAndCoins,
};