import { cloneRepo } from "../commands/backupRepo"
import { zipMe, randomString } from "../utils/utils";
import fs from "fs";


afterAll(() => {
    fs.rm("whatever/",{ recursive: true }, async () => {});
    fs.rm("out.zip",{ recursive: true }, async () => {});
})

describe("testing", () => {
    test("testing clone repo", async () => {
        //const initialDir = `backups${randomString()}`
        const initialDir = `whatever`
        const res = await cloneRepo({
            "initialDir": initialDir,
            "url": "https://github.com/Call-for-Code/Project-Sample.git"
            }
        );

        for (let i = 0; i < res.length; i++) {
            const f = fs.existsSync(res[i]);
            expect(f).toBe(true);
        }
    })

    test("testing zip function", async () => {

        console.log(fs.existsSync("whatever/"));
        await zipMe("whatever/", "out.zip");
        expect(fs.existsSync("out.zip")).toBe(true);

    })
})