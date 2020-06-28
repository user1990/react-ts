import { CartActionTypes, ActionTypes } from './cart.types';

export interface State {
  hidden: boolean;
}

export const cartInitialState: State = {
  hidden: true,
};

const cartReducer = (state = cartInitialState, action: CartActionTypes) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
