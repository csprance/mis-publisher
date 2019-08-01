import * as fs from 'fs';

import {
  modStateToVDFFile,
  modStateToVDFObject,
  VDFObjectToString,
} from '../index';
import { defaultMod } from '../../../redux/mods/state';

test('State To VDF Object', () => {
  expect(modStateToVDFObject(defaultMod)).toStrictEqual({
    appid: 299740,
    contentfolder: `D:\\mod\\lunchbox\\paks`,
    visibility: 0,
    title: 'Default Mod',
    description: 'This is the default read only example mod.',
    changenote: 'These are the change notes for the default mod',
    publishedfileid: 0,
  });
});

test('VDF Object To VDF String', () => {
  expect(VDFObjectToString(defaultMod)).toBe(String.raw`"workshopitem"
{
    "appid" "299740"
    "contentfolder" "D:\\mod\\lunchbox\\paks"
    "visibility"  "0"
    "title" "Default Mod"
    "description" "This is the default read only example mod."
    "changenote"  "These are the change notes for the default mod"
    "publishedfileid" "0"
}
`);
});

test('Mod To VDF File', async () => {
  const path = 'mod-test.vdf';
  // Write the file
  await modStateToVDFFile(defaultMod, path);
  // Read the file
  const vdfFileContents = await fs.promises.readFile(path, 'utf8');
  expect(vdfFileContents).toBe(VDFObjectToString(defaultMod));
});
