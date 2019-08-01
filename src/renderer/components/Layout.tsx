import * as React from 'react';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';

import ActionBar from './ActionBar';
import ModChangeNotes from './ModChangeNotes';
import ModDescription from './ModDescription';
import ModImage from './ModImage';
import ModMetaData from './ModMetaData';
import ModTags from './ModTags';
import ModListContainer from '../containers/ModListContainer';
import ProgressBar from '../containers/ProgressBar';
import SettingsDialog from '../containers/SettingsDialog';
import StatusBar from './StatusBar';
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
  flex-direction: column;
`;
const Top = styled.div`
  display: flex;
  flex-grow: 6;
`;
const LeftSide = styled.div`
  height: 100%;
  display: flex;
  flex-grow: 1;
  max-width: 300px;
  min-width: 155px;
  flex-direction: column;
`;
const RightSide = styled.div`
  height: 100%;
  flex-grow: 6;
  display: flex;
  flex-direction: column;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-height: 100px;
`;

interface Props {}
const Layout: React.FunctionComponent<Props> = () => {
  return (
    <Wrapper>
      <TitleBar />
      <Content>
        <Top>
          <LeftSide>
            <ModListContainer />
          </LeftSide>

          <RightSide>
            <ModMetaData />

            <Box display={'flex'} flexDirection={'row'} flexGrow={1}>
              <ModDescription />
              <ModTags />
            </Box>

            <Box display={'flex'} flexDirection={'row'} flexGrow={1}>
              <ModChangeNotes />
              <ModImage />
            </Box>
          </RightSide>
        </Top>

        <Bottom>
          <ActionBar />
          <StatusBar />
        </Bottom>
      </Content>
      <SettingsDialog />
      <ProgressBar />
    </Wrapper>
  );
};

export default Layout;
