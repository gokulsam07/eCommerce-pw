import { test as base, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import HomePage from '../pages/homePage';
import RegistrationPage from '../pages/regristrationPage';
import EditAccountPage from '../pages/com.pages.myaccount/editAccountPage';
import MyAccountPage from '../pages/com.pages.myaccount/myAccountPage';
import AddressBookPage from '../pages/com.pages.myaccount/addressBookPage';
import OrderHistoryPage from '../pages/com.pages.myaccount/orderHistoryPage';

type Fixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
  registrationPage:RegistrationPage
  editAccountPage:EditAccountPage
  myAccountPage:MyAccountPage
  addressBookPage:AddressBookPage
  orderHistoryPage:OrderHistoryPage


  
};

const test = base.extend<Fixtures>({

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage : async ({ page }, use) => {
    await use(new HomePage(page));
  },
  registrationPage : async ({ page }, use) => {
    await use(new RegistrationPage(page));
  },
  editAccountPage : async ({ page }, use) => {
    await use(new EditAccountPage(page));
  },
  myAccountPage : async ({ page }, use) => {
    await use(new MyAccountPage(page));
  },
  addressBookPage : async ({ page }, use) => {
    await use(new AddressBookPage(page));
  },
  orderHistoryPage : async ({ page }, use) => {
    await use(new OrderHistoryPage(page));
  }

});

export { test, expect };
