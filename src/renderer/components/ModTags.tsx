import * as React from 'react';
import styled from 'styled-components';
import ContentBox from "./ContentBox";
import Box from "@material-ui/core/Box";

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

interface Props {}
interface State {}
const ModTags: React.FunctionComponent<Props> = ({}) => {
  return (
    <Box maxWidth={'320px'} maxHeight={'370px'} flexGrow={1}>
      <ContentBox title={'Tags'}>Tags</ContentBox>
    </Box>
  );
}

export default ModTags;