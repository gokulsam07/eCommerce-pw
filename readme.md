# eCommerce-Playwright-TS
=============================

This project uses Playwright's automation capabilities with TypeScript binding to test a demo eCommerce website's functionality, APIs, and a bit of accessibility checks!

## Getting Started
choco install nodejs
### Prerequisites

* node.js
* playwright 
* axe-core

### Installation

1. Clone the repository: `git clone https://github.com/gokulsam07/eCommerce-pw.git`
2. Install dependencies: 
        a. node.js: Download node.js from `https://nodejs.org/en/download/prebuilt-installer` and install
        c. playwright: `npm install playwright`
        d. axe-core: `npm install axe-core`

### Project Structue

eCommerce-pw/
├── fixtures/
├── framework-utils/
├── pages/
├── tests/
│   ├── api/
│   └── ui/
├── api.config.ts
├── ui.config.ts
└── playwright.config.ts

- fixtures/: Contains playwright's test fixture extension of page objects to be extended for test methods on the fly

- framework-utils/: Includes utility functions and helpers for common operations across the test framework

- pages/: Contains Page Object Model (POM) classes representing different web pages for  page interactions

- tests/: Directory for test scripts:
    - api/: Contains tests for validating the backend API endpoints
    - ui/: Contains tests for validating the UI interactions
    - accessibility/: Contains accessibility checks

- package.json: Manage project dependencies & npm scripts for running tests with differnt configuration

- api.config.ts: Configuration settings specific to API testing, such as base URLs and headers

- playwright.config.ts: Global common playwright configuration file to test the whole test directory

- ui.config.ts: Configuration settings specific to UI testing, including browser settings and viewport sizes



### Test Runs

* Run all the available tests under the testDir : npx playwright test
* Run UI specific tests : `npm run api-test-chromium`
* Run API specific tests : `npm run ui-test-chromium`
* Run Sanity test for UI : `npm run ui-sanity`
* Run Sanity test for API : `npm run api-sanity`


### Reports

Once the test execution completes execute : `npx playwright show-report` to view the HTML report in browser




