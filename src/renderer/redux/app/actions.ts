import { createAction } from 'typesafe-actions';

export const toggleSettingsDialog = createAction('app/TOGGLE_SETTINGS_DIALOG');

export const updateSearchTerm = createAction(
  'app/UPDATE_SEARCH_TERM',
  action => (value: string) => action(value),
);


