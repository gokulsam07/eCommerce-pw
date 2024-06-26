import {test as base, expect } from '@playwright/test';
import {Page} from '@playwright/test'
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import RegistrationPage from '../pages/RegristrationPage';
import EditAccountPage from '../pages/com.pages.myaccount/EditAccountPage';
import MyAccountPage from '../pages/com.pages.myaccount/MyAccountPage';
import AddressBookPage from '../pages/com.pages.myaccount/AddressBookPage';
import OrderHistoryPage from '../pages/com.pages.myaccount/OrderHistoryPage';
import { RestController,createRequestContext } from '../FrameworkUtils/RestController';

type Fixtures = {
  restController:RestController
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
  restController :async  ({baseURL}, use) => use((new RestController(await createRequestContext(baseURL)))),
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
