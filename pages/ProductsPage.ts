import { Locator, Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly backpackAddToCartButton: Locator;
  readonly cartLink: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.getByText('Products');
    this.backpackAddToCartButton = page.getByRole('button', {
      name: 'Add to cart'
    }).first();
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

  async addBackpackToCart(): Promise<void> {
    await this.backpackAddToCartButton.click();
  }

  async openCart(): Promise<void> {
    await this.cartLink.click();
  }
}
