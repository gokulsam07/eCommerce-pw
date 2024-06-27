import {test as base, expect } from '@playwright/test';
import {Page} from '@playwright/test'
import LoginPage from '../pages/login-page';
import HomePage from '../pages/home-page';
import RegistrationPage from '../pages/registrattion-page';
import EditAccountPage from '../pages/com.pages.myaccount/edit-account-page';
import MyAccountPage from '../pages/com.pages.myaccount/my-account-page';
import AddressBookPage from '../pages/com.pages.myaccount/address-book-page';
import OrderHistoryPage from '../pages/com.pages.myaccount/order-history-page';

type Fixtures = {
  loginPage: LoginPage
  homePage: HomePage
  registrationPage:RegistrationPage
  editAccountPage:EditAccountPage
  myAccountPage:MyAccountPage
  addressBookPage:AddressBookPage
  orderHistoryPage:OrderHistoryPage
  currentContextNewPage:Page
  newContextNewPage:Page
};

let test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => use(new LoginPage(page)),
  homePage: async ({ page }, use) => use(new HomePage(page)),
  registrationPage: async ({ page }, use) => use(new RegistrationPage(page)),
  editAccountPage: async ({ page }, use) => use(new EditAccountPage(page)),
  myAccountPage: async ({ page }, use) => use(new MyAccountPage(page)),
  addressBookPage: async ({ page }, use) => use(new AddressBookPage(page)),
  orderHistoryPage: async ({ page }, use) => use(new OrderHistoryPage(page)),
})

test.extend({
    currentContextNewPage: async ({ context }, use) => {
      await use(await context.newPage());
      await context.close();
    },
    newContextNewPage: async ({ browser }, use) => {
      const context = await browser.newContext()
      const page = await context.newPage()
      await use(page)
      await context.close()
    }})
export { test, expect };
