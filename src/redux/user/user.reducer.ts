import { UserActionTypes, ActionTypes } from './user.types';

export interface State {
  currentUser: null;
}

const userInitialState: State = {
  currentUser: null,
};

const userReducer = (state = userInitialState, action: UserActionTypes) => {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
