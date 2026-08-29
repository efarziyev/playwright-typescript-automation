# Playwright TypeScript Automation

A test automation framework built with Playwright and TypeScript for UI, API, and accessibility testing.

This project demonstrates practical automation patterns used in modern QA engineering, including Page Object Model, custom fixtures, reusable test data, test tagging, API validation, accessibility checks, cross-browser execution, and CI integration.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Axe Core
- GitHub Actions

## Test Coverage

Current examples include:

- Successful and unsuccessful login scenarios
- Product and shopping cart validation
- API GET and POST requests
- Accessibility validation
- Positive and negative test scenarios
- Smoke and regression test suites
- Cross-browser testing with Chromium and Firefox

## Project Structure

    pages/
      LoginPage.ts
      ProductsPage.ts

    fixtures/
      testFixtures.ts

    test-data/
      users.ts

    utils/
      tags.ts

    tests/
      login.spec.ts
      cart.spec.ts
      api.spec.ts
      accessibility.spec.ts

    .github/workflows/
      playwright.yml

    playwright.config.ts
    package.json

## Running the Tests

Install dependencies:

    npm install

Install Playwright browsers:

    npx playwright install

Run all tests:

    npm test

Run smoke tests:

    npm run test:smoke

Run regression tests:

    npm run test:regression

Run accessibility tests:

    npm run test:a11y

Run tests in headed mode:

    npm run test:headed

Run Playwright UI mode:

    npm run test:ui

View the HTML report:

    npm run report

## Framework Features

- Page Object Model
- Custom Playwright fixtures
- Reusable test data
- Centralized test tags
- Smoke and regression test execution
- UI and API automation
- Accessibility testing with Axe Core
- Structured test steps
- Parallel test execution
- Cross-browser testing
- Automatic retries in CI
- Screenshots on failure
- Video capture on failure
- Playwright traces
- HTML reporting
- GitHub Actions CI

## CI

The test suite runs automatically through GitHub Actions on pushes and pull requests to the main branch.

The CI pipeline installs dependencies and Playwright browsers, executes the automated test suite, and uploads test reports as workflow artifacts.

## Test Organization

Tests are categorized using centralized tags such as:

- `@smoke`
- `@regression`
- `@api`
- `@e2e`
- `@a11y`

This allows targeted test execution for different testing needs.

## Future Improvements

Planned improvements include expanding end-to-end coverage, adding more API scenarios, environment-based configuration, and additional reusable test utilities.
