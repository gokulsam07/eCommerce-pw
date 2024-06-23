import { test as base, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import HomePage from '../pages/homePage';
import RegistrationPage from '../pages/regristrationPage';

type Fixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
  registrationPage:RegistrationPage
  
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
  }

});

export { test, expect };
