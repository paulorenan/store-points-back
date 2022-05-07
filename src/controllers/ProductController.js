const ProductService = require('../services/ProductService');
const auth = require('../schemas/authentication');

const getProducts = async (req, res) => {
  const products = await ProductService.getProducts();
  return res.status(200).json({ products });
};

const createProduct = async (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  };
  const user = auth.verifyToken(token);
  if (!user) {
    return res.status(401).json({ message: 'Invalid token' });
  };
  if (user.role !== 'admin') {
    return res.status(403).json({ message: 'You are not authorized' });
  };
  const { name, price, image } = req.body;
  const product = await ProductService.createProduct({ name, price, image });
  return res.status(200).json({ product });
};

module.exports = {
  getProducts,
  createProduct
};