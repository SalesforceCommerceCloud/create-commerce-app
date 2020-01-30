import { Command, flags } from '@oclif/command'

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

  async run() {
    const { args } = this.parse(CreateCommerceApp)
    const appName = args.appName;
    
    console.log(`This will soon create a sample commerce app named ${appName}`);
  }
}

export = CreateCommerceApp
