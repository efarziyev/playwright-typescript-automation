# Playwright TypeScript Automation

A test automation project built with Playwright and TypeScript for UI and API testing.

The project demonstrates some of the patterns I use when building and maintaining automated test suites, including page objects, reusable test data, API validation, cross-browser execution, and CI integration.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- GitHub Actions

## Test Coverage

Current examples include:

- Successful and unsuccessful login scenarios
- Product and shopping cart validation
- API GET and POST requests
- Positive and negative test scenarios
- Cross-browser testing with Chromium and Firefox

## Project Structure

    pages/
      LoginPage.ts
      ProductsPage.ts

    test-data/
      users.ts

    tests/
      login.spec.ts
      cart.spec.ts
      api.spec.ts

    .github/workflows/
      playwright.yml

    playwright.config.ts

## Running the Tests

Install dependencies:

    npm install

Install Playwright browsers:

    npx playwright install

Run all tests:

    npm test

Run tests in headed mode:

    npm run test:headed

Run Playwright UI mode:

    npm run test:ui

View the HTML report:

    npm run report

## Framework Features

- Page Object Model
- Reusable test data
- UI and API automation
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

Test reports are uploaded as workflow artifacts after each run.

## Next Steps

I'm continuing to expand this project with additional end-to-end scenarios, API coverage, reusable fixtures, and accessibility testing.
