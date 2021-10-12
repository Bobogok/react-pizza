import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import './styles/index.scss';

import App from './App';

ReactDOM.render(
<<<<<<< HEAD
  // <React.StrictMode>
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  // </React.StrictMode>
=======
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
>>>>>>> dc5c3600a0e580c2e47e895924f58036c10fdd7b
  document.getElementById('root')
);
