class ParentPage {
    constructor(page) {
        this.page = page;
    }

    /**
     * Function to click on an element 
     * @param {import("@playwright/test").Locator} element
     */
    async clickElement(element) {
        await element.waitFor()
        await element.click()
    }

    async fillInput(element, text) {
        await element.waitFor()
        await element.fill(text)
    }

    async waitForElementVisible(element) {
        await element.waitFor({ state: 'visible' })
    }
    
    /**
     * Function to wait for an url to happen on the page
     * @param {string} url
     * @returns {Promise<void>}
     */
    async waitForUrlOnPage(url) {
        await this.page.waitForURL(url)
    }

}

module.exports = ParentPage; 