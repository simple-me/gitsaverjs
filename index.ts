
import { Command } from "commander";
import { cloneRepo } from "./commands/backupRepo";
import { zipMe, randomString } from "./utils/utils";

const program = new Command();

program
  .name('string-util')
  .description('CLI to backup git repos')
  .version('0.1.0');

program.command('backup-repo')
  .description('Split a string into substrings and display as an array')
  .argument('<string>', 'repo or repos to backup')
  .option('-p, --provider <str>', 'repo provider', "infer")
  .option('-o, --output-file <str>', 'filename')
  .option('-b, --bucket-name <str>', 'bucket name', '')
  .action(
     async (str, options) => {
        if (options.provider === "infer") {
          console.log("provider not specified, assuming...")
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