const auth = require('../schemas/authentication');

const isAdmin = async (req, res, next) => {
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
  next();
};

module.exports = {
  isAdmin
}