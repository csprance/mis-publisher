import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from '../redux/redux-types';
import TitleBarButton from '../components/TitleBarButton';
import { toggleSettingsDialog } from '../redux/app/actions';

interface Props {
  openSettings: () => void;
}
const TitleBarMenuButton: React.FunctionComponent<Props> = ({
  openSettings,
}) => {
  return <TitleBarButton menuClick={openSettings} type={'menu'} />;
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  openSettings: () => dispatch(toggleSettingsDialog()),
});
export default connect(undefined, mapDispatchToProps)(TitleBarMenuButton);
