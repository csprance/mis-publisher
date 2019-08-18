import { execFile, spawn } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

import { Mod } from '../../redux/mods/types';
import * as util from 'util';
import { chunksToLinesAsync, chomp, onExit } from '../stringio';
import { Readable } from 'stream';

interface VDFObject extends Omit<Mod, 'id' | 'selected'> {}

const steamcmd = path.join(path.dirname(__filename), 'bin', 'steamcmd.exe');
const execFilePromise = util.promisify(execFile);

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
    "previewfile" "${vdf.previewfile.replace(/\\/g, '\\\\')}"
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

async function echoReadable(readable: Readable) {
  for await (const line of chunksToLinesAsync(readable)) {
    // (C)
    console.log('LINE: ' + chomp(line));
  }
}

async function mapReadable(
  readable: Readable,
  mapFunc: (input: string) => void,
) {
  for await (const line of chunksToLinesAsync(readable)) {
    // (C)
    mapFunc(chomp(line));
  }
}

export const runSteamCmdWithParams = async (
  steamID: string,
  steamPassword: string,
  vdfPath: string,
) => {
  const output: string[] = [];
  const results = spawn(
    steamcmd,
    [
      `+login ${steamID} ${steamPassword}`,
      `+workshop_build_item ${vdfPath}`,
      '+quit',
    ],
    { stdio: ['ignore', 'pipe', process.stderr] },
  );

  if (results.stdout) {
    await mapReadable(results.stdout, (input: string) => {
      output.push(input);
    });
  }
  console.log(output);
  await onExit(results);
};
