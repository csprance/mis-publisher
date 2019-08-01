import * as React from 'react';
import styled from 'styled-components';
import ContentBox from "./ContentBox";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

interface Props {}
interface State {}
const ModImage: React.FunctionComponent<Props> = ({}) => {
  return (
    <Box
      maxWidth={'320px'}
      maxHeight={'320px'}
      flexGrow={1}
      display={'flex'}
      flexDirection={'column'}
    >
      <ContentBox title={'Image'}>
        <img
          style={{ maxWidth: 80 }}
          src="https://placehold.it/320x180"
          alt=""
        />
      </ContentBox>
      <Button href={'#'}>Browse</Button>
    </Box>
  );
}

export default ModImage;