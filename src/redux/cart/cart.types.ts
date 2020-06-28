export const ActionTypes = {
  TOGGLE_CART_HIDDEN: '[CART] TOGGLE_CART_HIDDEN',
};

export interface ToggleCartHiddenAction {
  type: typeof ActionTypes.TOGGLE_CART_HIDDEN;
}

export type CartActionTypes = ToggleCartHiddenAction;
