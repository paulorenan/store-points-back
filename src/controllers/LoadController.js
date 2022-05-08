const UserService = require('../services/UserService');
const auth = require('../schemas/authentication');

const loadSession = async (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  };
  const authUser = await auth.verifyToken(token);
  if (!authUser) {
    return res.status(401).json({ error: 'Invalid token' });
  };
  const user = await UserService.getUserByIdAndEmail(authUser.userId, authUser.email);
  if (!user) {
    return res.status(401).json({ error: 'Invalid token' });
  };
  return res.status(200).json({ user, token });
};

module.exports = {
  loadSession
};
