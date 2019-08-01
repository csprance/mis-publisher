import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import * as React from 'react';

interface Props {
  // Primary Text
  primary: string;
  // Link to
  to: string;
  // What the current path is
  currentPath: string;
}
const ListItemLink: React.FunctionComponent<Props> = ({
  primary,
  to,
  currentPath,
}) => {
  return (
    <ListItem selected={currentPath === to} button component={'a'}>
      <ListItemText primary={primary} />
    </ListItem>
  );
};

export default ListItemLink;
