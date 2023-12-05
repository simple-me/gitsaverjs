
import git from "isomorphic-git";
import fs from "fs";
import path = require("path");
import http from "isomorphic-git/http/node";
import { RepoInfo } from "../interfaces/interfaces";

export function cloneIndividualRepo(repoInfo: RepoInfo) {
    const fileName = repoInfo.url.split('/').pop();
    if (fileName === undefined) {
        throw new Error("error!")
    }

    const dir = path.join(process.cwd(), fileName);
    console.log(dir);

    git.clone({
        fs,
        http,
        dir,
        url: repoInfo.url,
        onAuth: url => {
            return {
                username: process.env.GITHUB_USERNAME,
                password: process.env.GITHUB_PAT
            }
        }
    })
    .then((res) => {
        console.log(`repo cloned: ${fileName}`);
        return dir;
    })
    .catch((e) => {
      console.log(e);
    })
}