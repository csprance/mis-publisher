import * as fs from 'fs';
import { Mod } from '../../redux/mods/types';

interface VDFObject extends Omit<Mod, 'id' | 'selected'> {}

/*
Convert a Mod into a VDF Object
 */
export const modStateToVDFObject = (mod: Mod): VDFObject => {
  const { id, selected, ...rest } = mod;
  return rest;
};

/*
Convert a VDF Object into a VDF String
 */
export const VDFObjectToString = (vdf: VDFObject) => `"workshopitem"
{
    "appid" "${vdf.appid}"
    "contentfolder" "${vdf.contentfolder.replace(/\\/g, '\\\\')}"
    "visibility"  "${vdf.visibility}"
    "title" "${vdf.title}"
    "description" "${vdf.description}"
    "changenote"  "${vdf.changenote}"
    "publishedfileid" "${vdf.publishedfileid}"
}
`;

/*
Convert a Mod into a .vdf file
 */
export const modStateToVDFFile = async (mod: Mod, path: string) => {
  const vdfObj = modStateToVDFObject(mod);
  return fs.promises.writeFile(path, VDFObjectToString(vdfObj), 'utf8');
};

/*
Publish the mod using steamcmd and return the new Mod parsed from the vdf file
 */
export const publishMod = async (mod: Mod, vdfPath: string): Promise<Mod> => {
  return mod;
};
