import { ActionTypes, CartActionTypes } from './cart.types';
import { addItemToCart } from './cart.utils';
import { State } from './cart.interfaces';

export const cartInitialState: State = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = cartInitialState, action: CartActionTypes) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
