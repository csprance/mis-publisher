import * as React from 'react';
import styled from 'styled-components';
import { bg3, darkDarkBlack } from '../styles/colors';

const Wrapper = styled.div`
  display: flex;
  padding: 5px;
  flex-direction: column;
  flex-grow: 1;
`;
const Top = styled.div`
  background: ${bg3};
  padding: 5px;
`;
const Bottom = styled.div`
  padding: 5px;
  background: ${darkDarkBlack};
  height: 100%;
`;

interface Props {
  title: string;
}
interface State {}
const ContentBox: React.FunctionComponent<Props> = ({ title, children }) => {
  return (
    <Wrapper>
      <Top>{title}</Top>
      <Bottom>{children}</Bottom>
    </Wrapper>
  );
};

export default ContentBox;
