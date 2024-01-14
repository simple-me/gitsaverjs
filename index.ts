
import { Command } from "commander";
import { cloneRepo } from "./commands/backupRepo";
import { zipMe, randomString, convertFileToString } from "./utils/utils";

const program = new Command();

program
  .name('string-util')
  .description('CLI to backup git repos')
  .version('0.1.0');

program.command('backup-repo')
  .description('Split a string into substrings and display as an array')
  .argument('[string]', 'repo or repos to backup', undefined)
  .option('-fr, --file-repo <str>', 'repos from file', undefined)
  .option('-o, --output-file <str>', undefined)
  .option('-b, --bucket-name <str>', 'bucket name', undefined)
  .action(
     async (str, options) => {

        if (options.fileRepo !== undefined) {
          str = await convertFileToString(options.fileRepo);
        }

        const initialDir = `backups${randomString()}`
        const repo = cloneRepo({
          "url": str,
          "initialDir": initialDir
        })
        .then((r) =>{
          const compressedRepo = zipMe(initialDir, options.outputFile, options.bucketName);
        });
      
    }
    
  )

program.parse();