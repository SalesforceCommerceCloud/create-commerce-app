# create-commerce-app
A Salesforce Commerce application generator that allows you to generate a sample commerce storefront application.

## Prerequisites
Download and install Node.js and npm [here](https://nodejs.org/en/download/).
​
> **Note:** Only Node.js 12 LTS is supported. Any other versions can cause unexpected results. To use a different version of Node.js for other projects, you can manage multiple versions of Node.js with [nvm](https://github.com/nvm-sh/nvm).

## Quick Start

To get up and running execute the following command in a shell/terminal:

```
npx create-commerce-app your-app-name
```

This will run a npx installation of create-commerce-app and create a sample Salesforce Commerce Storefront app for you. It creates the app as a sub-directory of the current working directory with the name of the directory being the app name provided while running the above command. More information about the sample Salesforce Commerce Storefront app and how to use it can be found [here](https://github.com/SalesforceCommerceCloud/sfcc-sample-apps)

## Setup

Execute the following commands to install dependencies and build create-commerce-app locally.

```bash
npm install
```

## Testing

To run tests, execute
```bash
npm run test
```
To print the detailed test results and errors on the console, execute
```bash
npm run test:debug
```

## Issues

First, check the [open issues](https://github.com/SalesforceCommerceCloud/create-commerce-app/issues) and [Commerce Cloud Developer Center](https://developer.commercecloud.com/) for any open issues related to the issue that you are experiencing. If not already raised please file a new issue [here](https://github.com/SalesforceCommerceCloud/create-commerce-app/issues/new) with all the necessary details. If you require an urgent resolution to your issue please ask your AM/CSM to file a support ticket with Salesforce Commerce.

## Contributing

If you would like to contribute please take a look at our [contributors' guide](./Contributing.md).

## License Information
This package is licensed under BSD-3-Clause license. See the [license](./LICENSE.txt) for details.
