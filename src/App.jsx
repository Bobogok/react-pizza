import React from 'react';
import { Route } from 'react-router-dom';
import useLoadPizza from './hooks/useLoadPizza';
import useLoadCart from './hooks/useLoadCart';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  const { category, sortBy } = useLoadPizza();
  const { rowEmptyCart, rowCompleteCart } = useLoadCart();

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/">
          <Home category={category} sortBy={sortBy} />
        </Route>
        <Route exact path="/cart">
          <Cart emptyCart={rowEmptyCart} completeCart={rowCompleteCart} />
        </Route>
      </div>
    </div>
  );
}

export default App;
