// DashboardPage, LandingPage, RegisterUserPage, 

const { expect } = require("@playwright/test");
const ParentPage = require("./parentPage.page");

// ForgotPasswordPage, ProductListPage, OpenedProductPage
class ProductListPage extends ParentPage {
    constructor(page) {
        super(page)
        this.page = page;
    }

    get titlePage() {
        return this.page.locator('.app_logo')
    }

    get listItemsTitle() {
        return this.page.locator('.inventory_item_name')
    }

    async waitForProductsPage() {
        await super.waitForUrlOnPage('/inventory.html')
        await super.waitForElementVisible(this.titlePage)
    }

    async verifyPageLoaded() {
        await expect(this.titlePage).toHaveText('Swag Labs')
    }

    /** @param {string} product */
    async selectProductByName(product) {
        let elementFound;
        for (const element of await this.listItemsTitle.all()) {
            const elementText = await element.textContent()
            if (elementText === product) {
                elementFound = element;
            } 
        }
        if(elementFound) {
            await super.clickElement(elementFound)
        } else {
            throw new Error(`${product} is not a valid product listed`)
        }
    }
}

module.exports = ProductListPage; 