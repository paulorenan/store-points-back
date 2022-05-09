const { Sale, Product } = require('../models');

const createSale = async (sale) => {
  const { userId, productId } = sale;
  console.log('sale', sale);
  const saleData = await Sale.create({
    user_id: userId,
    product_id: productId,
    createdAt: new Date(),
    updatedAt: new Date()
  });
  return saleData;
};

const getSales = async () => {
  const sales = await Sale.findAll({
    include: [{
      model: Product,
      as: 'product',
      attributes: ['name', 'price']
    }]
  });
  return sales;
};

const getSalesByUser = async (userId) => {
  const sales = await Sale.findAll({
    where: { user_id: userId },
    include: [{
      model: Product,
      as: 'product',
      attributes: ['name', 'price']
    }],
    order: [['createdAt', 'DESC']]
  });
  return sales;
};

module.exports = {
  createSale,
  getSales,
  getSalesByUser,
};