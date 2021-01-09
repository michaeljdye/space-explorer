import React, { useContext } from 'react'
import { Link } from '@reach/router'
import 'tachyons'
import { UserContext } from '../App'

const Header = () => {
  const { user, isAuth } = useContext(UserContext)

  const authLinks = (
    <>
      {user ? (
        <Link
          className='f5 fw4 db dim no-underline black dn dib-ns pv2 ph3 mr2'
          style={{ fontWeight: 'bold' }}
          to='/profile'
        >
          Welcome, {user.name}
        </Link>
      ) : (
        ''
      )}
      <Link
        className='f5 fw4 db dim no-underline black dn dib-ns pv2 ph3'
        to='/search'
      >
        Search
      </Link>
      <Link
        className='f5 fw4 db dim no-underline black dn dib-ns pv2 ph3'
        to='/mars'
      >
        Mars
      </Link>
      <Link
        className='f5 link dim no-underline ph3 pv2 mb2 dib black'
        to='/sign-out'
      >
        Sign Out
      </Link>
    </>
  )
  const guestLinks = (
    <>
      <Link
        className='f5 link dim ba bw1 ph3 pv2 mb2 dib black mr2'
        to='/sign-in'
      >
        Sign In
      </Link>
      <Link
        className='f5 link dim bg-black ba b--black bw1 ph3 pv2 mb2 dib white'
        to='/sign-up'
      >
        Sign Up
      </Link>
    </>
  )

  return (
    <header>
      <div className='cover mb4 bg-left bg-center-l'>
        <div className='pb2 pb2-m pb2-l'>
          <nav className='dt w-100 mw8 center'>
            <div className='dtc-ns tc tl-ns v-mid w-100 w-50-ns db'>
              <h1>
                <Link
                  to='/'
                  className='dib h2 black b no-underline pa1 grow-large'
                >
                  Space Explorer
                </Link>
              </h1>
            </div>
            <div className='dtc-ns flex justify-center db-ns v-mid tr-ns tc pa3-ns pb3 ph3 w-100'>
              {!isAuth ? guestLinks : authLinks}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
