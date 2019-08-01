import Box from '@material-ui/core/Box';
import * as React from 'react';
import 'draft-js/dist/Draft.css';
import BBCodeEditor from './BBCodeEditor';

import ContentBox from './ContentBox';

interface Props {}
const ModChangeNotes: React.FunctionComponent<Props> = ({}) => {
  return (
    <Box flexGrow={2}>
      <ContentBox title={'Change Notes'}>
        <BBCodeEditor />
      </ContentBox>
    </Box>
  );
};

export default ModChangeNotes;
