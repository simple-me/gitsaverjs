import fs from "fs";
import archiver from "archiver";
import crypto from 'crypto';
import {S3Client, PutObjectCommand} from "@aws-sdk/client-s3";

export async function zipMe(filename: any, outName: string, bucketName: string) {

  const output = fs.createWriteStream(outName);
  const archive = archiver.create('zip', {
    zlib: { level: 9 } // Sets the compression level.
  });

  archive.on('error', function(err) {
    console.log(err);
    return "error zipping file!"
  });

  const fullPath = filename;
  const dirName = fullPath.split('/')[0];
  console.log(`dirname: ${dirName}`);

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
    if (bucketName) {
      const s3 = sendToS3(outName, bucketName);
    }else{
      console.log("Remote location not specified, just storing locally")
    }

  });

  return archive.finalize();
}


export function sendToS3(filename: string, destinationBucket: string) {
  const s3 = new S3Client({region: "us-east-1"});
  const fileStream = fs.readFileSync(filename);
  const uploadObject = new PutObjectCommand({
      Bucket: destinationBucket,
      Key:filename,
      Body: fileStream
  });

  const response = s3.send(uploadObject).then((res) => {
      console.log("file uploaded!");
      console.log(res)
  }).catch((err) => {
      console.log(err);
  })

  return response
}


export function randomString(): string {
  const randomString = crypto.randomBytes(4).toString('hex');
  return randomString;
}