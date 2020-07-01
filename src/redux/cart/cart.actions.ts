import { Item } from './cart.interfaces';
import { ActionTypes, CartActionTypes } from './cart.types';

export const toggleCartHiddenAction = (): CartActionTypes => ({
  type: ActionTypes.TOGGLE_CART_HIDDEN,
  payload: {},
});

export const addItemAction = (item: Item): CartActionTypes => ({
  type: ActionTypes.TOGGLE_CART_HIDDEN,
  payload: item,
});
