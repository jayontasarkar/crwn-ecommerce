import * as Types from './actionTypes';

export const toggleCartDropdown = () => {
  return {
    type: Types.toggleCartDropdown,
  };
};

export const addToCart = (item) => {
  return {
    type: Types.addItemIntoCart,
    payload: item,
  };
};

export const removeFromCart = (item) => {
  return {
    type: Types.clearItemFromCart,
    payload: item,
  };
};

export const removeItemQtyFromCart = (item) => {
  return {
    type: Types.removeItemFromCart,
    payload: item,
  };
};
