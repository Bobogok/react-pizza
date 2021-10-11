import React from 'react';
import { Route } from 'react-router-dom';
import useLoadPizza from './hooks/useLoadPizza';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  const { category, sortBy } = useLoadPizza();

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/">
          <Home category={category} sortBy={sortBy} />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </div>
    </div>
  );
}

export default App;
