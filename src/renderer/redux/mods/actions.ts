import {createAction, createAsyncAction} from 'typesafe-actions';
import { AsyncThunkResult } from '../redux-types';
import { Mod } from './types';

export const selectMod = createAction(
  'mods/SELECT',
  action => (id: number) => action(id));

export const addMod = createAsyncAction(
  'mods/ADD_REQUEST',
  'mods/ADD_SUCCESS',
  'mods/ADD_FAILED',
)<void, Mod, string>();
export const addModsThunk = (
  mod: Mod,
): AsyncThunkResult<void> => async dispatch => {
  dispatch(addMod.request());
  try {
    dispatch(addMod.success(mod));
  } catch (err) {
    dispatch(addMod.failure(err.toString()));
  }
};

export const removeMod = createAsyncAction(
  'mods/REMOVE_REQUEST',
  'mods/REMOVE_SUCCESS',
  'mods/REMOVE_FAILED',
)<void, number, string>();
export const removeModsThunk = (
  id: number,
): AsyncThunkResult<void> => async dispatch => {
  dispatch(removeMod.request());
  try {
    dispatch(removeMod.success(id));
  } catch (err) {
    dispatch(removeMod.failure(err.toString()));
  }
};

export const toggleMod = createAsyncAction(
  'mods/TOGGLE_REQUEST',
  'mods/TOGGLE_SUCCESS',
  'mods/TOGGLE_FAILED',
)<void, number, string>();
export const toggleModsThunk = (
  id: number,
): AsyncThunkResult<void> => async dispatch => {
  dispatch(toggleMod.request());
  try {
    dispatch(toggleMod.success(id));
  } catch (err) {
    dispatch(toggleMod.failure(err.toString()));
  }
};
