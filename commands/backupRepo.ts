
import git from "isomorphic-git";
import fs, { createReadStream } from "fs";
import path = require("path");
import http from "isomorphic-git/http/node";
import { RepoInfo } from "../interfaces/interfaces";

async function cloneAction(cloneDestination: string, url: string) {
    const repo = git.clone({
        fs,
        http,
        dir: cloneDestination,
        url: url,
        onAuth: url => {
            return {
                username: process.env.GIT_USERNAME,
                password: process.env.GIT_PASSWORD
            }
        }
    })
    return repo;
}


export async function cloneIndividualRepo(repoInfo: RepoInfo) {
    const repos = repoInfo.url.split(",");
    const initialDir = repoInfo.initialDir;
    const promises = [];
    
    for (let i in repos) {
        console.log(`repo: ${repos[i]}`);
        const fileName = repos[i].split('/').pop();
        const cloneDestination = `${initialDir}/${fileName}`;
        console.log(`destination: ${cloneDestination}`);
        if (fileName === undefined) {
            throw new Error("error!")
        }

        const dir = path.join(process.cwd(), fileName);
        promises.push(cloneAction(cloneDestination, repos[i]));

    }

    const results = await Promise.all(promises);
    return results;
}