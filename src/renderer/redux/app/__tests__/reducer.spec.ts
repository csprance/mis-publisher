import reducer, { actions } from '../index';
import defaultState from '../state';

describe('app Reducer', () => {
  it('Should Show Settings Dialog', () => {
    expect(reducer(defaultState, actions.toggleSettingsDialog())).toEqual({
      ...defaultState,
      toggleSettingsDialogOpen: true,
    });
  });
});
