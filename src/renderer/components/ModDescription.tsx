import Box from '@material-ui/core/Box';
import * as React from 'react';

import BBCodeEditor from './BBCodeEditor';

import ContentBox from './ContentBox';

interface Props {}
const ModDescription: React.FunctionComponent<Props> = ({}) => {
  return (
    <Box flexGrow={2}>
      <ContentBox title={'Description'}>
        <BBCodeEditor />
      </ContentBox>
    </Box>
  );
};

export default ModDescription;
