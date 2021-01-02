import React, { useState } from 'react'
import Layout from '../components/Layout'

const SignUp = ({ navigate }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleNameChange = e => {
    setName(e.target.value)
  }

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const user = { name, email, password }

    await fetch('/api/user/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })

    navigate('../sign-in')
  }

  return (
    <Layout>
      <main className='pa4 black-80'>
        <form onSubmit={handleSubmit}>
          <fieldset
            id='sign_up'
            className='w-100 w-50-ns mt4 center ba b--transparent ph0 mh0'
          >
            <legend className='f4 center fw6 ph0 mh0'>
              <h2>Sign Up</h2>
            </legend>
            <div className='mt3'>
              <label className='db fw6 lh-copy f6' htmlFor='email'>
                Name
              </label>
              <input
                onChange={handleNameChange}
                className='pv2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                type='name'
                value={name}
                id='name'
                name='name'
              />
            </div>
            <div className='mt3'>
              <label className='db fw6 lh-copy f6' htmlFor='email'>
                Email
              </label>
              <input
                onChange={handleEmailChange}
                className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                type='email'
                value={email}
                id='email'
                name='email'
              />
            </div>
            <div className='mv3'>
              <label className='db fw6 lh-copy f6' htmlFor='password'>
                Password
              </label>
              <input
                onChange={handlePasswordChange}
                className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                type='password'
                value={password}
                id='password'
                name='password'
              />
            </div>
            <div>
              <input
                className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
                type='submit'
                value='Sign Up'
              />
            </div>
            <div className='lh-copy mt3'>
              <a href='/sign-in' className='f6 link dim black db'>
                Already have an account? Sign in.
              </a>
            </div>
          </fieldset>
        </form>
      </main>
    </Layout>
  )
}

export default SignUp
