
import git from "isomorphic-git";
import fs from "fs";
import path = require("path");
import http from "isomorphic-git/http/node";
import { Command } from "commander";

const program = new Command();

//console.log("hello world!");

//const dir = path.join(process.cwd(), 'test-clone')
//git.clone({ fs, http, dir, url: 'https://github.com/isomorphic-git/lightning-fs' }).then(console.log)

interface RepoInfo {
    url: string
    provider?: string
    protocol?: string
}

function cloneIndividualRepo(repoInfo: RepoInfo) {
    const dir = path.join(process.cwd(), 'test-clone')
    git.clone({ fs, http, dir, url: repoInfo.url }).then((res) => {
        console.log(res);
    })
}
/*
cloneIndividualRepo({
    "url": "https://github.com/isomorphic-git/lightning-fs"
}); */

program
  .name('string-util')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');

program.command('backup')
  .description('Split a string into substrings and display as an array')
  .argument('<string>', 'repo or repos to backup')
  .option('-p, --provider <str>', 'repo provider', "infer")
  //.option('-s, --separator <char>', 'separator character', ',')
  .action((str, options) => {
    //console.log(program.opts().url);
    console.log(str, options.provider);
  })
  /* .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));
  }); */

program.parse();