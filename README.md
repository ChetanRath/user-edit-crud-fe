# template-bp

This is a mono-repository consisting different applications like web-client, server client etc of the template-bp web ecosystem's.
template-bp web is thought out to follow Microfrontend based architecture to seperate out builds and follow code splitting for seperate applications. It is also thought out as a single repo based codebase for backend and frontend included

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

## Prerequisites

- Versions of softwares as mentioned below in the Dev environment section

## Setup

- `yarn` - To install dependencies
- `yarn start:client` - To start web-client

## Development Environment

- NodeJS: v18.15.0
- NPM: v9.5.0
- Yarn: v1.22.19
- OS: Mac 15+ / Ubuntu 20.04LTS+
- Docker version 23.0.3
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
