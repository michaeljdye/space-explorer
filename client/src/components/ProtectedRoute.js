import React, { useContext } from 'react'
import { Redirect } from '@reach/router'
import { UserContext } from '../App'

const ProtectedRoute = ({ component: Component, navigate, ...rest }) => {
  const user = useContext(UserContext)

  return user.isAuth ? <Component {...rest} /> : <Redirect to='/' noThrow />
}

export default ProtectedRoute
