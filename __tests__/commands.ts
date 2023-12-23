// import { cloneIndividualRepo } from "../commands/backupRepo"
// import { zipMe } from "../utils/utils";
// import fs from "fs";



// describe("testing", () => {
//     test("testing clone repo", async () => {
//         const res = await cloneIndividualRepo({
//             "url": "https://github.com/Call-for-Code/Project-Sample.git"
//             }
//         );

//         if (res === undefined) {
//             throw Error("Error cloning repo");
//         }

//         const repoName = res.split("/").pop();
//         const dirName = res.split("/")[0];
//         // cleanup
//         fs.rm(dirName,{ recursive: true }, async () => {});

//         expect(repoName).toBe("Project-Sample.git");
//     })

//     test("testing zip function", async () => {
//         const res = await cloneIndividualRepo({
//             "url": "https://github.com/Call-for-Code/Project-Sample.git"
//             }
//         );

//         if (res === undefined) {
//             throw Error("Error cloning repo");
//         }
//         // fix this!
//         //const compress = compressRepo(res, "out.zip");


//     })
// })