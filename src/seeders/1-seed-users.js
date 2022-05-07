'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      name: 'Admin',
      email: 'admin@storepoints.com',
      password: '123456',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'User',
      email: 'user1@gmail.com',
      password: '123456',
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },  
};
