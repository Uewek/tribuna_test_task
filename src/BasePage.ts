import {expect, Page, Locator} from '@playwright/test';

/**
 * Base class for all pages
 */
export abstract class BasePage {
    protected readonly page: Page;

    /**
     * Constructor of all pages
     * @param page
     */
    public constructor(page: Page) {
        this.page = page;
    }

    /**
     * Close cookies pop-up window
     */
    public async closeCoockiePopup() {
        await this.page.getByRole('button', {name: 'Close'}).click();
    }
}