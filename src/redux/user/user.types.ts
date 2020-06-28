import { User } from 'firebase';

export const ActionTypes = {
  SET_CURRENT_USER: '[USER] SET_CURRENT_USER',
};

export interface ToggleCartHiddenAction {
  type: typeof ActionTypes.SET_CURRENT_USER;
  payload: User;
}

export type UserActionTypes = ToggleCartHiddenAction;
