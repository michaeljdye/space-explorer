const express = require('express')
const router = express.Router()
const planetController = require('../controllers/planetController')
const auth = require('../middleware/auth')

router.get('/', planetController.getPlanetaryData)

module.exports = router
