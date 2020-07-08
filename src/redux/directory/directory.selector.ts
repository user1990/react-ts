import { createSelector } from 'reselect';

import { State } from './directory.interface';

const selectDirectory = (state: State) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections,
);
