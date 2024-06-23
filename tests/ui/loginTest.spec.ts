import {test,expect} from '../../fixtures/PageFixtures'
import DataFactory from './data/DataFactory'


test.describe('Login validation', () => {
    test.beforeEach(async ({ page,baseURL,loginPage }) => {
      await page.goto(`${baseURL}route=account/login`);
      await page.waitForLoadState();
      await loginPage.enterUserName(DataFactory.USERNAME);

    });
  
    test('Login Test - Valid credentials @sanity', async ({ page,loginPage }) => {
        await loginPage.enterPassword(DataFactory.PASSWORD);
        await loginPage.login();
        await page.waitForLoadState();
        expect(await page.locator("//h2[normalize-space()='My Account']").isVisible()).toBeTruthy();
    });
  
    test('Login Test - Invalid credentials', async ({ page ,loginPage }) => {
      await loginPage.enterPassword(DataFactory.WRNGPASSWORD);
      await loginPage.login();
      expect(await page.locator(".alert-danger.alert-dismissible").isVisible()).toBeTruthy();
    })
  

  })

// test('Login Test - Valid credentails @sanity',async({page,baseURL,loginPage})=>{
//     await page.goto(`${baseURL}route=account/login`);
//     await page.waitForLoadState();
//     await loginPage.enterUserName(DataFactory.USERNAME)
//     await loginPage.enterPassword(DataFactory.PASSWORD)
//     await loginPage.login()
//     await page.waitForLoadState()
//     expect(await page.locator("//h2[normalize-space()='My Account']").isVisible()).toBeTruthy()
// })

// test('Login Test - Invalid credentails',async({page,baseURL,loginPage})=>{
//     await page.goto(`${baseURL}route=account/login`);
//     await page.waitForLoadState();
//     await loginPage.enterUserName(DataFactory.USERNAME)
//     await loginPage.enterPassword(DataFactory.WRNGPASSWORD)
//     await loginPage.login()
//     expect(await page.locator(".alert-danger.alert-dismissible").isVisible()).toBeTruthy()
// })