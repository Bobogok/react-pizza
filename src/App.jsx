import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { fetchPizzas } from './redux/actions/pizzas';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  // This hook returns a reference to the dispatch function from the Redux store.
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas());
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
