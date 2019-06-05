const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

router.get('/:query/:start', searchController.searchNasaDatabase);

module.exports = router;
