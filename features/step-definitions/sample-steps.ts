import { Given, When, Then } from '@cucumber/cucumber';

import LoginPage from '../page-objects/login.page';
import SecurePage from '../page-objects/secure.page';

const pages = {
  login: LoginPage,
};

Given(/^I open The Internet homepage$/, async () => {
  // Not using page object but the baseUrl instead
  await browser.url('/');
});

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
  await expect(SecurePage.flashAlert).toBeExisting();
  await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});
