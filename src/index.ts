import { Command, flags } from '@oclif/command'
import { createEnv } from 'yeoman-environment'
import { SAMPLE_APPS_GIT_REPO_URL } from './constants'

/**
 * CreateCommerceApp command allows creating a sample commerce app with name of
 * the app being the argument passed to the command. It also makes available
 * a help menu which lists the way to use the command and the options available
 * with it.
 * 
 */
class CreateCommerceApp extends Command {
  static description = 'Creates a new Headless Commerce Application'

  static flags = {
    help: flags.help({
      char: 'h'
    }),
  }

  static args = [
    {
      name: 'appName',
      required: true,
    }
  ]

  /**
   * Parses the arguments passed to the command and creates an app in the 
   * current directory with the argument passed for appName.
   * 
   */
  run() {
    const { args } = this.parse(CreateCommerceApp)
    const appName = args.appName;
    const env = createEnv();

    env.register(
      require.resolve('./generators/app'),
      'CreateGenerator'
    )
  
    // converting the callback into a promise
    return new Promise((resolve, reject) => {
      env.run(
        'CreateGenerator',
        {
          name: appName,
          gitRepoUrl: SAMPLE_APPS_GIT_REPO_URL,
          force: true
        },
        (err: null | Error) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      )
    })
  }
}

export = CreateCommerceApp
