const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator/check');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  // Check for existing user
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'User does not exist' });

  // Validate password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'invalid credentials' });

  jwt.sign(
    { id: user.id, name: user.name },
    process.env.JWTSECRET,
    {
      expiresIn: 3600,
    },
    (err, token) => {
      if (err) throw err;
      res.status(200).json({
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      });
    }
  );
};

exports.getUserData = async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
};
