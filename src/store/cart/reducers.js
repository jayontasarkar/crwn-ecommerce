import * as Types from './actionTypes';
import { addQtyIntoCartItem, removeQtyFromCart } from './utils';

const INITIAL_STATE = {
  hidden: true,
  items: [],
};

const cartReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.toggleCartDropdown:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case Types.addItemIntoCart:
      return {
        ...state,
        items: addQtyIntoCartItem(state.items, action.payload),
      };
    case Types.clearItemFromCart:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case Types.removeItemFromCart:
      return {
        ...state,
        items: removeQtyFromCart(state.items, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducers;
