import React, { useEffect } from 'react'
import SignIn from '../pages/SignIn'

const SignOut = ({ navigate, removeUser }) => {
  useEffect(() => {
    removeUser()

    navigate('/')
  }, [removeUser])
  return <SignIn />
}

export default SignOut
