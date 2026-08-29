import { test, expect } from '../fixtures/testFixtures';
import { users } from '../test-data/users';

test.describe('Shopping Cart', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.open();

    await loginPage.login(
      users.standard.username,
      users.standard.password
    );
  });

  test('user can add a product to the cart', async ({ productsPage }) => {
    await productsPage.addBackpackToCart();

    await expect(productsPage.cartBadge).toHaveText('1');
  });

  test('added product is displayed in the cart', async ({
    page,
    productsPage
  }) => {
    await productsPage.addBackpackToCart();
    await productsPage.openCart();

    await expect(
      page.getByText('Sauce Labs Backpack')
    ).toBeVisible();
  });

});
