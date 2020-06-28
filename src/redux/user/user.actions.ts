import { UserActionTypes, ActionTypes } from './user.types';
import { User } from 'firebase';

export const setCurrentUser = (user: User): UserActionTypes => ({
  type: ActionTypes.SET_CURRENT_USER,
  payload: user,
});
