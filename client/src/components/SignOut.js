import React, { useEffect } from 'react';
import SignIn from '../pages/SignIn';

const SignOut = ({ removeUser }) => {
  useEffect(removeUser, []);
  return <SignIn />;
};

export default SignOut;
