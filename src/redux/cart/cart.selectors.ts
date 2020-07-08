import { createSelector } from 'reselect';

import { Cart, Item } from './cart.interfaces';

const selectCart = (state: Cart) => state.cart;

export const selectCartItems: any = createSelector(
  [selectCart],
  cart => cart.cartItems,
);

export const selectCartHidden: any = createSelector(
  [selectCart],
  cart => cart.hidden,
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems: Item[]) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0,
    ),
);

export const selectCartTotal: any = createSelector(
  [selectCartItems],
  (cartItems: Item[]) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
      0,
    ),
);
