# eCommerce-Playwright-TS

This project uses Playwright's automation capabilities with TypeScript binding to test a demo eCommerce website's functionality, APIs, and a bit of accessibility checks!

### Prerequisites

* node.js
* playwright 
* axe-core

### Installation

1. Clone the repository: `git clone https://github.com/gokulsam07/eCommerce-pw.git`
2. Install dependencies:
   - node.js: Download node.js from `https://nodejs.org/en/download/prebuilt-installer` and install
   - playwright: `npm install playwright`
   - axe-core: `npm install @axe-core/playwright`

### Project Structue

```
eCommerce-pw/                       # root dir
├── fixtures/                       # contains playwright's test fixture extension of page objects to be extended for test methods on the fly
├── framework-utils/                # includes utility functions and helpers for common operations across the test framework
├── pages/                          # contains page object model classes representing different web pages for  page interactions
├── tests/                          # directory for test scripts
│   ├── api/                        # contains tests for validating the API endpoints
│   ├── ui/                         # contains tests for validating the UI interactions
│   └── accessibility/              # contains accessibility checks
├── package.json                    # manage project dependencies & maintain npm scripts for running tests with different configuration
├── api.config.ts                   # configuration settings specific to API testing, such as base URLs and headers
├── ui.config.ts                    # configuration settings specific to UI testing, including browser settings and viewport sizes
└── playwright.config.ts            # global common playwright configuration file to test the whole test directory

```

### Test Runs

* Run all the available tests under the testDir : npx playwright test
* Run UI specific tests : `npm run ui-test-chromium`
* Run API specific tests : `npm run api-test-chromium`
* Run Sanity test for UI : `npm run ui-sanity`
* Run Sanity test for API : `npm run api-sanity`


### Reports

Once the test execution completes execute : `npx playwright show-report` to view the HTML report in browser




