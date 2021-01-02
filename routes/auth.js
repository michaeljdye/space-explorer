const express = require('express')
const router = express.Router()
const { check } = require('express-validator/check')
const authController = require('../controllers/authController')
const auth = require('../middleware/auth')

/*
 * @route Post api/auth/
 * @desc Log in user
 * @access Public
 */
router.post('/', [check('email').isEmail()], authController.login)

/*
 * @route GET api/auth/user
 * @desc Get user data
 * @access Private
 */
router.get('/user', auth, authController.getUserData)

module.exports = router
