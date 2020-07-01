import { createSelector } from 'reselect';
import { State } from './user.interface';

const selectUser = (state: State) => state.user;

export const selectCurrentUser: any = createSelector(
  [selectUser],
  user => user.currentUser,
);
