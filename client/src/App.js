import React, { useState, createContext, useEffect } from 'react'
import { Router, navigate } from '@reach/router'
import Index from './pages/index'
import Search from './pages/Search'
import SignIn from './pages/SignIn'
import SignOut from './components/SignOut'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute'

export const UserContext = createContext()

const App = () => {
  const [user, setUser] = useState({ isAuth: false })

  const initUser = data => {
    setUser({ ...data, isAuth: true })
  }

  const removeUser = () => {
    window.sessionStorage.removeItem('token')
    window.sessionStorage.removeItem('user')

    setUser({ isAuth: false })
  }

  useEffect(() => {
    const currentUser = window.sessionStorage.getItem('user')
    const token = window.sessionStorage.getItem('token')

    if (currentUser && token) {
      setUser({
        user: JSON.parse(currentUser),
        token: JSON.parse(token),
        isAuth: true,
      })
    }
  }, [])

  return (
    <UserContext.Provider
      value={{ user: user.user, token: user.token, isAuth: user.isAuth }}
    >
      <div>
        <Router>
          <PublicRoute path='/' component={Index} />
          <ProtectedRoute path='/search' component={Search} />
          <ProtectedRoute path='/profile' component={Profile} />
          <SignIn path='/sign-in' navigate={navigate} initUser={initUser} />
          <SignOut path='/sign-out' removeUser={removeUser} />
          <SignUp path='/sign-up' navigate={navigate} />
        </Router>
      </div>
    </UserContext.Provider>
  )
}

export default App
