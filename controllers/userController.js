const mongoose = require('mongoose')
const User = mongoose.model('User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator/check')

exports.signIn = (req, res) => {
  res.json(req.body)
}

exports.register = async (req, res) => {
  const { name, email, password } = req.body

  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    console.log(errors)
    return res.status(422).json({ errors: errors.array() })
  }

  // Check for existing user
  const user = await User.findOne({ email })
  if (user) return res.status(400).json({ message: 'User already exists' })

  const newUser = new User({
    name,
    email,
    password,
  })
  // Generate salt
  // Generate hash
  // Update password with hash
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, async (err, hash) => {
      if (err) throw err
      newUser.password = hash
      const user = await newUser.save()

      // Create JWT that expires in 1hr
      jwt.sign(
        { id: user.id, name: user.name },
        process.env.JWTSECRET,
        {
          expiresIn: 3600,
        },
        (err, token) => {
          if (err) throw err
          res.status(200).json({
            token,
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
            },
          })
        }
      )
    })
  })
}

exports.update = async (req, res) => {
  const { authorization } = req.headers
  const { id, name, email } = req.body

  if (!authorization && !authorization.startsWith('Bearer')) {
    return res.status(400).json({
      success: false,
      message: 'Not authorized',
    })
  }

  const token = authorization.split(' ')[1]

  jwt.verify(token, process.env.JWTSECRET, async (err, decoded) => {
    if (err) {
      return res.status(400).json({ success: false, message: 'Not authorized' })
    }

    if (!name || !email) {
      return res.status(400).json({ success: false, message: 'Missing fields' })
    }

    const user = await User.findByIdAndUpdate(
      id,
      { name, email },
      { new: true }
    )

    res.status(200).json({
      success: true,
      message: { id: user.id, name: user.name, email: user.email },
    })
  })
}
