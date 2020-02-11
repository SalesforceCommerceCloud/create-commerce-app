import * as Generator from 'yeoman-generator'
import * as path from 'path'
import * as git from 'simple-git/promise'
import * as fs from 'fs-extra'

import { MESSAGE_PROJECT_CREATED, SAMPLE_APPS_GIT_REPO_URL } from '../../src/constants'

class CreateGenerator extends Generator {
    pjson: any
    destPath: string
    gitRepo: string

    constructor(args: any, opts: any) {
        super(args, opts);
        if (!opts.name) {
            this.env.error(new Error("missing required option: name"));
        }
        if (!opts.gitRepoUrl) {
            this.env.error(new Error("missing required option: gitRepo"));
        }

        this.gitRepo = opts.gitRepoUrl;
        this.pjson = { name: opts.name };
        this.destPath = path.resolve(opts.name);
    }

    async writing() {
        // Clone the sample apps repo
        await git().clone(this.gitRepo, this.destPath)
            .catch(console.log);

        // Remove the .git directory so that the user can start their git 
        // history from scratch
        process.chdir(this.destPath);
        const gitPath = path.join(this.destPath, '.git');
        fs.removeSync(gitPath);

        // Add the user provided details to the app's package.json
        const pjsonPath = path.join(this.destPath, './package.json');
        this.fs.extendJSON(pjsonPath, this.pjson);
    }

    end() {
        console.log(
            MESSAGE_PROJECT_CREATED,
            this.pjson.name,
            this.destPath
        )
    }
}

export = CreateGenerator