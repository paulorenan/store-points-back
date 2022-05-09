const ProductService = require('../services/ProductService');

const getProducts = async (req, res) => {
  const products = await ProductService.getProducts();
  return res.status(200).json({ products });
};

const createProduct = async (req, res) => {
  const { name, price, image } = req.body;
  const product = await ProductService.createProduct({ name, price, image });
  return res.status(200).json({ product });
};

const updateProduct = async (req, res) => {
  const { productId } = req.params;
  const { name, price } = req.body;
  const product = await ProductService.updateProduct(productId, { name, price });
  return res.status(200).json({ product });
};

const deleteProduct = async (req, res) => {
  const { productId } = req.params;
  const product = await ProductService.deleteProduct(productId);
  return res.status(200).json({ product });
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};