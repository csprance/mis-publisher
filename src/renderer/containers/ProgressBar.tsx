import LinearProgress from '@material-ui/core/LinearProgress';
import withStyles from '@material-ui/styles/withStyles';
import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { RootState } from '../redux/redux-types';
import { bg2, bg4 } from '../styles/colors';

// Wrap the material ui progress bar with our custom styles
const MyLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: bg4,
  },
  barColorPrimary: {
    backgroundColor: bg2,
  },
})(LinearProgress);

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;

const ProgressBar: React.FunctionComponent<{
  sending: boolean;
}> = ({ sending }) => (
  <Wrapper>{sending ? <MyLinearProgress /> : <></>}</Wrapper>
);

// TODO: Connect the mod publishing process to this
export default connect((state: RootState) => ({
  sending: false,
}))(ProgressBar);
