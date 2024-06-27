import {test,expect} from '../../Fixtures/PageFixtures'
import DataFactory from './data/DataFactory'


test.describe('Address Book Tests', () => {
    test.beforeEach(async ({ page,baseURL,loginPage,homePage, myAccountPage}) => {
      await page.goto(`${baseURL}`);
      await page.waitForLoadState();
      await homePage.selectOptionFromRibbonMenu(true,['My account','Login'])
      await loginPage.enterUserName(DataFactory.USERNAME);
      await loginPage.enterPassword(DataFactory.PASSWORD)
      await loginPage.login()
      await page.waitForLoadState()
      await myAccountPage.selectAccountMenu('Address Book')
    });
  
    test('Validate warning for delete default address', async ({ page,addressBookPage }) => { 
        await addressBookPage.deleteAddress()
        expect((await addressBookPage.validateWarning()).isVisible).toBeTruthy()
    });
  
  

  })