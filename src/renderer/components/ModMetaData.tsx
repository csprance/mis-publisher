import Box from '@material-ui/core/Box';
import * as React from 'react';

import ContentBox from './ContentBox';

interface Props {}
const ModMetaData: React.FunctionComponent<Props> = ({}) => {
  return (
    <Box flexGrow={1}>
      <ContentBox title={'Item Metadata'}>Meta Data</ContentBox>
    </Box>
  );
};

export default ModMetaData;
