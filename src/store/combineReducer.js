import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/reducer';
import cartReducers from './cart/reducers';
import shopReducer from './shop/reducer';
import directoryReducer from './directory/reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const combineReducer = combineReducers({
  user: userReducer,
  cart: cartReducers,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, combineReducer);
