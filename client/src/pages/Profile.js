import React, { useState, useContext } from 'react'
import Layout from '../components/Layout'
import { UserContext } from '../App'

const Profile = () => {
  const { user, token, updateUser } = useContext(UserContext)

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)

  const handleName = e => {
    setName(e.target.value)
  }

  const handleEmail = e => {
    setEmail(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const data = await fetch('/api/user/update', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id: user.id, name, email }),
    }).then(res => res.json())

    if (data.success) {
      updateUser(data.message)
    }
  }

  return (
    <Layout>
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <p>
            <strong>Name</strong>
          </p>
          <input onChange={handleName} type='text' value={name} />
        </div>
        <div>
          <p>
            <strong>email</strong>
          </p>
          <input onChange={handleEmail} type='text' value={email} />
        </div>
        <button
          className='f6 link ph3 pv2 mb2 dib white bg-black mt3'
          type='submit'
        >
          Submit
        </button>
      </form>
    </Layout>
  )
}

export default Profile
