import {urls} from "../data/urlData";
import { test, expect } from '@playwright/test';

import { BasePage } from './BasePage';

export class HomePage extends BasePage {

    /**
     * Must be used with .first() !!!
     * @protected
     */
    protected readonly searchCardsDropdown: string = '[class*="SearchCardsDropdown_cards-dropdown-wrapper"]';
    protected readonly searchInput: string = 'input[type="text"]';
    protected readonly moreResultsButton: string = 'a[href^=\'/search/?q=\']';
    protected readonly setDarkThemeButton: string = '[class*=\'_theme-toggle__dark-theme\']';
    //I know, it is not good selector
    protected readonly searchResultItem: string = '.TagResultCards_search-card-container__UwtnY';

    /**
     * Open home page
     */
    public async openHomePage()
    {
        await this.page.goto(urls.homePage);
    }

    /**
     * Set dark theme
     */
    public async setDarkTheme()
    {
        await this.page.locator(this.setDarkThemeButton).click()
    }
    /**
     * Enter search query in search input
     *
     * @param query
     */
    public async searchByWord(query: string)
    {
        await this.page.locator(this.searchInput).click();
        await this.page.locator(this.searchInput).fill(query);
    }

    /**
     * Click on more search results button
     */
    public async clickMoreResultsButton()
    {
        await this.page.locator(this.moreResultsButton).scrollIntoViewIfNeeded();
        await this.page.locator(this.moreResultsButton).click();
        await this.page.waitForURL('***/search/?q=***');
    }

    /**
     * Wait for search results and check qty
     *
     * @param expectedQty
     */
    public async checkSearchResultsQty(expectedQty: number)
    {
        await this.page.waitForTimeout(2000);
        let searchResultsQty = await this.page.locator(this.searchResultItem).count();
        let a= 0;
        await expect(searchResultsQty).toEqual(expectedQty);
    }
}

