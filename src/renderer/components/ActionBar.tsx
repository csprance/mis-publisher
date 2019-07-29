import * as React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import ExternalLink from './ExternalLink';

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  padding-right: 50px;
`;
const Spacer = styled.div`
  width: 30px;
`;
interface Props {}
interface State {}
const ActionBar: React.FunctionComponent<Props> = ({}) => {
  return (
    <Wrapper>
      Do you agree with the &nbsp;
      <ExternalLink href="http://steamcommunity.com/sharedfiles/workshoplegalagreement">
        SteamWorks License?
      </ExternalLink>
      <Spacer />
      <Checkbox />
      <Spacer />
      <Button style={{ width: 150 }} variant={'contained'} href={'#'}>
        Update
      </Button>
    </Wrapper>
  );
};

export default ActionBar;
