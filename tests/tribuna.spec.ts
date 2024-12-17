import { test, expect } from '@playwright/test';
import {HomePage} from "../src/HomePage";

test('Change theme to dark, mae search action, check result qty', async ({ page }) => {
  test.setTimeout(60000);
  const homePage = new HomePage(page);
  await homePage.openHomePage();
  await homePage.closeCoockiePopup();
  await homePage.setDarkTheme();
  await page.locator('[data-menu-moresection=\"true\"]').hover();
  await page.getByRole('link', { name: 'Авто/мото' }).click();
  await homePage.searchByWord('авто');
  await homePage.clickMoreResultsButton();
  await homePage.checkSearchResultsQty(24);
});

