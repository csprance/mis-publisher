import * as React from 'react';
import styled from 'styled-components';
import { bg3, darkDarkBlack } from '../styles/colors';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 5px;
  flex-direction: column;
  flex-grow: 1;
  height: ${(props: { height: string }) => props.height};
`;
const Top = styled.div`
  background: ${bg3};
  padding: 5px;
`;
const Bottom = styled.div`
  padding: ${(props: {padding: string}) => props.padding};
  background: ${darkDarkBlack};
  height: 100%;
  position: relative;
  overflow: hidden;
`;

interface Props {
  title: string;
  height?: string;
  padding?: string;
}
interface State {}
const ContentBox: React.FunctionComponent<Props> = ({
  title,
  children,
  height = '100%',
  padding = '5px'
}) => {
  return (
    <Wrapper height={height}>
      <Top>{title}</Top>
      <Bottom padding={padding}>{children}</Bottom>
    </Wrapper>
  );
};

export default ContentBox;
