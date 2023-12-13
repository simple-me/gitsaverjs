
import git from "isomorphic-git";
import fs from "fs";
import path = require("path");
import http from "isomorphic-git/http/node";
import { RepoInfo } from "../interfaces/interfaces";
import { zipMe } from "../utils/utils";

export function cloneIndividualRepo(repoInfo: RepoInfo) {
    const fileName = repoInfo.url.split('/').pop();
    const cloneDestination = `backups/${fileName}`;
    if (fileName === undefined) {
        throw new Error("error!")
    }

    const dir = path.join(process.cwd(), fileName);

    const repo = git.clone({
        fs,
        http,
        //dir: 'tests/',
        dir: cloneDestination,
        url: repoInfo.url,
        onAuth: url => {
            return {
                username: process.env.GIT_USERNAME,
                password: process.env.GIT_PASSWORD
            }
        }
    })
    .then((res) => {
        console.log(`repo cloned: ${fileName}`);
        //return fileName;
        return cloneDestination;
    })
    .catch((e) => {
      console.log(e);
    })

    return repo;
}

export function compressRepo(repoName: string, outFile: string) {
    //zipMe(repoName, "out.zip")
    zipMe(repoName, outFile);
}