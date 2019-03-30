require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');

const contentController = require('./controllers/contentController');

// Create Express app
const app = express();

app.get('/api/content', async (req, res) => {
  const resp = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API}`
  );
  const data = await resp.json();

  res.setHeader('Content-Type', 'application/json');
  res.json(data);
});

const port = 4000;
app.listen(port, () => console.log(`App is listening on ${port}`));
