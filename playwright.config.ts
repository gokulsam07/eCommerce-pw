import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests', 
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    headless:false,
    screenshot:"only-on-failure",
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], baseURL: 'https://ecommerce-playground.lambdatest.io/index.php?' },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], baseURL: 'https://ecommerce-playground.lambdatest.io/index.php?' },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'], baseURL: 'https://ecommerce-playground.lambdatest.io/index.php?' },
    },
    {
      name: 'api',
      use: {
        baseURL: 'https://ecommerce-playground.lambdatest.io/index.php?',
      }
    }
  ]
})
