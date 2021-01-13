const express = require('express')
const router = express.Router()
const marsController = require('../controllers/marsController')
const auth = require('../middleware/auth')

router.post('/', auth, marsController.getRoverImages)

module.exports = router
