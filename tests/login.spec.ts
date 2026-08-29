import { test, expect } from '../fixtures/testFixtures';
import { users } from '../test-data/users';
import { TAGS } from '../utils/tags';

test.describe('Login', () => {

  test(
    'standard user can log in successfully',
    {
      tag: [TAGS.smoke, TAGS.regression]
    },
    async ({ loginPage, page }) => {
      await loginPage.open();

      await loginPage.login(
        users.standard.username,
        users.standard.password
      );

      await expect(page).toHaveURL(/inventory/);
      await expect(page.getByText('Products')).toBeVisible();
    }
  );

  test(
    'locked user cannot log in',
    {
      tag: TAGS.regression
    },
    async ({ loginPage }) => {
      await loginPage.open();

      await loginPage.login(
        users.locked.username,
        users.locked.password
      );

      await expect(loginPage.errorMessage).toContainText('locked out');
    }
  );

});
