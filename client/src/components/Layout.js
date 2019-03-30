import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="sans-serif w-90 center">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
