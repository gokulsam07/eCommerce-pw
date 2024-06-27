
import { test, expect } from '../../fixtures/page-fixtures'
import DataFactory from './data/data-factory'



test.describe('Registartion Test', () => {
    test.beforeEach(async ({ page, baseURL, homePage, registrationPage }) => {
        await page.goto(`${baseURL}`);
        await page.waitForLoadState();
        await homePage.selectOptionFromRibbonMenu(true, ['My account', 'Register'])
        await registrationPage.enterRegistrationDetails(DataFactory.reg_fName,DataFactory.reg_lName,
            DataFactory.reg_email,DataFactory.reg_tel,DataFactory.reg_pass)
            await registrationPage.enableTermsNConditions()  
    });

    test('Registration Test - All mandatory fields filled @sanity', async ({ page, registrationPage }) => {
        await registrationPage.registerUser();
        await page.waitForLoadState();
        const msg = await registrationPage.validateSuccessfulUserCreation();
        await expect(msg).toBeVisible();
    });

    test('Login Test - All mandatory fields not filled', async ({ page, loginPage,registrationPage }) => {
        await loginPage.enterPassword(DataFactory.WRNGPASSWORD);
        await registrationPage.registerUser();
        expect(await page.locator(".text-danger").isVisible()).toBeTruthy();
    })


})