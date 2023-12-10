import fs from "fs";
import archiver from "archiver";

export function zipMe(filename: string, outName: string) {
  // create a file to stream archive data to.
  const output = fs.createWriteStream(__dirname + `/${outName}.zip`);
  const archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level.
  });

  archive.on('error', function(err) {
    console.log(err);
  });

  // listen for all archive data to be written
  // 'close' event is fired only when a file descriptor is involved
  output.on('close', function() {
    console.log(archive.pointer() + ' total bytes');
    console.log('archiver has been finalized and the output file descriptor has closed.');
  });

  // append a file from stream
  const file1 = __dirname + filename;
  archive.append(fs.createReadStream(file1), { name: filename });

  archive.pipe(output);

  archive.finalize();
}