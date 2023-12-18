import fs from "fs";
import archiver from "archiver";
import crypto from 'crypto'

export function zipMe(filename: string, outName: string) {
  const output = fs.createWriteStream(outName);
  const archive = archiver.create('zip', {
    zlib: { level: 9 } // Sets the compression level.
  });

  archive.on('error', function(err) {
    //console.log(err.message);
    //console.log("error");
    return "error zipping file!"
  });

  const fullPath = filename;
  const dirName = fullPath.split('/')[0];

  if (dirName === undefined) {
    throw Error("incorrect type of filename")
  }

  console.log(dirName);

  archive.directory(dirName, dirName);
  archive.pipe(output);

  output.on('close', function() {
    console.log(archive.pointer() + ' total bytes');
    console.log('archiver has been finalized and the output file descriptor has closed.');
    fs.rm(dirName, { recursive: true }, () => {console.log('cleanup done!')});
  });

  archive.finalize();
}


export function randomString(): string {
  const randomString = crypto.randomBytes(4).toString('hex');
  return randomString;
}