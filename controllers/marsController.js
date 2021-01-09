const fetch = require('node-fetch')
const { URL } = require('url')

exports.getRoverImages = async (req, res) => {
  console.log('body', req.body)
  const earthDate = req.body.date
  const page = 1
  const url = new URL(
    `${process.env.NASA_API}/mars-photos/api/v1/rovers/curiosity/photos`
  )
  const params = {
    page: page,
    api_key: process.env.NASA_SECRET,
  }

  if (earthDate) {
    params.earth_date = earthDate
  } else {
    params.sol = 1000
  }

  url.search = new URLSearchParams(params).toString()

  try {
    const data = await fetch(url.href).then(response => response.json())

    res.json({ success: true, message: data.photos })
  } catch (error) {
    console.log(error)
  }
}
