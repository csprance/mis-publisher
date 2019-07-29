import * as React from 'react';
import { connect } from 'react-redux';

import { Dispatch } from '../redux/redux-types';
import TitleBarButton from '../components/TitleBarButton';
import { toggleSettingsDialog } from '../redux/app/actions';

const TitleBarMenuButton: React.FunctionComponent<{
  openSettings: () => void;
}> = ({ openSettings }) => (
  <TitleBarButton menuClick={openSettings} type={'menu'} />
);

export default connect(undefined, (dispatch: Dispatch) => ({
  openSettings: () => dispatch(toggleSettingsDialog()),
}))(TitleBarMenuButton);
