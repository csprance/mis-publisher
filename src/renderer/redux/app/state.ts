import * as npmPackage from '../../../../package.json';
import { AppState, DialogState } from './types';

export const defaultDialogState: DialogState = {
  settingsDialogOpen: false,
};

export const defaultState: AppState = {
  searchTerm: '',
  localVersion: npmPackage.version,
  remoteVersion: npmPackage.version,
  ...defaultDialogState,
};

export default defaultState;
