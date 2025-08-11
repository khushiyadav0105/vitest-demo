import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/Tests/e2e',
  use: {
    baseURL: 'http://localhost:5173', // or wherever your app runs
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
});
