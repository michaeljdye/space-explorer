import React, { useState, createContext } from 'react';
import { Router, navigate } from '@reach/router';
import Index from './pages/Index';
import Search from './pages/Search';
import SignIn from './pages/SignIn';
import SignOut from './components/SignOut';
import SignUp from './pages/SignUp';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';

export const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState({ isAuth: false });

  const initUser = data => {
    setUser({ ...data, isAuth: true });
  };

  const removeUser = () => {
    setUser({ isAuth: false });
  };

  return (
    <UserContext.Provider
      value={{ user: user.user, token: user.token, isAuth: user.isAuth }}
    >
      <div>
        <Router>
          <PublicRoute path="/" component={Index} />
          <ProtectedRoute path="/search" component={Search} />
          <SignIn path="/sign-in" navigate={navigate} initUser={initUser} />
          <SignOut path="/sign-out" removeUser={removeUser} />
          <SignUp path="/sign-up" navigate={navigate} />
        </Router>
      </div>
    </UserContext.Provider>
  );
};

export default App;
