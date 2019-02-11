[Index Page](README.md)

# How to setup a brand new Node.js project
Here we will talk about just creating a standalong Node.JS scripts project which will support ES, automated testing, linting and logging. 
The configuration could be used for any Node.JS project to get up and running. 
Please note that as of the project is just a standalone application and future we should add support for APIs/Web/Electron

## npm
Let's start with npm, just run a command npm init to begin. The npm init command will ask a bunch of questions about the project you are building

## Packages
Following packages are used for project
* babel - [babeljs.io](https://babeljs.io/)
This will allow us writting code using ES, babel will convert the ES into equivalent JavaScript
  * [@babel/core](https://babeljs.io/docs/en/babel-core) will be used to compile ES to JavaScript 
  ```bash
  npm install --save-dev @babel/core
  ```
  * [@babel/cli](https://babeljs.io/docs/en/babel-cli) will make command line available
  ```bash
  npm install --save-dev @babel/cli
  ```
  * [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) will manage the babel presets for us
  ```bash
  npm install --save-dev @babel/preset-env
  ```
  * [@babel/register](https://babeljs.io/docs/en/babel-register) will be used to compile .js files on the fly mainly for automated testing
  ```bash
  npm install @babel/register --save-dev
  ```
  * .babelrc - create the file to configure babel

* Eslint - [getting started](https://eslint.org/docs/user-guide/getting-started)
```bash
npm install eslint --save-dev
./node_modules/.bin/eslint --init
```
* Prettier - [prettier.io](https://prettier.io)
```bash
npm install --save-dev --save-exact prettier
```
* The UNIX command `rm-rf` for node [rimraf](https://github.com/isaacs/rimraf)
```bash
npm install rimraf --save-dev
```
* [cross-env](https://github.com/kentcdodds/cross-env#readme) to set and use environment variables across platforms
```bash
npm install --save-dev cross-env
```
* [Mocha](https://mochajs.org/) is the testing framework that we will use
```bash
npm install --save-dev mocha
```
* [Chai](https://www.chaijs.com/) is the assertion library that we will be use
```bash
npm install --save-dev chai
```
* [istanbul](https://istanbul.js.org/) - code coverage library
```bash
npm install --save-dev nyc
```
* [config](https://github.com/lorenwest/node-config) - for managing configs across multiple environments
```bash
npm install config
```
* [winston](https://github.com/winstonjs/winston) - for logging
```bash
npm install winston
```
* [winston-daily-rotate-file](winston-daily-rotate-file) - for log file management
```bash
npm install winston-daily-rotate-file
```

## Scripts
Scripts will help us run a particular npm command as specified in `Scripts` section of package.json
```json
"scripts": {
    "prettier": "prettier --write ./src/**/*.js",
    "lint": "eslint .",
    "lint:write": "eslint --debug . --fix",
    "pre-build": "npm run prettier && npm run lint",
    "build": "rimraf dist/ && babel ./ --out-dir dist/ --ignore ./node_modules,coverage",
    "start": " npm run prettier && npm run lint && npm run build && cross-env NODE_ENV=production node dist/app.js",
    "start-dev": " npm run prettier && npm run lint && npm run build && cross-env NODE_ENV=dev node dist/app.js",
    "test-one": "npm run prettier && npm run lint:write && cross-env NODE_ENV=test mocha --require @babel/register src/**/*.test.js --recursive -g <NAME_OF_THE_TEST>",
    "test-coverage": "cross-env NODE_ENV=test nyc --reporter=html --reporter=text mocha --require @babel/register src/**/*.test.js --recursive",
    "test": "npm run prettier && npm run lint:write && cross-env NODE_ENV=test mocha --require @babel/register src/**/*.test.js --recursive && npm run test-coverage"
  },
```