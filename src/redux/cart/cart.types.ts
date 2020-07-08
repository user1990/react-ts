import { Item } from './cart.interfaces';

export const ActionTypes = {
  TOGGLE_CART_HIDDEN: '[CART] TOGGLE_CART_HIDDEN',
  ADD_ITEM: '[CART] ADD_ITEM',
  REMOVE_ITEM: '[CART] REMOVE_ITEM',
  CLEAR_ITEM_FROM_CART: '[CART] CLEAR_ITEM_FROM_CART',
};

export interface ToggleCartHiddenAction {
  type: typeof ActionTypes.TOGGLE_CART_HIDDEN;
  payload: any;
}

export interface AddItemAction {
  type: typeof ActionTypes.ADD_ITEM;
  payload: Item;
}

export interface RemoveItemAction {
  type: typeof ActionTypes.REMOVE_ITEM;
  payload: Item;
}

export interface ClearItemFromCartAction {
  type: typeof ActionTypes.CLEAR_ITEM_FROM_CART;
  payload: Item;
}

export type CartActionTypes =
  | ToggleCartHiddenAction
  | AddItemAction
  | RemoveItemAction
  | ClearItemFromCartAction;
