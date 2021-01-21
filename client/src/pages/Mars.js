import React, { useState, useEffect, useContext } from 'react'
import styled from '@emotion/styled'
import Layout from '../components/Layout'
import { formatDate } from '../utils/dateUtils'
import { UserContext } from '../App'

const Mars = () => {
  const { token } = useContext(UserContext)
  const [images, setImages] = useState([])
  const [date, setDate] = useState('')

  const getRoverImgs = async d => {
    let data

    if (d) {
      const date = formatDate(d)
      data = { date }
    }

    const url = '/api/mars'
    const { success, message } = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: data ? JSON.stringify(data) : JSON.stringify({}),
    }).then(response => response.json())

    if (success) {
      setImages(message)
    }
  }

  useEffect(() => {
    getRoverImgs()
  }, [getRoverImgs])

  const handleDate = e => {
    setDate(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    getRoverImgs(date)
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <label id='date'>
          <input
            onChange={handleDate}
            value={date}
            name='date'
            type='date'
            max={formatDate(new Date())}
          />
        </label>
        <button
          className='f6 link ph3 pv2 mb2 dib white bg-black mt3'
          type='submit'
        >
          Submit
        </button>
      </form>
      <MarsS>
        <h1>Mars Rover Images</h1>
        <div className='cf w-100'>
          {images.map(({ id, earth_date, img_src }) => (
            <div className='fl w-50 w-third-m w-25-ns'>
              <div id={id} className='aspect-ratio aspect-ratio--1x1'>
                <img
                  style={{ backgroundImage: `url(${img_src})` }}
                  class='db bg-center cover aspect-ratio--object'
                  alt=''
                />
              </div>
            </div>
          ))}
        </div>
      </MarsS>
    </Layout>
  )
}

const MarsS = styled.div`
  .aspect-ratio {
    height: 0;
    position: relative;
  }

  .aspect-ratio--1x1 {
    padding-bottom: 100%;
  }

  .aspect-ratio--object {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
  }

  .cover {
    background-size: cover !important;
  }

  .bg-center {
    background-repeat: no-repeat;
    background-position: center center;
  }

  .cf:before,
  .cf:after {
    content: ' ';
    display: table;
  }

  .cf:after {
    clear: both;
  }

  .cf {
    *zoom: 1;
  }

  .db {
    display: block;
  }

  .fl {
    float: left;
    _display: inline;
  }

  .w-50 {
    width: 50%;
  }

  .w-100 {
    width: 100%;
  }

  @media screen and (min-width: 30em) {
    .w-25-ns {
      width: 25%;
    }
  }

  @media screen and (min-width: 30em) and (max-width: 60em) {
    .w-third-m {
      width: calc(100% / 3);
    }
  }
`

export default Mars
