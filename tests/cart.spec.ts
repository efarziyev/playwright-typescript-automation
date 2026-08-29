import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { users } from '../test-data/users';

test.describe('Shopping Cart', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login(
      users.standard.username,
      users.standard.password
    );
  });

  test('user can add a product to the cart', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    await productsPage.addBackpackToCart();

    await expect(productsPage.cartBadge).toHaveText('1');
  });

  test('added product is displayed in the cart', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    await productsPage.addBackpackToCart();
    await productsPage.openCart();

    await expect(
      page.getByText('Sauce Labs Backpack')
    ).toBeVisible();
  });

});
