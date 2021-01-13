const fetch = require('node-fetch')

exports.getPlanetaryData = async (req, res) => {
  const api = 'https://images-api.nasa.gov/search'
  const url = `${api}?api_key=${process.env.NASA_SECRET}`
  const resp = await fetch(url)
  const data = await resp.json()

  res.setHeader('Content-Type', 'application/json')
  res.json(data)
}
