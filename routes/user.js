const express = require('express')
const router = express.Router()
const { check } = require('express-validator/check')
const userController = require('../controllers/userController')
const auth = require('../middleware/auth')

router.post('/signin', userController.signIn)
router.post(
  '/register',
  [check('name').exists(), check('email').isEmail()],
  userController.register
)
router.put('/update', auth, userController.update)

module.exports = router
