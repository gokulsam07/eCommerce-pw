import {test,expect} from '../../fixtures/page-fixtures'
import DataFactory from './data/data-factory'


test.describe('Login validation', () => {
    test.beforeEach(async ({ page,loginPage }) => {
      await page.goto(`index.php?route=account/login`);
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