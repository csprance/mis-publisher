import { createSelector } from 'reselect';

import { RootState } from '../redux-types';

export const modsSelector = (state: RootState, _props?: any) => state.mods;

export const selectedModSelector = createSelector(modsSelector, mods =>
  mods.find(mod => mod.selected),
);
