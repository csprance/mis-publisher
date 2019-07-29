import { Store } from 'redux';

import { registerHotkeys } from '../constants/hotkeys';
import { Dispatch } from './redux-types';
import logger from '../lib/logger';

// This is the callback function from the redux-persist persistor
// It is called after the store is rehydrated
export default (store: Store) => () => {
  logger.info('Bootstrapping Application');
  const { dispatch }: { dispatch: Dispatch } = store;

  // Register all the apps hotkeys
  registerHotkeys(dispatch);
};
