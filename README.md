# Introduction

Cypress automation tests for FoxStone.

## Prerequisites:

- node - 18
- npm - 10

## One liner setup

In order to clone repo, install packages and run rightaway tests use next command:
`git clone git@github.com:minjawork/minja-foxstone-QA-test.git && cd minja-foxstone-QA-test && npm install && npm run test`

## Regular setup

If you don't want to use one liner, while to go step by step, follow next steps:

1. Install dependencies by running cmmand inside root directory : `npm install`
2. Check installed versions:

- node : `node -v`
- npm : `npm -v`
- cypress : `npx cypress --version`

3. Run Tests

   a. Open Cypress using next command: `npx cypress open`

   b. Run all tests: `npm run test`

   c. Run all tests headless using Chrome browser: `npm run cy`

## Reporters

For reporting purposes we used mochawesome reporter.
