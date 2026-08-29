import { test, expect } from '../fixtures/testFixtures';
import { users } from '../test-data/users';
import { TAGS } from '../utils/tags';

test.describe('Shopping Cart', () => {

  test.beforeEach(async ({ loginPage }) => {
    await test.step('Login with standard user', async () => {
      await loginPage.open();

      await loginPage.login(
        users.standard.username,
        users.standard.password
      );
    });
  });

  test(
    'user can add a product to the cart',
    {
      tag: [TAGS.smoke, TAGS.regression]
    },
    async ({ productsPage }) => {

      await test.step('Add backpack to the cart', async () => {
        await productsPage.addBackpackToCart();
      });

      await test.step('Verify cart contains one item', async () => {
        await expect(productsPage.cartBadge).toHaveText('1');
      });
    }
  );

  test(
    'added product is displayed in the cart',
    {
      tag: TAGS.regression
    },
    async ({ page, productsPage }) => {

      await test.step('Add backpack to the cart', async () => {
        await productsPage.addBackpackToCart();
      });

      await test.step('Open shopping cart', async () => {
        await productsPage.openCart();
      });

      await test.step('Verify backpack is displayed in the cart', async () => {
        await expect(
          page.getByText('Sauce Labs Backpack')
        ).toBeVisible();
      });
    }
  );

});
