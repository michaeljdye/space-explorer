import React, { useState } from 'react'
import { Link } from '@reach/router'
import Layout from '../components/Layout'

const SignIn = ({ navigate, initUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const user = { email, password }
      const res = await fetch('/api/auth', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })

      const data = await res.json()

      initUser(data)

      window.sessionStorage.setItem('user', JSON.stringify(data.user))

      window.sessionStorage.setItem('token', JSON.stringify(data.token))

      // navigate('../')
    } catch (error) {}
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
              <h2>Sign In</h2>
            </legend>
            <div className='mt3'>
              <label className='db fw6 lh-copy f6' htmlFor='email-address'>
                Email
              </label>
              <input
                onChange={handleEmailChange}
                className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                type='email'
                value={email}
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
              />
            </div>
            <div>
              <input
                className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
                type='submit'
                value='Sign in'
              />
            </div>
            <div className='lh-copy mt3'>
              <Link to='/sign-up' className='f6 link dim black db'>
                Sign up
              </Link>
            </div>
          </fieldset>
        </form>
      </main>
    </Layout>
  )
}

export default SignIn
