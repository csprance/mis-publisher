import { Mod, ModsState } from './types';
import * as path from 'path';

export const defaultMod: Mod = {
  // VDF Data
  appid: 299740,
  contentfolder: path.normalize(`D:\\mod\\lunchbox\\paks`),
  previewfile: path.normalize(`D:\\mod\\lunchbox\\images\\lunchbox_512.png`),
  visibility: 0,
  title: 'Default Mod',
  description: 'This is the default read only example mod.',
  changenote: 'These are the change notes for the default mod',
  publishedfileid: 0,

  // App State
  id: -1,
  selected: false,
};

export const defaultModsState: ModsState = [
  defaultMod,
  { ...defaultMod, id: 2, title: 'Secondary Mod' },
];

export default defaultModsState;
