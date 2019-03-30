import React, { useEffect, useState } from 'react';
import { Router } from '@reach/router';
import Index from './pages';
import Search from './pages/Search';
import Login from './pages/Login';

const App = () => {
  const [planet, setPlanet] = useState({});

  const getContent = async () => {
    const res = await fetch('/api/planet');
    const data = await res.json();
    setPlanet(data);
  };

  useEffect(() => {
    getContent();
  }, []);

  return (
    <div>
      <Router>
        <Index path="/" planet={planet} />
        <Search path="/search" planet={planet} />
        <Login path="/login" planet={planet} />
      </Router>
    </div>
  );
};

export default App;
