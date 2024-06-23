import { PlaywrightTestConfig, chromium,firefox,webkit } from "@playwright/test";

const config = {
    timeout :60000,
    testDir:'./tests/ui',
    fullyParallel: true,
    reporter: 'html',
    workers:5,
    use:{
        baseURL:'https://ecommerce-playground.lambdatest.io/index/php?',
        headless:false,
        viewport:{width :1280, height :720},
        actionTimeout :15000, 
        video:"off",
        screenshot: "only-on-failure",
        ignoreHTTPErrors:true, 
    },
    projects: [
        {
            name: 'Chromium',
            use: { browserName: 'chromium' }
        }, {
            name: 'Firefox',
            use: { browserName: 'firefox' }
        }, {
            name: 'WebKit',
            use: { browserName: 'webkit' }
        }]
}

export default config;