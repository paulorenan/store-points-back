const SaleService = require('../services/SaleService');
const UserService = require('../services/UserService');
const ProductService = require('../services/ProductService');
const auth = require('../schemas/authentication');

const createSale = async (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  };
  const user = auth.verifyToken(token);
  if (!user) {
    return res.status(401).json({ message: 'Invalid token' });
  };
  console.log('user', user);
  const coins = await UserService.getUserCoins(user.userId);
  console.log('coins', coins);
  const { productId } = req.body;
  const productPrice = await ProductService.getProductPriceById(productId);
  console.log('product', productPrice);
  if (coins < productPrice) {
    return res.status(401).json({ message: 'Not enough coins' });
  }
  const sale = await SaleService.createSale({ userId: user.userId, productId });
  if (!sale) {
    return res.status(401).json({ message: 'Invalid product' });
  };
  const newCoins = coins - productPrice;
  await UserService.updateCoins(user.userId, newCoins);
  return res.status(200).json({ message: 'Sale created', sale });
};

const getSales = async (_req, res) => {
  const sales = await SaleService.getSales();
  return res.status(200).json({ sales });
};

const getSalesByUser = async (req, res) => {
  const { userId } = req.params;
  const sales = await SaleService.getSalesByUser(userId);
  return res.status(200).json({ sales });
}

module.exports = {
  createSale,
  getSales,
  getSalesByUser,
};

