const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('x-auth-token');

  // Check for token
  if (!token) return res.status(401).json({ message: 'Authorization denied' });

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWTSECRET);

    // Add user from payload
    req.user = decoded;

    next();
  } catch (error) {
    res.status(400).json({ message: 'Token is not valid' });
  }
};

module.exports = auth;
