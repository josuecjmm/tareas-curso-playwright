
const ParentPage = require("./parentPage.page");

class ProductOpenedPage extends ParentPage {
    constructor(page) {
        super(page)
        this.page = page;
    }

    get btnAddToCart() {
        return this.page.locator('[data-test="add-to-cart"]')
    }

    get btnRemoveFromCart() {
        return this.page.locator('[data-test="remove"]')
    }

    async addProductToCart() {
        await super.clickElement(this.btnAddToCart)
    }
}

module.exports = ProductOpenedPage; 