
import git from "isomorphic-git";
import fs from "fs";
import path = require("path");
import http from "isomorphic-git/http/node";
import { RepoInfo } from "../interfaces/interfaces";

export function cloneIndividualRepo(repoInfo: RepoInfo) {
    const dir = path.join(process.cwd(), 'test-clone')
    git.clone({ fs, http, dir, url: repoInfo.url })
    .then((res) => {
        console.log(res);
    })
    .catch((e) => {
      console.log(e);
    })
}