import { getType } from 'typesafe-actions';
import * as actions from './actions';
import defaultState from './state';
import { AppActions, AppState } from './types';

export default (
  state: AppState = defaultState,
  action: AppActions,
): AppState => {
  switch (action.type) {
    // //////////////
    // Dialogs
    // //////////////
    case getType(actions.toggleSettingsDialog):
      return { ...state, settingsDialogOpen: !state.settingsDialogOpen };

    case getType(actions.updateSearchTerm):
      return { ...state, searchTerm: action.payload };

    default:
      return state;
  }
};
