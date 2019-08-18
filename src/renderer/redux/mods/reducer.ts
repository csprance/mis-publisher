import { getType } from 'typesafe-actions';

import { actions, Types } from './index';
import defaultModsState from './state';

export default (
  state: Types.ModsState = defaultModsState,
  action: Types.ModsActions,
): Types.ModsState => {
  switch (action.type) {
    case getType(actions.selectMod):
      return state.map(mod => ({
        ...mod,
        selected: mod.id === action.payload,
      }));

    case getType(actions.addMod.success):
      return state;

      case getType(actions.removeMod.success):
      return  state;

    case getType(actions.refreshMod.success):
      return  state;

    default:
      return state;
  }
};
