import { ActionTypes, CartActionTypes } from './cart.types';

export const toggleCartHiddenAction = (): CartActionTypes => ({
  type: ActionTypes.TOGGLE_CART_HIDDEN,
});
