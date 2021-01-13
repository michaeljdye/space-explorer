const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
  const { authorization } = req.headers

  // Check for token
  if (!authorization && !authorization.startsWith('Bearer')) {
    return res.status(401).json({
      success: false,
      message: 'Not authorized',
    })
  }

  const token = authorization.split(' ')[1]

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWTSECRET)

    // Add user from payload
    req.user = decoded

    next()
  } catch (error) {
    res.status(400).json({ message: 'Token is not valid' })
  }
}

module.exports = auth
