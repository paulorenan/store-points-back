'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [{
      name: 'Playstation 5',
      price: 200.00,
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_669939-MLA44492818154_012021-F.webp',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Playstation 4',
      price: 150.00,
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_796475-MLA40540552881_012020-F.webp',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Iphone 12',
      price: 500.00,
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_785957-MLA46082341306_052021-F.webp',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Iphone 13',
      price: 900.00,
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_790522-MLA47782243619_102021-F.webp',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Manopla do infinito',
      price: 80.00,
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_786177-MLB48396862298_112021-F.webp',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Manopla do infinito Iron Man',
      price: 90.00,
      image: 'https://http2.mlstatic.com/D_NQ_NP_616437-MLB48474077143_122021-O.webp',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  },  
};
