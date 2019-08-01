import { ModsState } from './types';
import * as path from 'path';

export const defaultMod = {
  // VDF Data
  appid: 299740,
  contentfolder: path.normalize(`D:\\mod\\lunchbox\\paks`),
  visibility: 0,
  title: 'Default Mod',
  description: 'This is the default read only example mod.',
  changenote: 'These are the change notes for the default mod',
  publishedfileid: 0,

  // App State
  id: -1,
  selected: false,
};

export const defaultModsState: ModsState = [defaultMod, {...defaultMod, id: 2, title: 'Secondary Mod'}];

export default defaultModsState;
