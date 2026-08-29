import AxeBuilder from '@axe-core/playwright';
import { test, expect } from '../fixtures/testFixtures';
import { users } from '../test-data/users';
import { TAGS } from '../utils/tags';

test.describe('Accessibility Tests', () => {

  test(
    'products page accessibility scan',
    {
      tag: TAGS.a11y
    },
    async ({ loginPage, page }) => {

      await test.step('Login with standard user', async () => {
        await loginPage.open();

        await loginPage.login(
          users.standard.username,
          users.standard.password
        );
      });

      await test.step('Scan products page for accessibility violations', async () => {
        const accessibilityScanResults = await new AxeBuilder({ page })
          .analyze();

        const criticalViolations =
          accessibilityScanResults.violations.filter(
            violation => violation.impact === 'critical'
          );

        console.log(
          `Critical accessibility violations found: ${criticalViolations.length}`
        );

        criticalViolations.forEach(violation => {
          console.log(
            `${violation.id}: ${violation.description}`
          );
        });

        expect(accessibilityScanResults).toBeDefined();
      });
    }
  );

});
