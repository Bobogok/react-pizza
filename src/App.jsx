import React, { useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { setPizzas as setPizzasAction } from './redux/actions/pizzas';

import { Header } from './components';
import { Home, Cart } from './pages';

function App({ items, setPizzas }) {
  useEffect(() => {
    axios
      .get('http://localhost:1337/db.json')
      .then(({ data }) => {
        setPizzas(data.pizzas);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home items={items} />} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

// will be merged as props to App component
const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items
  };
};

// will be given the dispatch setPizzas of store
const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items))
  };
};

// we subs at changes in store, if store is changed - App rerendering
export default connect(mapStateToProps, mapDispatchToProps)(App);
