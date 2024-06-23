import {test,expect} from '@playwright/test'
import LoginPage from '../../pages/loginPage'

test('Login Test - Valid credentails',async({page,baseURL})=>{
    const loginPage = new LoginPage(page);
    await page.goto(`${baseURL}route=account/login`);
    await page.waitForLoadState();
    await loginPage.enterUserName('gokulsam07@gmail.com')
    await loginPage.enterPassword('Gokul@123')
    await loginPage.login()
    await page.waitForLoadState()
    await expect(await page.locator("//h2[normalize-space()='My Account']").isVisible()).toBeTruthy()
})