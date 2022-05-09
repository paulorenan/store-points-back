const { Product } = require('../models');

const getProducts = async () => {
  const products = await Product.findAll({
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    order: [['id', 'DESC']]
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
};

const updateProduct = async (productId, product) => {
  const { name, price } = product;
  const productData = await Product.update({
      name,
      price,
      updatedAt: new Date()
    }, {
      where: { id: productId }
    });
  return productData;
}

const deleteProduct = async (productId) => {
  const productData = await Product.destroy({
    where: { id: productId }
  });
  return productData;
}

module.exports = {
  getProducts,
  createProduct,
  getProductPriceById,
  updateProduct,
  deleteProduct,
};

