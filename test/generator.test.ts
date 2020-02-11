import * as path from 'path'
import * as helpers from 'yeoman-test';
import * as assert from 'yeoman-assert';

describe('CreateGenerator', () => {
  const appName = "test-app";

  before(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ name: appName });
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
