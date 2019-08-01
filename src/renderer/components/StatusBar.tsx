import * as React from 'react';
import styled from 'styled-components';

import * as npmPackage from '../../../package.json'

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  align-items: center;
`;
const VersionWrapper = styled.div`
  flex-grow: 6;
  padding-left: 50px;
`;
const EntradaWrapper = styled.div`
  flex-grow: 1;
  max-width: 220px;
  text-align: right;
`;
const WorkshopWrapper = styled.div`
  flex-grow: 1;
  max-width: 220px;
  text-align: right;
`;
const Support = styled.div`
  flex-grow: 1;
  max-width: 220px;
  text-align: right;
`;
const Feedback = styled.div`
  flex-grow: 1;
  max-width: 220px;
  text-align: right;
  padding-right: 50px;
`;
interface Props {}
interface State {}
const StatusBar: React.FunctionComponent<Props> = ({}) => {
  return (
    <Wrapper>
      <VersionWrapper>Version {npmPackage.version}</VersionWrapper>
      <EntradaWrapper>Image</EntradaWrapper>
      <WorkshopWrapper>Workshop</WorkshopWrapper>
      <Support>Support</Support>
      <Feedback>Feedback</Feedback>
    </Wrapper>
  );
};

export default StatusBar;
