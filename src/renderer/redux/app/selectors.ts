import { createSelector } from 'reselect';

import { RootState } from '../redux-types';

export const appStateSelector = (state: RootState, _props?: any) => state.app;

export const settingsDialogOpenSelector = createSelector(
  appStateSelector,
  app => app.settingsDialogOpen,
);


export const searchTermSelector = createSelector(
  appStateSelector,
  app => app.searchTerm,
);