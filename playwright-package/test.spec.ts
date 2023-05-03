
import { chromium, test } from '@playwright/test';
import { process } from '../react-package';

test.describe('Just a test suite', () => {
  test('Just a test case', async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const issue = process("asd");
  await browser.close();
  })
});