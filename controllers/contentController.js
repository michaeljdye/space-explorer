const fetch = require('node-fetch');

exports.getPlanetaryData = async (req, res) => {
  const resp = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API}`
  );
  const data = await resp.json();

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(JSON.stringify(data));
};
