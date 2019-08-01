import { combineReducers } from 'redux';

import app from './app';
import mods from './mods';

export const rootReducer = combineReducers({
  app,
  mods
});
