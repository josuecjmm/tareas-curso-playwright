// DashboardPage, LandingPage, RegisterUserPage, 

const { expect } = require("@playwright/test");
const ParentPage = require("./parentPage.page");

// ForgotPasswordPage, ProductListPage, OpenedProductPage
class ProductListPage extends ParentPage {
    constructor(page) {
        super()
        this.page = page;
    }

    get titlePage() {
        return this.page.locator('.app_logo')
    }

    async waitForProductsPage() {
        await super.waitForUrlOnPage(this.page, '/inventory.html')
        await super.waitForElementVisible(this.titlePage)
    }

    async verifyPageLoaded() {
        await expect(this.titlePage).toHaveText('Swag Labs')
    }
}

module.exports = ProductListPage; 