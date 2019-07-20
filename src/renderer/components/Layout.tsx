import * as React from 'react';
import styled from 'styled-components';

import SettingsDialog from '../containers/Dialogs/SettingsDialog';
import ProgressBar from '../containers/ProgressBar';
import TitleBar from './TitleBar';
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
`;
const ContentColumn = styled(Content)`
  flex-direction: column;
`;

interface Props {}
const Layout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <Wrapper>
      <TitleBar />
      <Content>
        <ContentColumn>
          <Content>{children}</Content>
        </ContentColumn>
      </Content>
      <SettingsDialog />
      <ProgressBar />
    </Wrapper>
  );
};

export default Layout;
