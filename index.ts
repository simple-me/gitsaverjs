
import { Command } from "commander";
import { cloneIndividualRepo } from "./commands/clone";

const program = new Command();

program
  .name('string-util')
  .description('CLI to backup git repos')
  .version('0.1.0');

program.command('backup-repo')
  .description('Split a string into substrings and display as an array')
  .argument('<string>', 'repo or repos to backup')
  .option('-p, --provider <str>', 'repo provider', "infer")
  .action(
      (str, options) => {
        if (options.provider === "infer") {
          console.log("provider not specified, assuming...")
        }
        cloneIndividualRepo({
          "url": str
        });
    }
  )

program.parse();