"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isomorphic_git_1 = __importDefault(require("isomorphic-git"));
const fs_1 = __importDefault(require("fs"));
const path = require("path");
const node_1 = __importDefault(require("isomorphic-git/http/node"));
console.log("hello world!");
const dir = path.join(process.cwd(), 'test-clone');
isomorphic_git_1.default.clone({ fs: fs_1.default, http: node_1.default, dir, url: 'https://github.com/isomorphic-git/lightning-fs' }).then(console.log);
