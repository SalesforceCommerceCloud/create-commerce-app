import * as path from 'path'
import * as helpers from 'yeoman-test'
import * as assert from 'yeoman-assert'
import * as tmp from 'tmp'
import * as git from 'simple-git/promise'
import * as fs from 'fs-extra'

describe('CreateGenerator', () => {
  const appName = "test-app";

  before(async () => {
    const tmpGitRepo = tmp.dirSync().name;
    fs.writeFileSync(`${tmpGitRepo}/package.json`, '{"name": "test"}');

    await git(tmpGitRepo).init()
      .catch(console.error.bind(console));

    await git(tmpGitRepo).addConfig('user.name', 'Some one')
      .catch(console.error.bind(console));

    await git(tmpGitRepo).addConfig('user.email', 'some@one.com')
      .catch(console.error.bind(console));

    await git(tmpGitRepo).add('./*')
      .catch(console.error.bind(console));

    await git(tmpGitRepo).commit('First commit')
      .catch(console.error.bind(console));

    return helpers.run(path.join(__dirname, '../src/generators/app'))
      .withOptions({ name: appName, gitRepoUrl: tmpGitRepo });
  });

  it('creates an app with the provided name', () => {
    assert.file(`../${appName}`);
  })

  it('changes the package name in package.json to the name of the app', () => {
    assert.fileContent('package.json', `\"name\": \"${appName}\"`);
  })

  it('deletes the .git folder of the app', () => {
    assert.noFile('.git');
  })
})
