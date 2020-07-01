import { ActionTypes, UserActionTypes } from './user.types';

export interface State {
  currentUser: unknown;
  error: any;
}

export const userInitialState: State = {
  currentUser: null,
  error: null,
};

const userReducer = (state = userInitialState, action: UserActionTypes) => {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    default:
      return state;
  }
};

export default userReducer;
