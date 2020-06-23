import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import reducer from './combineReducer';

const middlewares = [logger];

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, enhancers(applyMiddleware(...middlewares)));

export const persistor = persistStore(store);

export default store;
