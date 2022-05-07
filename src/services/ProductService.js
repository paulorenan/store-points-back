const { Product } = require('../models');

const getProducts = async () => {
  const products = await Product.findAll({
    attributes: { exclude: ['createdAt', 'updatedAt'] }
  });
  return products;
};

const createProduct = async (product) => {
  const { name, price, image } = product;
  const productData = await Product.create({
    name,
    price,
    image,
    createdAt: new Date(),
    updatedAt: new Date()
  });
  return productData;
};

const getProductPriceById = async (productId) => {
  const product = await Product.findOne({
    where: {
      id: productId
    },
    attributes: ['price']
  });
  return product.price;
}

module.exports = {
  getProducts,
  createProduct,
  getProductPriceById
};

