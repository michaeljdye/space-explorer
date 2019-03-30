require('dotenv').config();
const express = require('express');
const planetController = require('./controllers/planetController');
const searchController = require('./controllers/searchController');

// Create Express app
const app = express();

app.get('/api/planet', planetController.getPlanetaryData);
app.get('/api/search/:query', searchController.searchNasaDatabase);

const port = 4000;
app.listen(port, () => console.log(`App is listening on ${port}`));
