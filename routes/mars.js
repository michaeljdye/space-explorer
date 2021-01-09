const express = require('express')
const router = express.Router()
const marsController = require('../controllers/marsController')

router.post('/', marsController.getRoverImages)

module.exports = router
