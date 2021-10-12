import React from 'react';
import { Route } from 'react-router-dom';
import useLoadPizza from './hooks/useLoadPizza';
<<<<<<< HEAD
import useLoadCart from './hooks/useLoadCart';
=======
>>>>>>> dc5c3600a0e580c2e47e895924f58036c10fdd7b

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  const { category, sortBy } = useLoadPizza();
<<<<<<< HEAD
  const { rowEmptyCart, rowCompleteCart } = useLoadCart();
=======
>>>>>>> dc5c3600a0e580c2e47e895924f58036c10fdd7b

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/">
          <Home category={category} sortBy={sortBy} />
        </Route>
        <Route exact path="/cart">
<<<<<<< HEAD
          <Cart emptyCart={rowEmptyCart} completeCart={rowCompleteCart} />
=======
          <Cart />
>>>>>>> dc5c3600a0e580c2e47e895924f58036c10fdd7b
        </Route>
      </div>
    </div>
  );
}

export default App;
