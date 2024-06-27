import {test,expect} from '../../Fixtures/PageFixtures'
import DataFactory from './data/DataFactory'


test.describe('Edit Account Details Test', () => {
    test.beforeEach(async ({ page,baseURL,loginPage,homePage }) => {
      await page.goto(`${baseURL}`)
      await page.waitForLoadState()
      await homePage.selectOptionFromRibbonMenu(true,['My account','Login'])
      await loginPage.enterUserName(DataFactory.USERNAME);
      await loginPage.enterPassword(DataFactory.PASSWORD)
      await loginPage.login()
      await page.waitForLoadState()
      });
  
    test('Edit and save account info @sanity', async ({myAccountPage,editAccountPage }) => {
        await myAccountPage.selectAccountMenu('Edit Account')
        await editAccountPage.editProfileDetailsAndSave('phone','6785432190')
        expect((await myAccountPage.validateMessage()).isVisible).toBeTruthy()
    });
  
    test('Validate saved info', async ({ page ,myAccountPage,editAccountPage  }) => {
        await myAccountPage.selectAccountMenu('Edit Account')
        expect((await page.locator("#input-telephone").inputValue()).includes('6785432190')).toBe(true)
    })
  

  })