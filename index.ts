
import { Command } from "commander";
import { cloneIndividualRepo } from "./commands/backupRepo";
import { compressRepo } from "./commands/backupRepo";

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
  .action(
      async (str, options) => {
        if (options.provider === "infer") {
          console.log("provider not specified, assuming...")
        }
        const repo = await cloneIndividualRepo({
          "url": str
        });
        console.log(repo);

        if (repo === undefined) {
          throw Error("repo not cloned!")
        }

        console.log(repo);
        const compressedRepo = compressRepo(repo, options.outputFile)
    }
    
  )

program.parse();