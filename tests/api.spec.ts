import { test, expect } from '@playwright/test';
import { TAGS } from '../utils/tags';

test.describe('API Tests', () => {

  test(
    'users endpoint returns a successful response',
    {
      tag: [TAGS.api, TAGS.regression]
    },
    async ({ request }) => {
      const response = await request.get(
        'https://jsonplaceholder.typicode.com/users'
      );

      expect(response.status()).toBe(200);

      const users = await response.json();

      expect(Array.isArray(users)).toBeTruthy();
      expect(users.length).toBeGreaterThan(0);
      expect(users[0]).toHaveProperty('id');
      expect(users[0]).toHaveProperty('name');
      expect(users[0]).toHaveProperty('email');
    }
  );

  test(
    'can create a new post',
    {
      tag: [TAGS.api, TAGS.regression]
    },
    async ({ request }) => {
      const response = await request.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
          data: {
            title: 'Playwright API Test',
            body: 'Created from automated API test',
            userId: 1
          }
        }
      );

      expect(response.status()).toBe(201);

      const responseBody = await response.json();

      expect(responseBody.title).toBe('Playwright API Test');
      expect(responseBody.userId).toBe(1);
    }
  );

});
