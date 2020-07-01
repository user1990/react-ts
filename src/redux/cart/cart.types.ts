import { Item } from './cart.interfaces';

export const ActionTypes = {
  TOGGLE_CART_HIDDEN: '[CART] TOGGLE_CART_HIDDEN',
  ADD_ITEM: '[CART] ADD_ITEM',
};

export interface ToggleCartHiddenAction {
  type: typeof ActionTypes.TOGGLE_CART_HIDDEN;
  payload: any;
}

export interface AddItemAction {
  type: typeof ActionTypes.ADD_ITEM;
  payload: Item;
}

export type CartActionTypes = ToggleCartHiddenAction | AddItemAction;
