const fetch = require('node-fetch')

exports.getPlanetaryData = async (req, res) => {
  const api = 'https://api.nasa.gov/planetary/apod'
  const url = `${api}?api_key=${process.env.NASA_SECRET}`
  try {
    const resp = await fetch(url)
    const data = await resp.json()

    console.log(data)
    res.setHeader('Content-Type', 'application/json')
    res.json(data)
  } catch (error) {
    console.log(error)

    res.status(500).json({ success: false, message: 'Could not retrieve data' })
  }
}
