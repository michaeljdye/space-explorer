import React, { useEffect, useState } from 'react';
import { Router } from '@reach/router';
import Index from './pages';
import About from './pages/About';
import Login from './pages/Login';

const App = () => {
  const [planet, setPlanet] = useState({});
  const getContent = async () => {
    const res = await fetch('/api/content');
    const data = await res.json();
    setPlanet(data);
    console.log(data);
  };

  useEffect(() => {
    getContent();
  }, []);

  return (
    <div>
      <Router>
        <Index path="/" planet={planet} />
        <About path="/about" planet={planet} />
        <Login path="/login" planet={planet} />
      </Router>
    </div>
  );
};

export default App;
