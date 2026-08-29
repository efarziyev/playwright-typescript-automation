import { test, expect } from '../fixtures/testFixtures';
import { users } from '../test-data/users';

test.describe('Login', () => {

  test('standard user can log in successfully @smoke @regression', async ({ loginPage, page }) => {
    await loginPage.open();

    await loginPage.login(
      users.standard.username,
      users.standard.password
    );

    await expect(page).toHaveURL(/inventory/);
    await expect(page.getByText('Products')).toBeVisible();
  });

  test('locked user cannot log in', async ({ loginPage }) => {
    await loginPage.open();

    await loginPage.login(
      users.locked.username,
      users.locked.password
    );

    await expect(loginPage.errorMessage).toContainText('locked out');
  });

});
