import { expect, test } from '@oclif/test'

import cmd = require('../src')

describe('Create commerce app cli', () => {
  const argName = "appName";
  
  test
    .stdout()
    .do(() => cmd.run([]))
    .catch(ctx => {
      expect(ctx.message).to.contain(`Missing 1 required arg:\n${argName}\nSee more help with --help`)
    })
    .it('throws an error without an appname')

  test
    .stdout()
    .do(() => cmd.run(['-h']))
    .exit(0)
    .it('displays help')
})
