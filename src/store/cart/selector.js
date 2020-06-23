import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.items
);

export const selectCartDropdownHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector([selectCartItems], (items) =>
  items.reduce((accumalated, item) => accumalated + item.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (items) =>
  items.reduce(
    (accumalated, item) => accumalated + item.quantity * item.price,
    0
  )
);
