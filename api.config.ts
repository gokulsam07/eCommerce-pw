import { PlaywrightTestConfig, chromium,firefox,webkit } from "@playwright/test";

const config = {
    timeout :60000,
    testDir:'./tests/api',
    fullyParallel: true,
    reporter: 'html',
    workers:5,
    use:{
        headless:false,
        viewport:{width :1280, height :720},
        actionTimeout :15000, 
        ignoreHTTPErrors:true, 
        baseURL:'https://ecommerce-playground.lambdatest.io/index.php?'
    },
    projects: [
        {
            name: 'Chromium',
            use: { browserName: 'chromium' ,baseURL:'https://ecommerce-playground.lambdatest.io/index.php?'}
        }]
}

export default config;