const fetch = require('node-fetch');

exports.searchNasaDatabase = async (req, res) => {
  const url = `https://images-api.nasa.gov/search?q=${req.params.query}`;
  const resp = await fetch(url);
  const data = await resp.json();
  res.json(data);
};
