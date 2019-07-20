import * as React from 'react';
import styled from 'styled-components';

import TitleBar from './TitleBar';
import ProgressBar from '../containers/ProgressBar';
import SettingsDialog from '../containers/SettingsDialog';
import { bg1 } from '../styles/colors';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
`;
const Content = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
  width: 100%;
  background: ${bg1};
  //overflow: scroll;
`;

interface Props {}
const Layout: React.FunctionComponent<Props> = () => {
  return (
    <Wrapper>
      <TitleBar />
      <Content>
        Content Here
      </Content>
      <SettingsDialog />
      <ProgressBar />
    </Wrapper>
  );
};

export default Layout;
