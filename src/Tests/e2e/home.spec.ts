import { test, expect } from '@playwright/test';

test('homepage has title', async ({ page }) => {
  await page.goto('http://localhost:5173'); // or whatever your local dev URL is
  await expect(page).toHaveTitle(/Vite/); // match the actual title
});
