const express = require('express')
const router = express.Router()
const planetController = require('../controllers/planetController')

router.get('/', planetController.getPlanetaryData)

module.exports = router
