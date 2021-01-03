const express = require('express')
const router = express.Router()
const { check } = require('express-validator/check')
const userController = require('../controllers/userController')

router.post('/signin', userController.signIn)
router.post(
  '/register',
  [check('name').exists(), check('email').isEmail()],
  userController.register
)

module.exports = router
