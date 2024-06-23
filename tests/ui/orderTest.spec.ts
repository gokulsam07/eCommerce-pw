import {test,expect} from '../../fixtures/PageFixtures'
import MyAccountPage from '../../pages/com.pages.myaccount/myAccountPage';
import DataFactory from '../ui/data/DataFactory'


test.describe('Edit Account Details Test', () => {
    test.beforeEach(async ({ page,baseURL,loginPage,homePage }) => {
      await page.goto(`${baseURL}`);
      await page.waitForLoadState();
      await homePage.selectOptionFromRibbonMenu(true,['My account','Login'])
      await loginPage.enterUserName(DataFactory.USERNAME);
      await loginPage.enterPassword(DataFactory.PASSWORD)
      await loginPage.login()
      await page.waitForLoadState()
    });
  
    test('Edit and save account info', async ({ page,myAccountPage,orderHistoryPage }) => {
        await myAccountPage.selectAccountMenu('Order History')
        await orderHistoryPage.viewOrderId('12148')
        expect((await orderHistoryPage.validateItem('HTC','12148')).isVisible).toBeTruthy()
    });

  })