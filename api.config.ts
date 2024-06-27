import { PlaywrightTestConfig, chromium,firefox,webkit } from "@playwright/test";

const config = {
    timeout :60000,
    testDir:'./tests/api',
    fullyParallel: true,
    reporter: 'html',
    workers:4,
    use:{
        headless:false,
        viewport:{width :1280, height :720},
        actionTimeout :15000, 
        ignoreHTTPErrors:true, 
        baseURL:'https://ecommerce-playground.lambdatest.io/'
    },
    projects: [
        {
            name: 'Chromium',
            use: { browserName: 'chromium' ,baseURL:'https://ecommerce-playground.lambdatest.io/'}
        }]
}

export default config;