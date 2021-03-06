import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// eslint-disable-next-line no-underscore-dangle
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
