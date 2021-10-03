import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  const [pizza, setPizzas] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:1337/db.json')
      .then((res) => {
        setPizzas(res.data.pizzas);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home items={pizza} />} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
