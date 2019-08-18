import * as React from 'react';
import styled from 'styled-components';
import ContentBox from './ContentBox';
import Box from '@material-ui/core/Box';
import TagTransferList from './TagTransferList';


interface Props {}
interface State {}
const ModTags: React.FunctionComponent<Props> = ({}) => {
  return (
    <Box maxWidth={'320px'} maxHeight={'370px'} flexGrow={1}>
      <ContentBox title={'Tags'}>
        Tag List
      </ContentBox>
    </Box>
  );
};

export default ModTags;
