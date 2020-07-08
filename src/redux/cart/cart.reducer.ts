import { ActionTypes, CartActionTypes } from './cart.types';
import { addItemToCart, removeItemToCart } from './cart.utils';
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
    case ActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemToCart(state.cartItems, action.payload),
      };
    case ActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
