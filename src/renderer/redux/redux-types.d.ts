import { AnyAction, Dispatch as ReduxDispatch } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { StateType } from 'typesafe-actions';

import { AppActions } from './app';
import { rootReducer } from './index';

export interface RootState extends StateType<typeof rootReducer> {}

export type RootAction = AppActions;

export type AsyncThunkResult<R> = ThunkAction<
  Promise<R>,
  RootState,
  {},
  AnyAction
>;
export type ThunkResult<R> = ThunkAction<R, RootState, undefined, AnyAction>;

export type Dispatch = ThunkDispatch<RootState, any, RootAction> &
  ReduxDispatch<RootAction>;

export type GetStateFunc = () => RootState;
