# template-bp

A simple monorepo test task to demonstrate Full stack application with React and NestJS. We have simply 3 pages: /home, /create-new, and update user. When the server starts at home page all the users get listed. Clicking on user will take it to update page and Create New User button will take you to the create new user page.

## Things to note

We have majorly covered funtionality and given less preference to the design specifics due to time constraint and scope of the test task

## Available Scripts

In the project directory, you can run:

### `yarn`

> This is the same as running `yarn install` (which will execute `lerna bootstrap` under the hood).

Installs the dependencies for all packages.

**Note: you do not need to run `yarn install` in each package separately.**

### `yarn run clean`

Deletes all generated files such as the `node_modules` and `build` directories from **all** packages.

### `yarn lint`

Runs the `lint` script for **all** packages.

### `yarn start:client`

Starts the React App for the `web-client`.

## Important Files

You will most likely never need to change these files, but it's good to know what they are doing.

### `.gitignore`

All of the gitignored files are going to be listed in this file in the root directory. Packages are **not** going to have their own `.gitignore` files

### `lerna.json`

Configuration file for [Lerna](https://lerna.js.org). Most importantly, it specifies:

- Version of the project
- Paths of our packages
- Usage of [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces)
- Husky setup

### `package.json`

Standard `package.json` file for the repository (`inside root directory`). it specifies our workspaces for yarn, and lists all the dependencies and scripts we need for the mono repository itself.

**Note: package specific dependencies should not be specified here**

## Environment Setup

- Create a .env at the project root and copy all the contents of the .env.example for test purposes or specific ones if you have any
- Create a .env.development file at /packages/api-urls/.env.development and copy down all the contents of the /packages/api-urls/.env.example

## Prerequisites

- Versions of softwares as mentioned below in the Dev environment section
- A database server up at 27017 port locally installed. You can use the one provided by this repo if you have proper docker setup. That database server url is given in /packages/api-urls/.env.example

## Database connectivity

- Install a mongo db at your machine and add the connection string to /packages/api-urls/.env.development's MONGO_DB_URI
- If your docker works properly. You can use the database setup provided by this repo. That database server url is given in /packages/api-urls/.env.example, copy that to /packages/api-urls/.env.development's MONGO_DB_URI

## Setup

We assume that you have a database connected properly and running at the given connection string

- `yarn` - To install dependencies
- `yarn run start:api-urls` - This will start the backend at port 12345 by default
- `yarn start:client` - To start frontend app at localhost:3000

## Development Environment

- NodeJS: v18.16.0
- NPM: v9.5.1
- Yarn: v1.22.19
- OS: Mac 15+ / Ubuntu 20.04LTS+
- Docker version 24.0.1
- Docker Compose version v2.4.1

## Code formatting

[Optional] Use the following vscode settings to align styling with most of the eslint settings

```json
{
  "editor.tabSize": 2,
  "editor.rulers": [120],
  "editor.detectIndentation": false,
  "editor.defaultFormatter": "vscode.typescript-language-features",

  "typescript.format.insertSpaceAfterOpeningAndBeforeClosingEmptyBraces": true,
  "typescript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces": true,
  "typescript.format.insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces": true,
  "typescript.format.insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces": true,
  "typescript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis": false,
  "typescript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets": true,

  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingEmptyBraces": true,
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces": true,
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces": true,
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces": true,
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis": false,
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets": true,

  "javascript.format.semicolons": "remove",
  "typescript.format.semicolons": "remove",

  "javascript.preferences.quoteStyle": "single",
  "typescript.preferences.quoteStyle": "single"
}
```
