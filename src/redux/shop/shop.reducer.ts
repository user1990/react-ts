import { ActionTypes, ShopActionTypes } from './shop.types';
import { ShopState } from './shop.interfaces';

const INITIAL_STATE: ShopState = {
  collections: [],
  isFetching: false,
  errorMessage: '',
};

const shopReducer = (state = INITIAL_STATE, action: ShopActionTypes) => {
  switch (action.type) {
    case ActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case ActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
