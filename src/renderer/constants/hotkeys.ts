import * as electron from 'electron';
import * as mousetrap from 'mousetrap';

import { Dispatch } from '../redux/redux-types';

export const registerHotkeys = (dispatch: Dispatch) => {
  // Reload Electron
  mousetrap.bind('ctrl+r', () => {
    electron.remote.getCurrentWindow().reload();
  });

  // Open the Dev Tools
  mousetrap.bind('ctrl+alt+i', () => {
    electron.remote.getCurrentWindow().webContents.openDevTools();
  });


};
