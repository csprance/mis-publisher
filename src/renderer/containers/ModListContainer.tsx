import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContentBox from '../components/ContentBox';
import { actions as appActions, selectors as appSelectors } from '../redux/app';
import {
  actions as modActions,
  selectors as modsSelectors,
} from '../redux/mods';

interface Props {}
const ModListContainer: React.FunctionComponent<Props> = () => {
  // Redux
  const dispatch = useDispatch();
  const searchTerm = useSelector(appSelectors.searchTermSelector);
  const mods = useSelector(modsSelectors.modsSelector);
  // Others
  const handleSearchQueryChange = (e: React.BaseSyntheticEvent) =>
    dispatch(appActions.updateSearchTerm(e.target.value));
  const handleListItemSelected = (id: number) =>
    dispatch(modActions.selectMod(id));

  return (
    <>
      <ContentBox height={'auto'} title={'Search'}>
        <TextField
          value={searchTerm}
          onChange={handleSearchQueryChange}
          placeholder={'Search...'}
          fullWidth
        />
      </ContentBox>

      <ContentBox padding={'0'} title={'Published'}>
        <List component={'nav'}>
          {mods.map(mod => (
            <ListItem
              component={'a'}
              onClick={() => handleListItemSelected(mod.id)}
              selected={mod.selected}
              key={mod.id}
              button
            >
              <ListItemText>{mod.title}</ListItemText>
            </ListItem>
          ))}
        </List>
      </ContentBox>

      <Box
        display={'flex'}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-evenly'}
        paddingTop={'5px'}
        width={'100%'}
      >
        <Button variant={'contained'} href={'#'}>
          New Mod
        </Button>
        <Button variant={'contained'} href={'#'}>
          Delete
        </Button>
      </Box>
    </>
  );
};

export default ModListContainer;
