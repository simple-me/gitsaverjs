
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
    
    //const dir = path.join(process.cwd(), 'test-clone')
    //const dir = path.join(process.cwd(), repoInfo.url.split('/').pop());
    git.clone({ fs, http, dir, url: repoInfo.url })
    .then((res) => {
        console.log(`repo cloned: ${fileName}`);
        return dir;
    })
    .catch((e) => {
      console.log(e);
    })
}