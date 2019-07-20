import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, RootState } from '../redux/redux-types';

interface Props {}

const MainContainer: React.FunctionComponent<Props> = ({}) => {
  return <div>Main Container</div>;
};

const mapStateToProps = (_state: RootState) => ({});
const mapDispatchToProps = (_dispatch: Dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
