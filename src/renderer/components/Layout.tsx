import * as React from 'react';
import styled from 'styled-components';

import TitleBar from './TitleBar';
import ProgressBar from '../containers/ProgressBar';
import SettingsDialog from '../containers/SettingsDialog';
import { bg1 } from '../styles/colors';
import ContentBox from './ContentBox';
import StatusBar from './StatusBar';
import ActionBar from './ActionBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

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
        {/* BOTTOM */}
        <Top>
          {/* LEFT SIDE */}
          <LeftSide>
            <ContentBox height={'auto'} title={'Search'}>
              Search for mod
            </ContentBox>
            <ContentBox title={'Published'}>Mod Name</ContentBox>
            <Box
              display={'flex'}
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'space-evenly'}
              paddingTop={'5px'}
              width={'100%'}
            >
              <Button variant={'contained'} href={'#'}>
                View on Web
              </Button>
              <Button variant={'contained'} href={'#'}>
                Delete
              </Button>
            </Box>
          </LeftSide>

          {/* RIGHT SIDE */}
          <RightSide>
            <Box flexGrow={1}>
              <ContentBox title={'Item Metadata'}>Meta Data</ContentBox>
            </Box>

            <Box display={'flex'} flexDirection={'row'} flexGrow={1}>
              <Box flexGrow={2}>
                <ContentBox title={'Description'}>Description</ContentBox>
              </Box>
              <Box  maxWidth={'320px'} maxHeight={'370px'} flexGrow={1}>
                <ContentBox title={'Tags'}>Tags</ContentBox>
              </Box>
            </Box>

            <Box display={'flex'} flexDirection={'row'} flexGrow={1}>

              <Box flexGrow={2}>
                <ContentBox title={'Change Notes'}>Description</ContentBox>
              </Box>

              <Box maxWidth={'320px'} maxHeight={'320px'} flexGrow={1} display={'flex'} flexDirection={'column'}>
                <ContentBox title={'Image'}>
                  <img style={{ maxWidth: 80}} src="https://placehold.it/320x180" alt="" />
                </ContentBox>
                <Button href={'#'}>Browse</Button>
              </Box>
            </Box>
          </RightSide>
        </Top>

        {/* BOTTOM */}
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
