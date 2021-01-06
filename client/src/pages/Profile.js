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

    try {
      const { success, message } = await fetch('/api/user/update', {
        method: 'put',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: user.id, name, email }),
      })
        .then(res => res.json())
        .catch(error => console.log(error))

      if (!success) {
        console.log(message)
        return
      }

      updateUser(message)
    } catch (error) {
      console.log(error)
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
