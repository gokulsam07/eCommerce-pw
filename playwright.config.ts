import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Set the base test directory
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    // Common settings for all tests
    headless:false
  },

  /* Configure projects for major browsers and API tests */
  projects: [
    {
      name: 'chromium',
      testDir: './tests/ui',
      use: { ...devices['Desktop Chrome'], baseURL: 'https://ecommerce-playground.lambdatest.io/index.php?' },
    },
    {
      name: 'firefox',
      testDir: './tests/ui',
      use: { ...devices['Desktop Firefox'], baseURL: 'https://ecommerce-playground.lambdatest.io/index.php?' },
    },
    {
      name: 'webkit',
      testDir: './tests/ui', 
      use: { ...devices['Desktop Safari'], baseURL: 'https://ecommerce-playground.lambdatest.io/index.php?' },
    },
    {
      name: 'api',
      testDir: './tests/api',
      use: {
        baseURL: 'https://ecommerce-playground.lambdatest.io/index.php?',
      },
    },
  ],
});
