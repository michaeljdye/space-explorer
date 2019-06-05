import React, { useContext } from 'react';
import { Redirect } from '@reach/router';
import { UserContext } from '../App';

const ProtectedRoute = ({ component: Component, navigate, ...rest }) => {
  const user = useContext(UserContext);
  return user.isAuth ? (
    <Component {...rest} />
  ) : (
    <Redirect from={`/${window.location.pathname}`} to={'/'} />
  );
};

export default ProtectedRoute;
