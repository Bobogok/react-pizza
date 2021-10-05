import React, { useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setPizzas as setPizzasAction } from './redux/actions/pizzas';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  // This hook returns a reference to the dispatch function from the Redux store.
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('http://localhost:1337/db.json')
      .then(({ data }) => {
        console.log(data);
        dispatch(setPizzasAction(data.pizzas));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
